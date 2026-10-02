import Link from "next/link";

const DOT_COLORS = ["#e53935", "#fb8c00", "#fdd835", "#43a047", "#00acc1", "#1e88e5", "#5e35b1", "#d81b60"];

export function LogoMark({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className}>
      {DOT_COLORS.map((color, i) => {
        const angle = (i / DOT_COLORS.length) * Math.PI * 2;
        const cx = 24 + Math.cos(angle) * 15;
        const cy = 24 + Math.sin(angle) * 15;
        return (
          <g key={color}>
            <circle cx={cx} cy={cy} r={6} fill={color} />
            <circle cx={24 + Math.cos(angle) * 7} cy={24 + Math.sin(angle) * 7} r={2.2} fill={color} opacity={0.8} />
          </g>
        );
      })}
      <circle cx={24} cy={24} r={3} fill="#1e3a8a" />
    </svg>
  );
}

/** Mark + wordmark without a link, for use inside another link. `compact` drops the taglines. */
export function LogoLockup({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <span className="flex items-center gap-1.5">
        <LogoMark className="size-8 shrink-0" />
        <span className="font-display text-xl font-extrabold leading-none tracking-tight text-blue-900">ITBC</span>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2">
      <LogoMark className="size-10 shrink-0 sm:size-12" />
      <span className="block leading-tight">
        <span className="block font-display text-2xl font-extrabold tracking-tight text-blue-900 sm:text-3xl">ITBC</span>
        <span className="block text-[9px] font-semibold text-slate-700">Information Technology</span>
        <span className="block text-[9px] font-semibold text-slate-700">Business Council (ITBC)</span>
        <span className="block whitespace-nowrap text-[8px] text-slate-500 fit:hidden">e-Governance | Innovation | Excellence</span>
      </span>
    </span>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="ITBC home">
      <LogoLockup />
    </Link>
  );
}
