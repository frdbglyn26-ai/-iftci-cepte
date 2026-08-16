import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Crop } from '@/types/crop';

interface CropCardProps {
  crop: Crop;
  index?: number;
}

export default function CropCard({ crop, index = 0 }: CropCardProps) {
  return (
    <Link
      to={`/urun/${crop.id}`}
      className="group animate-slide-up opacity-0 flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={crop.image}
          alt={crop.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow-card backdrop-blur-sm">
          {crop.emoji}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-primary-800 backdrop-blur-sm">
          {crop.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-primary-900">{crop.name}</h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-600">
          {crop.shortDescription}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-all duration-200 group-hover:gap-2.5">
          Detayları Gör
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
