"use client";

import { CreditCard, Link2, Wallet } from "lucide-react";

type PromoCarouselProps = {
  scrollbarHide: string;
};

export function PromoCarousel({ scrollbarHide }: PromoCarouselProps) {
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
