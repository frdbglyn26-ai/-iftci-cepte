import { useState } from 'react';
import {
  Sprout,
  Mountain,
  Droplets,
  Leaf,
  Bug,
  Shield,
  Wheat,
  ChevronRight,
  ArrowLeft,
  AlertTriangle,
} from 'lucide-react';
import {
  guideCategories,
  guideArticles,
  getArticlesByCategory,
  GuideArticle,
} from '@/data/guideArticles';

const iconMap: Record<string, typeof Sprout> = {
  Sprout,
  Mountain,
  Droplets,
  Leaf,
  Bug,
  Shield,
  Wheat,
};

export default function GuidePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<GuideArticle | null>(null);

  if (activeArticle) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setActiveArticle(null)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-primary-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Makalelere Dön
        </button>

        <article className="mt-6">
          <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            {activeArticle.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            {activeArticle.summary}
          </p>
          <div className="mt-8 space-y-5">
            {activeArticle.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-accent-50 p-5 text-sm text-accent-900 ring-1 ring-accent-100">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" />
            <p className="leading-relaxed">
              Tarımsal uygulamalar bölgeye, iklime ve ürün çeşidine göre değişiklik
              gösterebilir. Kesin kararlar için bölgenizdeki tarım il/ilçe müdürlüklerine
              veya bir ziraat mühendisine danışmanız önerilir.
            </p>
          </div>
        </article>
      </div>
    );
  }

  if (activeCategory) {
    const category = guideCategories.find((c) => c.id === activeCategory);
    const articles = getArticlesByCategory(activeCategory);

    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-primary-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Kategorilere Dön
        </button>

        <div className="mt-6">
          <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            {category?.name}
          </h1>
          <p className="mt-3 text-neutral-500">{category?.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {articles.map((article, index) => (
            <button
              key={article.id}
              type="button"
              onClick={() => setActiveArticle(article)}
              className="group animate-slide-up flex flex-col gap-3 rounded-2xl bg-white p-6 text-left shadow-card opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <h3 className="text-lg font-bold text-neutral-900">{article.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-neutral-500">
                {article.summary}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-all duration-200 group-hover:gap-2.5">
                Devamını Oku
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Tarım Rehberi
        </h1>
        <p className="mt-3 text-neutral-500">
          Ekimden hasada kadar tarımın temel başlıklarında pratik bilgiler ve öneriler.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guideCategories.map((category, index) => {
          const Icon = iconMap[category.icon] ?? Sprout;
          const articleCount = guideArticles.filter(
            (a) => a.category === category.id
          ).length;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className="group animate-slide-up flex flex-col gap-4 rounded-2xl bg-white p-7 text-left shadow-card opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{category.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {category.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xs font-medium text-neutral-400">
                  {articleCount} makale
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-all duration-200 group-hover:gap-2.5">
                  İncele
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
