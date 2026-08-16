import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarDays,
  Mountain,
  Droplets,
  Leaf,
  Bug,
  ShieldAlert,
  Wheat,
  AlertTriangle,
} from 'lucide-react';
import InfoCard, { InfoRow } from '@/components/InfoCard';
import GrowingTimeline from '@/components/GrowingTimeline';
import { getCropById } from '@/data/crops';

export default function CropDetailPage() {
  const { id } = useParams<{ id: string }>();
  const crop = id ? getCropById(id) : undefined;

  if (!crop) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">
          Ürün bulunamadı
        </h1>
        <p className="text-neutral-500">
          Aradığınız ürün bilgisi henüz eklenmemiş olabilir.
        </p>
        <Link
          to="/urunler"
          className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Ürünlere Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/urunler"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-primary-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Ürünlere Dön
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-card sm:h-80 lg:h-full">
            <img src={crop.image} alt={crop.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 lg:col-span-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
            {crop.category}
          </span>
          <h1 className="flex items-center gap-3 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            <span className="text-4xl">{crop.emoji}</span>
            {crop.name}
          </h1>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
            {crop.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-start gap-3 rounded-2xl bg-accent-50 p-5 text-sm text-accent-900 ring-1 ring-accent-100">
        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
        <p className="leading-relaxed">
          Bu sayfadaki bilgiler genel rehberlik amaçlıdır. Gerçek uygulamalar bölgenize,
          iklim koşullarına ve ürün çeşidine göre değişebilir; kesinleşmiş sonuç olarak
          değerlendirilmemelidir.
        </p>
      </div>

      <div className="mt-8">
        <GrowingTimeline timeline={crop.timeline} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <InfoCard icon={CalendarDays} title="Ekim / Dikim" colorClass="bg-primary-100 text-primary-700">
          <InfoRow label="Ekim Dönemi" value={crop.planting.period} />
          <InfoRow label="Uygun Sıcaklık" value={crop.planting.temperature} />
          <InfoRow label="Dikim Koşulları" value={crop.planting.conditions} />
          <InfoRow label="Bitki Sıklığı" value={crop.planting.spacing} />
        </InfoCard>

        <InfoCard icon={Mountain} title="Toprak" colorClass="bg-earth-100 text-earth-700">
          <InfoRow label="Uygun Toprak" value={crop.soil.type} />
          <InfoRow label="pH Aralığı" value={crop.soil.ph} />
          <InfoRow label="Drenaj" value={crop.soil.drainage} />
          <InfoRow label="Toprak Hazırlığı" value={crop.soil.preparation} />
        </InfoCard>

        <InfoCard icon={Droplets} title="Sulama" colorClass="bg-secondary-100 text-secondary-700">
          <InfoRow label="Genel Su İhtiyacı" value={crop.irrigation.requirement} />
          <InfoRow label="Sulama Dönemleri" value={crop.irrigation.periods} />
          <InfoRow label="Aşırı Sulamanın Etkileri" value={crop.irrigation.overwatering} />
        </InfoCard>

        <InfoCard icon={Leaf} title="Gübreleme" colorClass="bg-primary-100 text-primary-700">
          <InfoRow label="Önemli Besin Elementleri" value={crop.fertilization.nutrients} />
          <InfoRow label="Gelişim Dönemlerine Göre Gübreleme" value={crop.fertilization.stages} />
          <InfoRow label="Genel Bilgi" value={crop.fertilization.general} />
          <InfoRow label="Toprak Analizinin Önemi" value={crop.fertilization.soilAnalysis} />
        </InfoCard>

        <InfoCard icon={Bug} title="Hastalıklar" colorClass="bg-error-50 text-error-600">
          {crop.diseases.map((disease) => (
            <div key={disease.name} className="rounded-xl border border-neutral-100 p-4">
              <h4 className="text-sm font-bold text-neutral-900">{disease.name}</h4>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-600">
                <p><span className="font-medium text-neutral-800">Belirtiler: </span>{disease.symptoms}</p>
                <p><span className="font-medium text-neutral-800">Nedenler: </span>{disease.causes}</p>
                <p><span className="font-medium text-neutral-800">Önlem: </span>{disease.prevention}</p>
              </div>
            </div>
          ))}
        </InfoCard>

        <InfoCard icon={ShieldAlert} title="Zararlılar" colorClass="bg-warning-50 text-warning-600">
          {crop.pests.map((pest) => (
            <div key={pest.name} className="rounded-xl border border-neutral-100 p-4">
              <h4 className="text-sm font-bold text-neutral-900">{pest.name}</h4>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-600">
                <p><span className="font-medium text-neutral-800">Belirti/Zarar: </span>{pest.symptoms}</p>
                <p><span className="font-medium text-neutral-800">Önlem: </span>{pest.prevention}</p>
                <p><span className="font-medium text-neutral-800">Kontrol: </span>{pest.control}</p>
              </div>
            </div>
          ))}
        </InfoCard>
      </div>

      <div className="mt-6">
        <InfoCard icon={Wheat} title="Hasat" colorClass="bg-accent-100 text-accent-700">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <InfoRow label="Yaklaşık Hasat Dönemi" value={crop.harvest.period} />
            <InfoRow label="Olgunluk Belirtileri" value={crop.harvest.maturitySigns} />
            <InfoRow label="Genel Bilgi" value={crop.harvest.general} />
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
