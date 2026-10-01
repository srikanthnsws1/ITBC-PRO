import Link from "next/link";

const DOT_COLORS = ["#e53935", "#fb8c00", "#fdd835", "#43a047", "#00acc1", "#1e88e5", "#5e35b1", "#d81b60"];

export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
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

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ITBC home">
      <LogoMark />
      <div className="leading-tight">
        <div className="font-display text-3xl font-extrabold tracking-tight text-blue-900">ITBC</div>
        <div className="text-[9px] font-semibold text-slate-700">Information Technology</div>
        <div className="text-[9px] font-semibold text-slate-700">Business Council (ITBC)</div>
        <div className="text-[8px] text-slate-500">e-Governance | Innovation | Excellence</div>
      </div>
    </Link>
  );
}
