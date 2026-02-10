export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-card p-4 text-card-foreground shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
