import { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Sprout, MapPin, BookOpenCheck } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import CropCard from '@/components/CropCard';
import { crops, searchCrops } from '@/data/crops';
import { Crop } from '@/types/crop';

const popularCropIds = ['domates', 'bugday', 'misir', 'patates', 'biber', 'salatalik', 'aycicegi'];

const features = [
  {
    icon: Sprout,
    title: 'Ekimden Hasada Rehberlik',
    description: 'Her ürün için toprak hazırlığından hasada kadar adım adım bilgi bulun.',
  },
  {
    icon: MapPin,
    title: 'Bölgesel Farkındalık',
    description: 'Bilgiler genel rehberliktir; bölgenize özel koşulları göz önünde bulundurmanızı hatırlatırız.',
  },
  {
    icon: BookOpenCheck,
    title: 'Güncel Tarım Rehberi',
    description: 'Sulama, gübreleme, hastalık ve zararlı yönetimi hakkında kapsamlı içerikler.',
  },
];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return searchCrops(query).slice(0, 6);
  }, [query]);

  const popularCrops = popularCropIds
    .map((id) => crops.find((crop) => crop.id === id))
    .filter((crop): crop is Crop => Boolean(crop));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    navigate(`/urunler?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/36004056/pexels-photo-36004056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Gün doğumunda tarlada çalışan çiftçi"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/85 to-primary-950" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-100 ring-1 ring-white/20">
            <Sprout className="h-4 w-4" />
            Cebinizdeki tarım asistanı
          </span>
          <h1 className="animate-slide-up mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Yetiştirdiğiniz ürünü seçin.
          </h1>
          <p className="animate-slide-up mt-5 text-lg leading-relaxed text-primary-100/90 sm:text-xl" style={{ animationDelay: '100ms' }}>
            Ekimden hasada kadar ihtiyacınız olan tarım bilgilerini tek yerde bulun.
          </p>

          <form
            onSubmit={handleSubmit}
            className="animate-slide-up relative mx-auto mt-10 max-w-xl"
            style={{ animationDelay: '200ms' }}
          >
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Hangi ürünü yetiştiriyorsunuz?"
            />
            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl bg-white text-left shadow-card-hover">
                {suggestions.map((crop) => (
                  <Link
                    key={crop.id}
                    to={`/urun/${crop.id}`}
                    className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-primary-50"
                  >
                    <span className="text-xl">{crop.emoji}</span>
                    <span className="font-medium text-neutral-800">{crop.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Popüler Ürünler
            </h2>
            <p className="mt-2 text-neutral-500">
              En çok aranan ürünlerden birini seçerek başlayın.
            </p>
          </div>
          <Link
            to="/urunler"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Tüm ürünleri gör
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularCrops.map((crop, index) => (
            <CropCard key={crop.id} crop={crop} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-earth-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start gap-4 rounded-2xl bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-neutral-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
