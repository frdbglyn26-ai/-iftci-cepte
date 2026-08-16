import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import CropCard from '@/components/CropCard';
import { searchCrops } from '@/data/crops';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');

  const results = useMemo(() => searchCrops(query), [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
          Ürünler
        </h1>
        <p className="mt-3 text-neutral-500">
          Yetiştirdiğiniz veya merak ettiğiniz ürünü arayın, detaylı yetiştirme
          bilgilerine ulaşın.
        </p>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Örn: domates, buğday, biber..."
          className="mt-8"
        />
      </div>

      <div className="mt-4 text-center text-sm text-neutral-400">
        {results.length} ürün bulundu
      </div>

      {results.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((crop, index) => (
            <CropCard key={crop.id} crop={crop} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
            <SearchX className="h-8 w-8" />
          </span>
          <p className="text-lg font-semibold text-neutral-700">
            "{query}" için sonuç bulunamadı
          </p>
          <p className="max-w-sm text-sm text-neutral-500">
            Farklı bir ürün adı aramayı deneyin veya listedeki ürünlere göz atın.
          </p>
        </div>
      )}
    </div>
  );
}
