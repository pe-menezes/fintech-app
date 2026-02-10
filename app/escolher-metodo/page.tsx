"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Nfc, Keyboard, ChevronRight, Trash2 } from "lucide-react";
import { Card } from "@/components/shared/card";
import { InnerHeader } from "@/components/shared/inner-header";
import { CardBrandIcon } from "@/components/shared/card-brand-icon";
import { getSavedCards, deleteCard, type SavedCard } from "@/lib/mock-cards";

export default function EscolherMetodoPage() {
  const [cards, setCards] = useState<SavedCard[]>(() => getSavedCards());
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Pagar com" />

      <div className="mx-auto max-w-[430px] space-y-6 px-4 pb-36 pt-5">
        {cards.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Seus cartões
            </p>

            {cards.map((card) => (
              <Card key={card.id} className="p-4">
                {confirmDelete === card.id ? (
                  <div className="space-y-3">
                    <p className="text-sm text-foreground">
                      Remover cartão {card.brand} •••• {card.lastFour}?
                    </p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setConfirmDelete(null)}
                        className="min-h-[44px] flex-1 rounded-xl border border-border py-2.5 text-sm font-medium"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          deleteCard(card.id);
                          setCards(getSavedCards());
                          setConfirmDelete(null);
                        }}
                        className="min-h-[44px] flex-1 rounded-xl bg-destructive py-2.5 text-sm font-medium text-white"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => router.push("/aproximar-cartao")}
                    className="flex min-h-[44px] w-full items-center gap-3 text-left"
                  >
                    <CardBrandIcon brand={card.brand} />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">
                        {card.brand} •••• {card.lastFour}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {card.holderName} ·{" "}
                        {String(card.expiryMonth).padStart(2, "0")}/
                        {card.expiryYear}
                      </p>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmDelete(card.id);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          setConfirmDelete(card.id);
                        }
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-[#EFEFEF]"
                      aria-label={`Remover cartão ${card.brand} ${card.lastFour}`}
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </button>
                )}
              </Card>
            ))}
          </div>
        )}

        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {cards.length > 0 ? "Usar outro cartão" : "Como deseja pagar?"}
          </p>

          <Link href="/aproximar-cartao" className="block min-h-[44px]">
            <Card className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFEFEF]">
                <Nfc className="h-6 w-6 text-[var(--color-brand)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Aproximar cartão</p>
                <p className="text-xs text-muted-foreground">
                  Encoste o cartão no celular
                </p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </Card>
          </Link>

          <Link href="/digitar-cartao" className="block min-h-[44px]">
            <Card className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFEFEF]">
                <Keyboard className="h-6 w-6 text-[var(--color-brand)]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Digitar dados do cartão</p>
                <p className="text-xs text-muted-foreground">
                  {cards.length > 0
                    ? "Usar um cartão diferente"
                    : "Insira os dados manualmente"}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
