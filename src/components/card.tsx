export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full rounded-md bg-slate-500/10 p-6">{children}</div>
  );
}
