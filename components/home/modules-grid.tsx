"use client";

import Link from "next/link";
import {
  BarChart2,
  Calculator,
  CircleDollarSign,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutGrid,
  Link as LinkIcon,
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
      className={`absolute rounded-full bg-[#2F6BFF] px-2 py-[1px] text-[10px] font-semibold text-white ${className}`}
    >
      {children}
    </span>
  );
}

function ModuleTile({
  label,
  icon: Icon,
  badge,
  href,
}: {
  label: string;
  icon: React.ElementType;
  badge?: "Novo" | "Ofertas";
  href?: string;
}) {
  const tileClassName =
    "relative overflow-visible block w-full rounded-2xl border border-black/5 bg-white px-3 pt-3 pb-2.5 shadow-sm";
  const content = (
    <>
      {badge ? (
        <BadgePill className="-top-2 -right-2">{badge}</BadgePill>
      ) : null}
      <div className="flex flex-col items-center gap-1.5">
        <Icon
          className="h-[22px] w-[22px] shrink-0 text-[var(--color-brand)]"
          strokeWidth={2}
        />
        <span className="line-clamp-2 text-center text-[13px] leading-tight">
          {label}
        </span>
      </div>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={tileClassName}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" className={tileClassName}>
      {content}
    </button>
  );
}

export function ModulesGrid() {
  const modules = [
    { label: "Adicionar Dinheiro", icon: CreditCard, badge: "Novo" as const, href: "/aportar-com-cartao" },
    { label: "Taxas e tarifas", icon: Percent },
    { label: "Simulador de vendas", icon: Calculator },
    { label: "Criação de Boletos", icon: FileText },
    { label: "Venda por Assinatura", icon: Repeat, badge: "Novo" as const },
    { label: "Link de Pagamento", icon: LinkIcon },
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
      {modules.map(({ label, icon, badge, href }) => (
        <ModuleTile
          key={label}
          label={label}
          icon={icon}
          badge={badge}
          href={href}
        />
      ))}
    </div>
  );
}
