"use client";

import {
  BarChart2,
  Calculator,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  Eye,
  FileText,
  HelpCircle,
  Home,
  LayoutGrid,
  Link,
  Link2,
  Package,
  Percent,
  Receipt,
  RefreshCw,
  Repeat,
  Shield,
  Smartphone,
  Store,
  Type,
  User,
  Users,
  Users2,
  Wallet,
} from "lucide-react";

// ——— Local subcomponents ———

function PixIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="5.5" y="5.5" width="5.5" height="5.5" rx="1.2" transform="rotate(45 8.25 8.25)" />
      <rect x="13" y="5.5" width="5.5" height="5.5" rx="1.2" transform="rotate(45 15.75 8.25)" />
      <rect x="5.5" y="13" width="5.5" height="5.5" rx="1.2" transform="rotate(45 8.25 15.75)" />
      <rect x="13" y="13" width="5.5" height="5.5" rx="1.2" transform="rotate(45 15.75 15.75)" />
    </svg>
  );
}

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

function Card({
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

function TopBar() {
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

function MainCard() {
  const actions = [
    { label: "Pix", icon: PixIcon },
    { label: "Transferir", icon: Wallet },
    { label: "Pagar", icon: CreditCard },
    { label: "Vender", icon: Store },
  ];
  return (
    <Card className="flex flex-col gap-4">
      {/* A) Linha Saldo: label + chevron no topo; valor na linha de baixo */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Saldo da Conta</p>
          <p className="text-4xl font-semibold">R$ 110,67</p>
        </div>
        <ChevronRight className="h-6 w-6 shrink-0 text-muted-foreground" />
      </div>
      {/* B) Linha Reserva */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-medium">Reserva Stone</p>
          <p className="text-sm text-muted-foreground">
            Deixe o dinheiro trabalhar para você
          </p>
        </div>
        <button
          type="button"
          className="min-h-[44px] shrink-0 px-3 text-sm font-medium text-brand"
        >
          Conhecer
        </button>
      </div>
      {/* C) Divider full width */}
      <div className="-mx-4 border-t border-border" />
      {/* D) Área das ações com bg cinza */}
      <div className="-mx-4 bg-black/[0.02] px-4 py-4">
        <div className="flex justify-between gap-2">
          {actions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="flex min-h-[44px] min-w-[44px] flex-col items-center gap-1.5"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ECECEC] text-zinc-900">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <span className="text-xs text-foreground">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}

const scrollbarHide =
  "overflow-x-auto overflow-y-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

function PromoCarousel() {
  const promos = [
    {
      title: "Cartão Mais Limite",
      subtitle: "Guarde a partir de R$100 e tenha limite de crédito",
      icon: CreditCard,
    },
    {
      title: "Venda online",
      subtitle: "Crie links e receba no dia seguinte.",
      icon: Link2,
    },
    { title: "Ver...", subtitle: "Crie...", icon: Wallet },
  ];
  return (
    <div
      className={`flex gap-4 snap-x snap-mandatory px-4 py-2 ${scrollbarHide}`}
    >
      {promos.map(({ title, subtitle, icon: Icon }) => (
        <article
          key={title}
          className="flex w-[320px] shrink-0 snap-start items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
        >
          <Icon
            className="h-5 w-5 shrink-0 text-[var(--color-brand)]"
            strokeWidth={2}
          />
          <div className="min-w-0 text-left">
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </article>
      ))}
      <div className="w-4 shrink-0" />
    </div>
  );
}

function BannerCarousel() {
  return (
    <div
      className={`snap-x snap-mandatory px-4 py-2 ${scrollbarHide}`}
    >
      <div className="flex gap-4">
        <article
          className="h-[120px] w-[340px] shrink-0 snap-start rounded-2xl bg-gradient-to-br from-[#2F684D] to-emerald-800 p-4 text-white shadow-sm"
        >
          <p className="font-semibold">Samsung até 80% OFF</p>
          <p className="mt-1 text-sm opacity-90">Confira condições</p>
          <button
            type="button"
            className="mt-2 text-sm font-medium underline"
            onClick={() => {}}
          >
            Saiba mais
          </button>
        </article>
        <article
          className="h-[120px] w-[340px] shrink-0 snap-start rounded-2xl bg-emerald-900 p-4 text-white shadow-sm"
        >
          <p className="font-semibold">Link de pagamento...</p>
          <p className="mt-1 text-sm opacity-90">Placeholder</p>
        </article>
      </div>
    </div>
  );
}

function ConsultorCard() {
  return (
    <Card className="flex items-center gap-4">
      <div className="h-16 w-16 shrink-0 rounded-full bg-[#E6E6E6]" />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">Consultor Stone</p>
        <p className="font-bold">Willian S</p>
        <p className="text-sm text-muted-foreground">
          Seu consultor de negócios
        </p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
    </Card>
  );
}

function ReceivablesCard() {
  return (
    <Card>
      <div className="space-y-4">
        {/* Top: esquerda (label + valor), direita (CTA ícone verde + texto preto + chevron) */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">
              Recebimentos do mês
            </p>
            <p className="font-semibold">R$ 104,77</p>
          </div>
          <button
            type="button"
            className="flex min-h-[44px] items-center gap-2 text-left font-medium text-foreground"
          >
            <Receipt className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
            <span className="max-w-[140px] whitespace-pre-line leading-tight">
              {"Receba na\nconta Stone"}
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </button>
        </div>
        {/* Divider entre mês e Recebimentos futuros */}
        <div className="-mx-4 border-t border-border" />
        {/* Recebimentos futuros: label + chevron na mesma linha; valor muted abaixo */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Recebimentos futuros
            </p>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">R$ 99,92</p>
          <p className="text-xs text-muted-foreground">
            (1 jan, 2026 até 28 jul, 2027)
          </p>
        </div>
        {/* Bottom: esquerda retângulo (caixinha 18 qua + R$ 99,92); direita retângulo Conferir tudo */}
        <div className="flex gap-3">
          <div className="flex min-h-[44px] flex-1 items-center gap-3 rounded-2xl bg-[#EFEFEF] p-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-center text-sm font-medium leading-tight">
              {"18\nqua"}
            </div>
            <span className="font-medium">R$ 99,92</span>
          </div>
          <button
            type="button"
            className="flex min-h-[44px] flex-1 items-center justify-center gap-1 rounded-2xl bg-[#EFEFEF] text-muted-foreground"
          >
            Conferir tudo
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}

function SalesCard() {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Vendas dos últimos 7 dias
          </p>
          <p className="text-3xl font-semibold">R$ 0,00</p>
        </div>
        <ChevronRight className="h-6 w-6 shrink-0 text-muted-foreground" />
      </div>
      <div className="-mx-4 border-t border-black/10" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium">Não há vendas no período</p>
          <p className="text-sm text-muted-foreground">
            Atualizado às 09:00
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-xl bg-[#EFEFEF] p-3"
          onClick={() => {}}
        >
          <RefreshCw className="h-5 w-5 text-foreground" strokeWidth={2} />
        </button>
      </div>
    </Card>
  );
}

function DeviceCard() {
  return (
    <Card className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFEFEF]">
        <Smartphone className="h-6 w-6 text-foreground" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">Você possui</p>
        <p className="font-semibold">1 maquininha</p>
      </div>
      <button
        type="button"
        className="shrink-0 rounded-xl bg-[#EFEFEF] px-6 py-2 font-medium"
        onClick={() => {}}
      >
        Gerenciar
      </button>
    </Card>
  );
}

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
      onClick={() => {}}
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

function ModulesGrid() {
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

function BottomNav() {
  const items = [
    { label: "Início", icon: Home, active: true },
    { label: "Extrato", icon: FileText, active: false },
    { label: "Recebimentos", icon: Receipt, active: false },
    { label: "Vendas", icon: Store, active: false },
  ];
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-[430px] -translate-x-1/2 border-t border-border bg-card px-2 pt-2"
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
    >
      <div className="flex w-full justify-around">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex min-h-[44px] flex-col items-center justify-center gap-0.5 px-3 ${
              active ? "font-medium text-brand" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// ——— Export ———

export function HomeScreen() {
  return (
    <div
      className="pb-[calc(120px+env(safe-area-inset-bottom))]"
    >
      <TopBar />
      <main className="space-y-3 px-4 pt-4">
        <MainCard />
        <PromoCarousel />
        <ReceivablesCard />
        <SalesCard />
        <DeviceCard />
        <ModulesGrid />
        <ConsultorCard />
        <BannerCarousel />
      </main>
      <BottomNav />
    </div>
  );
}
