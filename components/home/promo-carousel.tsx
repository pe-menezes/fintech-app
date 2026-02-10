"use client";

import Link from "next/link";
import { CreditCard, Link2, Wallet } from "lucide-react";

type PromoCarouselProps = {
  scrollbarHide: string;
};

export function PromoCarousel({ scrollbarHide }: PromoCarouselProps) {
  const promos = [
    {
      title: "Aportar com Cartão",
      subtitle: "Adicione saldo via cartão de crédito — rápido e parcelado.",
      icon: Wallet,
      href: "/aportar-com-cartao",
    },
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
  const cardClassName =
    "flex w-[320px] shrink-0 snap-start items-center gap-3 rounded-2xl bg-white p-4 shadow-sm";
  return (
    <div
      className={`flex gap-4 snap-x snap-mandatory px-4 py-2 ${scrollbarHide}`}
    >
      {promos.map(({ title, subtitle, icon: Icon, href }) =>
        href ? (
          <Link
            key={title}
            href={href}
            className={cardClassName}
          >
            <Icon
              className="h-5 w-5 shrink-0 text-[var(--color-brand)]"
              strokeWidth={2}
            />
            <div className="min-w-0 text-left">
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </Link>
        ) : (
          <article key={title} className={cardClassName}>
            <Icon
              className="h-5 w-5 shrink-0 text-[var(--color-brand)]"
              strokeWidth={2}
            />
            <div className="min-w-0 text-left">
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
          </article>
        )
      )}
      <div className="w-4 shrink-0" />
    </div>
  );
}
