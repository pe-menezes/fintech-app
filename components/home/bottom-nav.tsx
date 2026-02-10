"use client";

import { FileText, Home, Receipt, Store } from "lucide-react";

export function BottomNav() {
  const items = [
    { label: "Início", icon: Home, active: true },
    { label: "Extrato", icon: FileText, active: false },
    { label: "Recebimentos", icon: Receipt, active: false },
    { label: "Vendas", icon: Store, active: false },
  ];
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[430px] -translate-x-1/2 border-t border-border bg-card px-2 pt-3"
      style={{ paddingBottom: "max(20px, env(safe-area-inset-bottom))" }}
    >
      <div className="flex w-full justify-around">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex min-h-[48px] flex-col items-center justify-center gap-1 px-3 ${
              active ? "font-medium text-brand" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
