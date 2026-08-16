import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  colorClass: string;
  children: ReactNode;
}

export default function InfoCard({ icon: Icon, title, colorClass, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${colorClass}`}>
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-neutral-700">{value}</dd>
    </div>
  );
}
