"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard } from "lucide-react";
import { Card } from "@/components/shared/card";
import { InnerHeader } from "@/components/shared/inner-header";
import { addCard } from "@/lib/mock-cards";

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] min-h-[44px]";

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatValidity(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function DigitarCartaoPage() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [validity, setValidity] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleValidityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidity(formatValidity(e.target.value));
  };

  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Dados do Cartão" />

      <div className="mx-auto max-w-[430px] px-4 pb-32 pt-4">
        <Card className="space-y-5">
          {/* Número do cartão */}
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Número do Cartão
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
                className={inputClasses}
                inputMode="numeric"
                autoComplete="cc-number"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Nome no cartão */}
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Nome no Cartão
            </label>
            <input
              type="text"
              placeholder="Como está no cartão"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
              autoComplete="cc-name"
            />
          </div>

          {/* Validade + CVV */}
          <div className="flex gap-3">
            <div className="flex-1 min-w-0">
              <label className="mb-1 block text-sm font-medium text-foreground">
                Validade
              </label>
              <input
                type="text"
                placeholder="MM/AA"
                maxLength={5}
                value={validity}
                onChange={handleValidityChange}
                className={inputClasses}
                inputMode="numeric"
                autoComplete="cc-exp"
              />
            </div>
            <div className="flex-1 min-w-0">
              <label className="mb-1 block text-sm font-medium text-foreground">
                CVV
              </label>
              <input
                type="password"
                placeholder="000"
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                className={inputClasses}
                inputMode="numeric"
                autoComplete="cc-csc"
              />
            </div>
          </div>

          {/* Toggle salvar cartão */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <span className="text-sm text-foreground">
              Salvar cartão para próximas compras
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={saveCard}
              onClick={() => setSaveCard((s) => !s)}
              className={`h-7 w-12 shrink-0 rounded-full relative transition-colors ${
                saveCard ? "bg-[var(--color-brand)]" : "bg-[#EFEFEF]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform left-0.5 ${
                  saveCard ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>
        </Card>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Aporte de R$ 1.000,00 em 3x de R$ 363,33
        </p>
      </div>

      <div
        className="fixed bottom-0 left-1/2 z-10 w-full max-w-[430px] -translate-x-1/2 p-4 bg-background"
        style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          onClick={() => {
            if (saveCard && cardNumber.replace(/\s/g, "").length >= 4) {
              addCard({
                brand: "Visa",
                lastFour: cardNumber.replace(/\s/g, "").slice(-4),
                holderName: name || "Titular",
                expiryMonth: parseInt(validity.split("/")[0], 10) || 12,
                expiryYear: parseInt(validity.split("/")[1], 10) || 26,
              });
            }
            router.replace("/aporte-realizado?metodo=digitado");
          }}
          className="flex min-h-[44px] w-full items-center justify-center rounded-2xl bg-[var(--color-brand)] py-4 font-semibold text-white"
        >
          Pagar R$ 1.090,00
        </button>
      </div>
    </div>
  );
}
