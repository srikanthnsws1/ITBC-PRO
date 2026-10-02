export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-400" />
      <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-slate-900 sm:text-xl fit:text-base!">{children}</h2>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-400" />
    </div>
  );
}
