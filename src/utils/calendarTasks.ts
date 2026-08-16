import { Crop } from '@/types/crop';

export type TaskType =
  | 'planting'
  | 'germination'
  | 'irrigation'
  | 'growth'
  | 'fertilization'
  | 'disease'
  | 'pest'
  | 'maintenance'
  | 'harvest';

export interface CalendarTask {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  type: TaskType;
  title: string;
  description: string;
  isEstimate: boolean;
}

const TASK_META: Record<TaskType, { emoji: string; colorClass: string; dotClass: string }> = {
  planting: { emoji: '🌱', colorClass: 'bg-primary-100 text-primary-700', dotClass: 'bg-primary-600' },
  germination: { emoji: '🌱', colorClass: 'bg-primary-100 text-primary-700', dotClass: 'bg-primary-500' },
  irrigation: { emoji: '💧', colorClass: 'bg-secondary-100 text-secondary-700', dotClass: 'bg-secondary-500' },
  growth: { emoji: '🌿', colorClass: 'bg-primary-100 text-primary-700', dotClass: 'bg-primary-400' },
  fertilization: { emoji: '🌿', colorClass: 'bg-accent-100 text-accent-700', dotClass: 'bg-accent-500' },
  disease: { emoji: '🐛', colorClass: 'bg-error-50 text-error-600', dotClass: 'bg-error-500' },
  pest: { emoji: '🐞', colorClass: 'bg-warning-50 text-warning-600', dotClass: 'bg-warning-500' },
  maintenance: { emoji: '✂️', colorClass: 'bg-earth-100 text-earth-700', dotClass: 'bg-earth-500' },
  harvest: { emoji: '🌾', colorClass: 'bg-accent-100 text-accent-700', dotClass: 'bg-accent-600' },
};

export function getTaskMeta(type: TaskType) {
  return TASK_META[type];
}

function parseDurationDays(duration: string): number {
  const lower = duration.toLocaleLowerCase('tr-TR');

  const weekMatch = lower.match(/(\d+)\s*-\s*(\d+)\s*hafta/);
  if (weekMatch) {
    const min = parseInt(weekMatch[1], 10);
    const max = parseInt(weekMatch[2], 10);
    return Math.round(((min + max) / 2) * 7);
  }
  const singleWeekMatch = lower.match(/(\d+)\s*hafta/);
  if (singleWeekMatch) return parseInt(singleWeekMatch[1], 10) * 7;

  const dayRangeMatch = lower.match(/(\d+)\s*-\s*(\d+)\s*gün/);
  if (dayRangeMatch) {
    const min = parseInt(dayRangeMatch[1], 10);
    const max = parseInt(dayRangeMatch[2], 10);
    return Math.round((min + max) / 2);
  }
  const singleDayMatch = lower.match(/(\d+)\s*gün/);
  if (singleDayMatch) return parseInt(singleDayMatch[1], 10);

  if (lower.includes('sürekli')) return 30;

  const monthMatch = lower.match(/(\d+)\s*-\s*(\d+)\s*ay/);
  if (monthMatch) {
    const min = parseInt(monthMatch[1], 10);
    const max = parseInt(monthMatch[2], 10);
    return Math.round(((min + max) / 2) * 30);
  }
  const singleMonthMatch = lower.match(/(\d+)\s*ay/);
  if (singleMonthMatch) return parseInt(singleMonthMatch[1], 10) * 30;

  return 7;
}

function parseHarvestDays(harvestPeriod: string): number {
  const lower = harvestPeriod.toLocaleLowerCase('tr-TR');

  const dayRangeMatch = lower.match(/(\d+)\s*-\s*(\d+)\s*gün/);
  if (dayRangeMatch) {
    const min = parseInt(dayRangeMatch[1], 10);
    const max = parseInt(dayRangeMatch[2], 10);
    return Math.round((min + max) / 2);
  }
  const singleDayMatch = lower.match(/(\d+)\s*gün/);
  if (singleDayMatch) return parseInt(singleDayMatch[1], 10);

  const monthRangeMatch = lower.match(/(\d+)\s*-\s*(\d+)\s*ay/);
  if (monthRangeMatch) {
    const min = parseInt(monthRangeMatch[1], 10);
    const max = parseInt(monthRangeMatch[2], 10);
    return Math.round(((min + max) / 2) * 30);
  }
  const singleMonthMatch = lower.match(/(\d+)\s*ay/);
  if (singleMonthMatch) return parseInt(singleMonthMatch[1], 10) * 30;

  return 90;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function generateTasks(crop: Crop, plantingDate: Date): CalendarTask[] {
  const tasks: CalendarTask[] = [];
  const baseKey = crop.id;

  // Stage 0: Toprak Hazırlığı — 1 week before planting
  const soilPrepDays = 7;
  tasks.push({
    id: `${baseKey}-soil-prep`,
    date: toISODate(addDays(plantingDate, -soilPrepDays)),
    type: 'maintenance',
    title: 'Toprak Hazırlığı',
    description: crop.soil.preparation,
    isEstimate: true,
  });

  // Stage 1: Ekim / Dikim — day 0
  tasks.push({
    id: `${baseKey}-planting`,
    date: toISODate(plantingDate),
    type: 'planting',
    title: 'Ekim / Dikim',
    description: `Fideler veya tohumlar uygun aralıklarla toprağa yerleştirilir. ${crop.planting.spacing}`,
    isEstimate: false,
  });

  // Stage 2: Çimlenme kontrolü
  const germinationDays = parseDurationDays(crop.timeline[2]?.duration ?? '7-14 gün');
  const germinationCheckDay = Math.max(1, Math.round(germinationDays * 0.7));
  tasks.push({
    id: `${baseKey}-germination`,
    date: toISODate(addDays(plantingDate, germinationCheckDay)),
    type: 'germination',
    title: 'Çimlenme Kontrolü',
    description: crop.timeline[2]?.description ?? 'Çimlenme / kök tutma sürecini kontrol edin.',
    isEstimate: true,
  });

  // Stage 3: Gelişim kontrolü — midpoint of growth stage
  const growthStartDay = germinationDays;
  const growthDuration = parseDurationDays(crop.timeline[3]?.duration ?? '30 gün');
  const growthCheckDay = growthStartDay + Math.round(growthDuration * 0.5);
  tasks.push({
    id: `${baseKey}-growth`,
    date: toISODate(addDays(plantingDate, growthCheckDay)),
    type: 'growth',
    title: 'Gelişim Kontrolü',
    description: crop.timeline[3]?.description ?? 'Bitki gelişimini gözlemleyin.',
    isEstimate: true,
  });

  // Stage 4: Sulama kontrolü — after germination, recurring
  const irrigationDay = germinationDays + 10;
  tasks.push({
    id: `${baseKey}-irrigation-1`,
    date: toISODate(addDays(plantingDate, irrigationDay)),
    type: 'irrigation',
    title: 'Sulama Kontrolü',
    description: crop.irrigation.requirement,
    isEstimate: true,
  });

  // Second irrigation check — during growth
  const irrigationDay2 = growthCheckDay + 14;
  tasks.push({
    id: `${baseKey}-irrigation-2`,
    date: toISODate(addDays(plantingDate, irrigationDay2)),
    type: 'irrigation',
    title: 'Sulama Kontrolü',
    description: crop.irrigation.periods,
    isEstimate: true,
  });

  // Stage 5: Gübreleme dönemi — after growth starts
  const fertilizationDay = growthStartDay + 14;
  tasks.push({
    id: `${baseKey}-fertilization`,
    date: toISODate(addDays(plantingDate, fertilizationDay)),
    type: 'fertilization',
    title: 'Gübreleme Dönemi',
    description: crop.fertilization.stages,
    isEstimate: true,
  });

  // Stage 6: Hastalık kontrolü — during growth
  const diseaseDay = growthStartDay + 21;
  const firstDisease = crop.diseases[0];
  tasks.push({
    id: `${baseKey}-disease`,
    date: toISODate(addDays(plantingDate, diseaseDay)),
    type: 'disease',
    title: 'Hastalık Kontrolü',
    description: firstDisease
      ? `${firstDisease.name}: ${firstDisease.symptoms}`
      : 'Bitkileri hastalık belirtileri açısından kontrol edin.',
    isEstimate: true,
  });

  // Stage 7: Zararlı kontrolü — during growth
  const pestDay = growthStartDay + 28;
  const firstPest = crop.pests[0];
  tasks.push({
    id: `${baseKey}-pest`,
    date: toISODate(addDays(plantingDate, pestDay)),
    type: 'pest',
    title: 'Zararlı Kontrolü',
    description: firstPest
      ? `${firstPest.name}: ${firstPest.symptoms}`
      : 'Zararlı böcek varlığını kontrol edin.',
    isEstimate: true,
  });

  // Stage 8: Genel bakım — during maintenance stage
  const maintenanceDay = growthStartDay + Math.round(growthDuration * 0.7);
  tasks.push({
    id: `${baseKey}-maintenance`,
    date: toISODate(addDays(plantingDate, maintenanceDay)),
    type: 'maintenance',
    title: 'Genel Bakım',
    description: crop.timeline[4]?.description ?? 'Sulama, gübreleme ve genel bakım işlemleri.',
    isEstimate: true,
  });

  // Stage 9: Tahmini hasat
  const harvestDays = parseHarvestDays(crop.harvest.period);
  tasks.push({
    id: `${baseKey}-harvest`,
    date: toISODate(addDays(plantingDate, harvestDays)),
    type: 'harvest',
    title: 'Tahmini Hasat Dönemi',
    description: `${crop.harvest.maturitySigns} ${crop.harvest.general}`,
    isEstimate: true,
  });

  return tasks.sort((a, b) => a.date.localeCompare(b.date));
}

export function getTodayTasks(tasks: CalendarTask[], today: Date): CalendarTask[] {
  const todayISO = toISODate(today);
  return tasks.filter((t) => t.date === todayISO);
}

export function getWeekTasks(tasks: CalendarTask[], today: Date): CalendarTask[] {
  const startOfWeek = new Date(today);
  const dayOfWeek = today.getDay(); // 0 = Sunday
  startOfWeek.setDate(today.getDate() - dayOfWeek);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const startISO = toISODate(startOfWeek);
  const endISO = toISODate(endOfWeek);

  return tasks.filter((t) => t.date >= startISO && t.date <= endISO);
}

export function formatTurkishDate(date: Date): string {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatTurkishDateShort(isoDate: string): string {
  const date = new Date(isoDate + 'T00:00:00');
  const months = [
    'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
    'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara',
  ];
  return `${date.getDate()} ${months[date.getMonth()]}`;
}

export function toISO(date: Date): string {
  return toISODate(date);
}
