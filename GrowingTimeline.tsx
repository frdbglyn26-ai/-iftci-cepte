import { Sprout, Shovel, Droplet, Leaf, Wrench, Wheat } from 'lucide-react';
import { TimelineStage } from '@/types/crop';

const stageIcons = [Shovel, Sprout, Droplet, Leaf, Wrench, Wheat];

interface GrowingTimelineProps {
  timeline: TimelineStage[];
}

export default function GrowingTimeline({ timeline }: GrowingTimelineProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <h3 className="mb-8 text-xl font-bold text-neutral-900">
        Yetiştirme Süreci
      </h3>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {timeline.map((item, index) => {
          const Icon = stageIcons[index % stageIcons.length];
          return (
            <div key={item.stage} className="relative flex flex-col items-center text-center">
              {index < timeline.length - 1 && (
                <div className="absolute left-1/2 top-7 hidden h-0.5 w-full bg-primary-100 lg:block" />
              )}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white shadow-card ring-4 ring-primary-50">
                <Icon className="h-6 w-6" />
              </div>
              <span className="mt-3 text-sm font-bold text-primary-900">
                {item.stage}
              </span>
              <span className="mt-1 text-xs font-medium text-accent-600">{item.duration}</span>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
