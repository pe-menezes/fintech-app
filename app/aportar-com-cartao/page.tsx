"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, X, Check, CreditCard } from "lucide-react";
import { Card } from "@/components/shared/card";
import { InnerHeader } from "@/components/shared/inner-header";

const TAXA_POR_PARCELA = 0.03; // 3% por parcela

function formatBRL(centavos: number): string {
  return (centavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function AportarComCartaoPage() {
  const router = useRouter();
  const [valorCentavos, setValorCentavos] = useState(100000); // default R$ 1.000,00
  const [editandoValor, setEditandoValor] = useState(false);
  const [parcelas, setParcelas] = useState(1); // 1 = à vista
  const [showParcelasSheet, setShowParcelasSheet] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const taxa = useMemo(
    () => (parcelas <= 1 ? 0 : parcelas * TAXA_POR_PARCELA),
    [parcelas]
  );
  const custoTotal = useMemo(
    () => Math.round(valorCentavos * (1 + taxa)),
    [valorCentavos, taxa]
  );
  const valorParcela =
    parcelas > 1 ? Math.round(custoTotal / parcelas) : custoTotal;
  const valorValido =
    valorCentavos >= 10000 && valorCentavos <= 5000000; // R$100 ~ R$50.000

  useEffect(() => {
    if (editandoValor && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editandoValor]);

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    const centavos = parseInt(digits, 10) || 0;
    setValorCentavos(centavos);
  };

  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Aportar com Cartão" />

      <div className="mx-auto max-w-[430px] space-y-5 px-4 pb-36 pt-5">
        {/* Card Valor do Aporte */}
        <Card className="p-5">
          {!editandoValor ? (
            <button
              type="button"
              onClick={() => setEditandoValor(true)}
              className="min-h-[44px] w-full text-left"
              aria-label="Editar valor do aporte"
            >
              <p className="text-sm text-muted-foreground">Valor do Aporte</p>
              <div className="mt-2 flex items-center justify-between">
                <span
                  className={`text-3xl font-semibold tracking-tight ${
                    valorCentavos === 0 ? "text-muted-foreground" : ""
                  }`}
                >
                  {formatBRL(valorCentavos)}
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
              </div>
            </button>
          ) : (
            <div>
              <p className="text-sm text-muted-foreground">Valor do Aporte</p>
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                autoFocus
                value={formatBRL(valorCentavos)}
                onChange={handleValorChange}
                onBlur={() => setEditandoValor(false)}
                className="mt-2 w-full bg-transparent text-3xl font-semibold tracking-tight outline-none caret-[var(--color-brand)]"
                aria-label="Valor do aporte em reais"
              />
              {valorCentavos > 0 && valorCentavos < 10000 && (
                <p className="mt-2 text-xs text-destructive">
                  Valor mínimo: R$ 100,00
                </p>
              )}
              {valorCentavos > 5000000 && (
                <p className="mt-2 text-xs text-destructive">
                  Valor máximo: R$ 50.000,00
                </p>
              )}
            </div>
          )}
        </Card>

        {/* Card Forma de Pagamento */}
        <Card className="p-5">
          <p className="text-sm text-muted-foreground">Forma de Pagamento</p>

          <div className="mt-4 flex items-center gap-3 rounded-xl border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 p-4">
            <CreditCard className="h-5 w-5 shrink-0 text-[var(--color-brand)]" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                Cartão de crédito
              </p>
              <p className="text-xs text-muted-foreground">
                Pagamento confirmado na hora.
              </p>
            </div>
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--color-brand)]">
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowParcelasSheet(true)}
            className="mt-4 flex min-h-[44px] w-full items-center justify-between"
          >
            <span className="text-sm font-medium text-foreground">
              Parcelamento
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-[var(--color-brand)]">
              {parcelas === 1 ? "À vista" : `Em até ${parcelas}x`}
              <ChevronRight className="h-4 w-4" />
            </span>
          </button>

          <div className="-mx-5 mt-4 border-t border-border" />

          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Custo Total</span>
              <span className="font-medium">{formatBRL(custoTotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Saldo em Conta</span>
              <div className="text-right">
                <p className="font-medium">{formatBRL(valorCentavos)}</p>
                <p className="text-xs text-[var(--color-brand)]">
                  disponível em D+1
                </p>
              </div>
            </div>
            {parcelas > 1 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Parcelas</span>
                <span className="font-medium">
                  {parcelas}x de {formatBRL(valorParcela)}
                </span>
              </div>
            )}
          </div>

          <div className="-mx-5 mt-4 border-t border-border" />
          <div className="mt-4 flex items-center justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="text-2xl font-bold text-[var(--color-brand)]">
              {formatBRL(custoTotal)}
            </span>
          </div>
        </Card>
      </div>

      {/* Bottom Sheet de Parcelamento */}
      {showParcelasSheet && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setShowParcelasSheet(false)}
            aria-hidden
          />
          <div
            className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 rounded-t-3xl bg-card shadow-2xl animate-in slide-in-from-bottom duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sheet-parcelamento-title"
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-border" />
            </div>
            <div className="flex items-center justify-between px-5 pb-3">
              <h2
                id="sheet-parcelamento-title"
                className="text-lg font-semibold"
              >
                Parcelamento
              </h2>
              <button
                type="button"
                onClick={() => setShowParcelasSheet(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full"
                aria-label="Fechar"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto px-5 pb-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
                const selected = parcelas === n;
                const taxaN = n <= 1 ? 0 : n * TAXA_POR_PARCELA;
                const totalN = Math.round(valorCentavos * (1 + taxaN));
                const parcelaN =
                  n > 1 ? Math.round(totalN / n) : totalN;

                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setParcelas(n);
                      setShowParcelasSheet(false);
                    }}
                    className={`flex min-h-[44px] w-full items-center justify-between py-4 ${
                      n > 1 ? "border-t border-border" : ""
                    } ${selected ? "-mx-2 rounded-xl bg-[var(--color-brand)]/5 px-2" : ""}`}
                  >
                    <div className="text-left">
                      <p
                        className={`text-sm ${
                          selected ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {n === 1 ? "À vista" : `Em até ${n}x`}
                      </p>
                      {n > 1 && (
                        <p className="text-xs text-muted-foreground">
                          {n}x de {formatBRL(parcelaN)} (total {formatBRL(totalN)})
                        </p>
                      )}
                    </div>
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                        selected
                          ? "border-[var(--color-brand)] bg-[var(--color-brand)]"
                          : "border-border bg-transparent"
                      }`}
                    >
                      {selected && (
                        <div className="h-2 w-2 rounded-full bg-white" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Botão CTA fixo */}
      <div
        className="fixed bottom-0 left-1/2 z-30 w-full max-w-[430px] -translate-x-1/2 bg-background px-4 pt-3"
        style={{
          paddingBottom: "max(16px, env(safe-area-inset-bottom))",
        }}
      >
        <button
          type="button"
          onClick={() => valorValido && router.push("/escolher-metodo")}
          disabled={!valorValido}
          className={`flex min-h-[52px] w-full items-center justify-center rounded-2xl py-4 font-semibold text-white transition-colors ${
            valorValido
              ? "bg-[var(--color-brand)]"
              : "cursor-not-allowed bg-[var(--color-brand)]/40"
          }`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
