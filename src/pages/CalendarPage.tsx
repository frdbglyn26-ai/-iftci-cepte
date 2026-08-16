import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Check,
  Sprout,
  Circle,
  ListChecks,
  CalendarDays,
} from 'lucide-react';
import { crops, getCropById } from '@/data/crops';
import { Crop } from '@/types/crop';
import {
  CalendarTask,
  TaskType,
  generateTasks,
  getTaskMeta,
  getTodayTasks,
  getWeekTasks,
  formatTurkishDate,
  formatTurkishDateShort,
  toISO,
} from '@/utils/calendarTasks';

const WEEK_DAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
];

function getDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = [];
  const firstDay = new Date(year, month, 1);
  const dayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0

  // Previous month padding
  for (let i = dayOfWeek - 1; i >= 0; i--) {
    days.push(new Date(year, month, -i));
  }

  const lastDate = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= lastDate; d++) {
    days.push(new Date(year, month, d));
  }

  // Next month padding to fill the grid
  while (days.length % 7 !== 0) {
    days.push(new Date(year, month + 1, days.length - lastDate - dayOfWeek + 1));
  }

  return days;
}

export default function CalendarPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cropIdParam = searchParams.get('crop') ?? '';
  const dateParam = searchParams.get('date') ?? '';

  const [selectedCropId, setSelectedCropId] = useState<string>(cropIdParam || 'domates');
  const [plantingDate, setPlantingDate] = useState<string>(
    dateParam || toISO(new Date())
  );
  const [viewDate, setViewDate] = useState<Date>(
    dateParam ? new Date(dateParam + 'T00:00:00') : new Date()
  );
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [selectedDayTasks, setSelectedDayTasks] = useState<CalendarTask[] | null>(null);

  const selectedCrop: Crop | undefined = getCropById(selectedCropId);
  const today = new Date();
  const todayISO = toISO(today);

  // Generate tasks when crop or planting date changes
  const tasks = useMemo<CalendarTask[]>(() => {
    if (!selectedCrop) return [];
    const plantingDateObj = new Date(plantingDate + 'T00:00:00');
    return generateTasks(selectedCrop, plantingDateObj);
  }, [selectedCrop, plantingDate]);

  // Group tasks by date
  const tasksByDate = useMemo(() => {
    const map = new Map<string, CalendarTask[]>();
    for (const task of tasks) {
      const existing = map.get(task.date) ?? [];
      existing.push(task);
      map.set(task.date, existing);
    }
    return map;
  }, [tasks]);

  const todayTasks = useMemo(() => getTodayTasks(tasks, today), [tasks]);
  const weekTasks = useMemo(() => getWeekTasks(tasks, today), [tasks]);

  const calendarDays = useMemo(
    () => getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth()),
    [viewDate]
  );

  // Update URL when crop or date changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCropId) params.set('crop', selectedCropId);
    if (plantingDate) params.set('date', plantingDate);
    setSearchParams(params, { replace: true });
  }, [selectedCropId, plantingDate, setSearchParams]);

  // When crop changes via URL (from crop detail page), update state
  useEffect(() => {
    if (cropIdParam && cropIdParam !== selectedCropId) {
      setSelectedCropId(cropIdParam);
    }
  }, [cropIdParam]);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setViewDate(new Date());
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  };

  const handleCropChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCropId(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    if (newDate) {
      setPlantingDate(newDate);
      setViewDate(new Date(newDate + 'T00:00:00'));
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="flex items-center justify-center gap-2 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          <CalendarIcon className="h-8 w-8 text-primary-700" />
          Akıllı Tarım Takvimi
        </h1>
        <p className="mt-3 text-neutral-500">
          Ürününüzü ve ekim tarihini seçin, otomatik yetiştirme takviminizi oluşturun.
        </p>
      </div>

      {/* Crop & Date Selection */}
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-6 shadow-card sm:p-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-neutral-700">
              <Sprout className="h-4 w-4 text-primary-600" />
              Ürününü Seç
            </label>
            <select
              value={selectedCropId}
              onChange={handleCropChange}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 outline-none transition-all duration-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
            >
              {crops.map((crop) => (
                <option key={crop.id} value={crop.id}>
                  {crop.emoji} {crop.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-neutral-700">
              <CalendarDays className="h-4 w-4 text-primary-600" />
              Ekim / Dikim Tarihi
            </label>
            <input
              type="date"
              value={plantingDate}
              onChange={handleDateChange}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 outline-none transition-all duration-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
            />
          </div>
        </div>
        {selectedCrop && (
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-3 text-sm text-primary-800">
            <span className="text-lg">{selectedCrop.emoji}</span>
            <span className="font-medium">
              {selectedCrop.name} — {formatTurkishDate(new Date(plantingDate + 'T00:00:00'))} tarihinde ekim/dikim
            </span>
          </div>
        )}
      </div>

      {/* Today's Tasks Card */}
      {selectedCrop && (
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-950 shadow-card-hover">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <Sprout className="h-6 w-6 text-white" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Bugün Ne Yapmalıyım?
                </h2>
                <p className="text-sm text-primary-100/80">
                  {formatTurkishDate(today)} — {selectedCrop.name}
                </p>
              </div>
            </div>

            {todayTasks.length > 0 ? (
              <div className="mt-5 space-y-2.5">
                {todayTasks.map((task) => {
                  const meta = getTaskMeta(task.type);
                  const isDone = completedTasks.has(task.id);
                  return (
                    <button
                      key={task.id}
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className="flex w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-left transition-all duration-200 hover:bg-white/15"
                    >
                      <span className="text-xl">{meta.emoji}</span>
                      <span
                        className={`flex-1 text-sm font-medium ${
                          isDone ? 'text-primary-100/50 line-through' : 'text-white'
                        }`}
                      >
                        {task.title}
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          isDone
                            ? 'border-accent-400 bg-accent-400 text-primary-950'
                            : 'border-white/40 text-transparent'
                        }`}
                      >
                        <Check className="h-4 w-4" />
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="mt-5 rounded-xl bg-white/10 px-4 py-6 text-center">
                <p className="text-sm text-primary-100/80">
                  Bugün için planlanmış görev bulunmuyor. Takvimde diğer görevleri kontrol edebilirsiniz.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Weekly View */}
      {selectedCrop && weekTasks.length > 0 && (
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-white p-6 shadow-card sm:p-7">
          <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900">
            <ListChecks className="h-5 w-5 text-primary-700" />
            Bu Hafta — {selectedCrop.name}
          </h2>
          <div className="mt-4 space-y-2.5">
            {weekTasks.map((task) => {
              const meta = getTaskMeta(task.type);
              const isDone = completedTasks.has(task.id);
              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex w-full items-center gap-3 rounded-xl border border-neutral-100 px-4 py-3 text-left transition-all duration-200 hover:border-primary-200 hover:bg-primary-50"
                >
                  <span className="text-xl">{meta.emoji}</span>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-semibold ${
                        isDone ? 'text-neutral-400 line-through' : 'text-neutral-800'
                      }`}
                    >
                      {task.title}
                    </p>
                    <p className="text-xs text-neutral-500">{formatTurkishDateShort(task.date)}</p>
                  </div>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                      isDone
                        ? 'border-primary-600 bg-primary-600 text-white'
                        : 'border-neutral-300 text-transparent'
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Calendar */}
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-4 shadow-card sm:p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">
            {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
          </h2>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
              aria-label="Önceki ay"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleToday}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Bugün
            </button>
            <button
              type="button"
              onClick={handleNextMonth}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
              aria-label="Sonraki ay"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Week day headers */}
        <div className="mt-4 grid grid-cols-7 gap-1">
          {WEEK_DAYS.map((day) => (
            <div key={day} className="py-2 text-center text-xs font-semibold text-neutral-400">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const isoDate = toISO(day);
            const isCurrentMonth = day.getMonth() === viewDate.getMonth();
            const isToday = isoDate === todayISO;
            const dayTasks = tasksByDate.get(isoDate) ?? [];

            return (
              <button
                key={index}
                type="button"
                onClick={() => dayTasks.length > 0 && setSelectedDayTasks(dayTasks)}
                className={`relative flex flex-col items-center justify-center rounded-lg py-2 text-sm transition-all duration-200 sm:py-3 ${
                  isToday
                    ? 'bg-primary-700 text-white font-bold shadow-card'
                    : isCurrentMonth
                    ? 'text-neutral-700 hover:bg-primary-50'
                    : 'text-neutral-300 hover:bg-neutral-50'
                } ${dayTasks.length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className={isToday ? 'text-white' : ''}>{day.getDate()}</span>
                {dayTasks.length > 0 && (
                  <div className="mt-1 flex gap-0.5">
                    {dayTasks.slice(0, 3).map((task) => {
                      const meta = getTaskMeta(task.type);
                      return (
                        <span
                          key={task.id}
                          className={`h-1.5 w-1.5 rounded-full ${meta.dotClass} ${
                            isToday ? 'ring-1 ring-white/60' : ''
                          }`}
                        />
                      );
                    })}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Task type legend */}
        <div className="mt-5 flex flex-wrap gap-3 border-t border-neutral-100 pt-4">
          {(
            [
              { type: 'planting', label: 'Ekim' },
              { type: 'germination', label: 'Çimlenme' },
              { type: 'irrigation', label: 'Sulama' },
              { type: 'growth', label: 'Gelişim' },
              { type: 'fertilization', label: 'Gübreleme' },
              { type: 'disease', label: 'Hastalık' },
              { type: 'pest', label: 'Zararlı' },
              { type: 'maintenance', label: 'Bakım' },
              { type: 'harvest', label: 'Hasat' },
            ] as { type: TaskType; label: string }[]
          ).map(({ type, label }) => {
            const meta = getTaskMeta(type);
            return (
              <div key={type} className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${meta.dotClass}`} />
                <span className="text-xs text-neutral-500">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Tasks List */}
      {selectedCrop && tasks.length > 0 && (
        <div className="mx-auto mt-8 max-w-3xl">
          <h2 className="mb-4 text-lg font-bold text-neutral-900">
            Yetiştirme Takvimi — {selectedCrop.name}
          </h2>
          <div className="space-y-2.5">
            {tasks.map((task) => {
              const meta = getTaskMeta(task.type);
              const isDone = completedTasks.has(task.id);
              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex w-full items-start gap-3 rounded-2xl bg-white p-4 text-left shadow-card transition-all duration-200 hover:shadow-card-hover"
                >
                  <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg ${meta.colorClass}`}>
                    {meta.emoji}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-sm font-bold ${
                          isDone ? 'text-neutral-400 line-through' : 'text-neutral-900'
                        }`}
                      >
                        {task.title}
                      </h3>
                      <span className="flex-shrink-0 text-xs font-medium text-neutral-400">
                        {formatTurkishDateShort(task.date)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                      {task.description}
                    </p>
                    {task.isEstimate && (
                      <p className="mt-1 text-xs italic text-accent-600">
                        * Tahmini tarih — bölge ve iklime göre değişebilir.
                      </p>
                    )}
                  </div>
                  <span
                    className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                      isDone
                        ? 'border-primary-600 bg-primary-600 text-white'
                        : 'border-neutral-300 text-transparent'
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Day Tasks Modal */}
      {selectedDayTasks && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-primary-950/40 backdrop-blur-sm sm:items-center"
          onClick={() => setSelectedDayTasks(null)}
        >
          <div
            className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white p-6 shadow-card-hover sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-neutral-900">
                {formatTurkishDate(new Date(selectedDayTasks[0].date + 'T00:00:00'))}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedDayTasks(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {selectedDayTasks.map((task) => {
                const meta = getTaskMeta(task.type);
                const isDone = completedTasks.has(task.id);
                return (
                  <button
                    key={task.id}
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    className="flex w-full items-start gap-3 rounded-xl border border-neutral-100 p-4 text-left transition-all duration-200 hover:border-primary-200 hover:bg-primary-50"
                  >
                    <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg ${meta.colorClass}`}>
                      {meta.emoji}
                    </span>
                    <div className="flex-1">
                      <h4
                        className={`text-sm font-bold ${
                          isDone ? 'text-neutral-400 line-through' : 'text-neutral-900'
                        }`}
                      >
                        {task.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                        {task.description}
                      </p>
                    </div>
                    <span
                      className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                        isDone
                          ? 'border-primary-600 bg-primary-600 text-white'
                          : 'border-neutral-300 text-transparent'
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mx-auto mt-8 max-w-3xl">
        <div className="flex items-start gap-3 rounded-2xl bg-accent-50 p-5 text-sm text-accent-900 ring-1 ring-accent-100">
          <Circle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
          <p className="leading-relaxed">
            Takvimdeki tarihler ürünün genel yetiştirme aşamalarına göre tahmini olarak
            hesaplanmıştır. Gerçek zamanlar bölge, iklim, toprak ve ürün çeşidine göre
            değişiklik gösterebilir. Kesin kararlar için bölgenizdeki tarım kuruluşlarına
            danışmanız önerilir.
          </p>
        </div>
      </div>
    </div>
  );
}
