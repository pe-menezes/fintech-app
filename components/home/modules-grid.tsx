"use client";

import {
  BarChart2,
  Calculator,
  CircleDollarSign,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutGrid,
  Link,
  Package,
  Percent,
  Repeat,
  Shield,
  Smartphone,
  Type,
  Users,
  Users2,
  Wallet,
} from "lucide-react";

function BadgePill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`absolute right-2 top-2 rounded-full bg-[#2F6BFF] px-2 py-[2px] text-[10px] font-semibold text-white ${className}`}
    >
      {children}
    </span>
  );
}

function ModuleTile({
  label,
  icon: Icon,
  badge,
}: {
  label: string;
  icon: React.ElementType;
  badge?: "Novo" | "Ofertas";
}) {
  return (
    <button
      type="button"
      className="relative h-[108px] w-full rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
    >
      {badge ? <BadgePill>{badge}</BadgePill> : null}
      <div className="flex h-full flex-col items-center justify-between">
        <Icon
          className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[var(--color-brand)]"
          strokeWidth={2}
        />
        <span className="line-clamp-2 pb-0.5 text-center text-sm leading-tight">
          {label}
        </span>
      </div>
    </button>
  );
}

export function ModulesGrid() {
  const modules = [
    { label: "Taxas e tarifas", icon: Percent },
    { label: "Simulador de vendas", icon: Calculator },
    { label: "Criação de Boletos", icon: FileText },
    { label: "Venda por Assinatura", icon: Repeat, badge: "Novo" as const },
    { label: "Link de Pagamento", icon: Link },
    { label: "Tap to Pay no iPhone", icon: Smartphone },
    { label: "Venda Digitada", icon: Type },
    { label: "Cartões", icon: CreditCard },
    { label: "Funcionários", icon: Users },
    { label: "Seguros", icon: Shield },
    { label: "Equipe", icon: Users2 },
    { label: "Reserva", icon: Wallet },
    { label: "Maquininhas", icon: LayoutGrid },
    { label: "Open Finance", icon: CircleDollarSign, badge: "Ofertas" as const },
    { label: "Catálogo", icon: Package, badge: "Novo" as const },
    { label: "Relatórios", icon: BarChart2 },
    { label: "Ajuda", icon: HelpCircle },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {modules.map(({ label, icon, badge }) => (
        <ModuleTile
          key={label}
          label={label}
          icon={icon}
          badge={badge}
        />
      ))}
    </div>
  );
}
