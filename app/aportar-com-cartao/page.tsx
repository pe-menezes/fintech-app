"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/shared/card";
import { InnerHeader } from "@/components/shared/inner-header";

export default function AportarComCartaoPage() {
  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Aportar com Cartão" />

      <div className="mx-auto max-w-[430px] space-y-4 px-4 pb-32 pt-4">
        {/* Card Valor do Aporte */}
        <button
          type="button"
          className="min-h-[44px] w-full cursor-pointer text-left"
          aria-label="Selecionar valor do aporte"
        >
          <Card>
            <p className="text-sm text-muted-foreground">Valor do Aporte</p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="text-2xl font-semibold">R$ 1.000,00</span>
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </div>
          </Card>
        </button>

        {/* Card Forma de Pagamento */}
        <Card>
          <p className="mb-3 text-sm text-muted-foreground">Forma de Pagamento</p>
          <div className="flex gap-0">
            <button
              type="button"
              className="flex-1 min-h-[44px] py-2 text-center text-sm text-muted-foreground"
            >
              À vista
            </button>
            <button
              type="button"
              className="flex-1 min-h-[44px] border-b-2 border-[var(--color-brand)] py-2 text-center text-sm font-medium"
            >
              Parcelado
            </button>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Custo Total</span>
              <span className="font-medium">R$ 1.090,00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Saldo em Conta</span>
              <div className="text-right">
                <span className="font-medium">R$ 1.000,00</span>
                <p className="text-xs text-[var(--color-brand)]">disponível em D+1</p>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-4 border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium">Total</span>
              <span className="text-xl font-bold text-[var(--color-brand)]">
                R$ 1.090,00
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Botão CTA fixo no bottom */}
      <div
        className="fixed bottom-0 left-1/2 z-10 w-full max-w-[430px] -translate-x-1/2 p-4 bg-background"
        style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <Link
          href="/escolher-metodo"
          className="flex min-h-[44px] w-full items-center justify-center rounded-2xl bg-[var(--color-brand)] py-4 font-semibold text-white"
        >
          Continuar
        </Link>
      </div>
    </div>
  );
}
