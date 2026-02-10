"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, CreditCard } from "lucide-react";
import { Card } from "@/components/shared/card";

function AporteRealizadoContent() {
  const searchParams = useSearchParams();
  const metodo = searchParams.get("metodo");

  const [checkVisible, setCheckVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setCheckVisible(true), 100);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    const t2 = setTimeout(() => setMessageVisible(true), 300);
    return () => clearTimeout(t2);
  }, []);

  useEffect(() => {
    const t3 = setTimeout(() => setCardsVisible(true), 500);
    return () => clearTimeout(t3);
  }, []);

  const metodoLabel =
    metodo === "tap"
      ? "Pagamento via aproximação (Tap)"
      : metodo === "digitado"
        ? "Pagamento via cartão digitado"
        : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header simples (sem botão voltar) */}
      <header className="w-full bg-[var(--color-brand)] px-4 pb-4 pt-[calc(env(safe-area-inset-top)+12px)]">
        <div className="flex items-center justify-center">
          <h1 className="text-lg font-semibold text-white">Aporte Realizado!</h1>
        </div>
      </header>

      <div className="mx-auto max-w-[430px] space-y-6 px-4 pb-32 pt-6">
        {/* Ícone de sucesso */}
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-brand)] transition-transform duration-500 ease-out ${
            checkVisible ? "scale-100" : "scale-0"
          }`}
        >
          <Check className="h-10 w-10 text-white" strokeWidth={3} />
        </div>

        {/* Mensagem principal */}
        <p
          className={`text-center text-lg font-semibold text-foreground transition-all duration-500 ${
            messageVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          Tudo certo! Seu aporte{" "}
          <span className="text-[var(--color-brand)]">foi concluído com sucesso.</span>
        </p>

        {/* Card detalhes da transação */}
        <div
          className={`transition-opacity duration-500 ${
            cardsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Card className="space-y-3">
            <p className="text-sm text-foreground">
              Aporte de <span className="font-semibold">R$ 1.000,00</span> em 3x de{" "}
              <span className="font-semibold">R$ 363,33</span>
            </p>
            <div className="-mx-4 border-t border-border" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxas</span>
              <span>R$ 90,00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Saldo disponível em D+1</span>
              <span className="font-semibold">R$ 1.000,00</span>
            </div>
          </Card>
        </div>

        {/* Card info do cartão */}
        <div
          className={`transition-opacity duration-500 ${
            cardsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Card className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFEFEF]">
              <CreditCard className="h-5 w-5 text-foreground" />
            </div>
            <div className="min-w-0 space-y-0.5 text-sm">
              {metodoLabel ? (
                <p className="font-medium">{metodoLabel}</p>
              ) : null}
              <p className="font-medium">Cartão: Mastercard •••• 1234</p>
              <p className="text-muted-foreground">Data: 18/05/26 13:55</p>
              <p className="text-muted-foreground">ID da Transação: 5432108765</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Botão CTA fixo no bottom */}
      <div
        className="fixed bottom-0 left-1/2 z-10 w-full max-w-[430px] -translate-x-1/2 p-4 bg-background"
        style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <Link
          href="/"
          className="flex min-h-[44px] w-full items-center justify-center rounded-2xl bg-[var(--color-brand)] py-4 font-semibold text-white"
        >
          Concluir
        </Link>
      </div>
    </div>
  );
}

export default function AporteRealizadoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <header className="w-full bg-[var(--color-brand)] px-4 pb-4 pt-[calc(env(safe-area-inset-top)+12px)]">
            <div className="flex items-center justify-center">
              <h1 className="text-lg font-semibold text-white">Aporte Realizado!</h1>
            </div>
          </header>
        </div>
      }
    >
      <AporteRealizadoContent />
    </Suspense>
  );
}
