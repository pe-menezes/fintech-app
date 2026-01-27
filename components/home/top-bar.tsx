"use client";

import { Eye, User } from "lucide-react";

function IconButton({
  "aria-label": ariaLabel,
  children,
  className = "",
}: {
  "aria-label": string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ${className}`}
    >
      {children}
    </button>
  );
}

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 w-full bg-[var(--color-brand)]">
      <div className="mx-auto max-w-[430px] px-5 pt-[calc(env(safe-area-inset-top)+14px)] pb-5">
        <div className="flex items-start justify-between gap-3 text-white">
          <div className="min-w-0 flex-1">
            <p className="truncate text-2xl font-semibold text-white">
              Pedro Menezes Ribeiro d...
            </p>
            <p className="text-sm text-white/75">146.400.487-00</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <IconButton aria-label="Ver saldo">
              <Eye className="h-5 w-5" />
            </IconButton>
            <IconButton aria-label="Perfil">
              <User className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}
