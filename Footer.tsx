import { Sprout } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-primary-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-700 text-white">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-white">
              Çiftçi Cepte
            </span>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-300">
            Bu uygulamadaki tarımsal bilgiler genel rehberlik amaçlıdır. Verim, hastalık ve
            zararlı yönetimi bölgeye, iklime ve ürün çeşidine göre değişiklik gösterebilir.
            Kesin uygulamalar için bölgenizdeki tarım il/ilçe müdürlüklerine veya bir ziraat
            mühendisine danışmanız önerilir.
          </p>
        </div>
        <div className="mt-8 border-t border-primary-800 pt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} Çiftçi Cepte. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
