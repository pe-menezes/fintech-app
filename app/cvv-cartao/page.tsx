"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/shared/card";
import { CardBrandIcon } from "@/components/shared/card-brand-icon";
import { InnerHeader } from "@/components/shared/inner-header";

const VALID_BRANDS = ["Mastercard", "Visa", "Elo", "Amex"] as const;
type Brand = (typeof VALID_BRANDS)[number];

function isBrand(s: string | null): s is Brand {
  return s !== null && VALID_BRANDS.includes(s as Brand);
}

function CvvCartaoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand");
  const lastFour = searchParams.get("lastFour") ?? "";
  const holder = searchParams.get("holder") ?? "";

  const brand = isBrand(brandParam) ? brandParam : "Visa";
  const requiredCvvLength = brand === "Amex" ? 4 : 3;

  const [cvv, setCvv] = useState("");
  const cvvDigits = cvv.replace(/\D/g, "");
  const cvvValid = cvvDigits.length === requiredCvvLength;

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, requiredCvvLength);
    setCvv(digits);
  };

  const handleSubmit = () => {
    if (!cvvValid) return;
    router.replace("/aporte-realizado?metodo=cartao_salvo");
  };

  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Confirmar pagamento" />

      <div className="mx-auto max-w-[430px] space-y-6 px-4 pb-36 pt-5">
        <Card className="p-5">
          <div className="flex items-center gap-3">
            <CardBrandIcon brand={brand} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                {brand} •••• {lastFour}
              </p>
              {holder && (
                <p className="text-xs text-muted-foreground">{holder}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="cvv-input"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              CVV
            </label>
            <input
              id="cvv-input"
              type="password"
              inputMode="numeric"
              autoComplete="cc-csc"
              placeholder={brand === "Amex" ? "4 dígitos" : "3 dígitos"}
              value={cvv}
              onChange={handleCvvChange}
              maxLength={requiredCvvLength}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-center text-lg font-semibold outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] min-h-[44px]"
            />
          </div>
        </Card>
      </div>

      <div
        className="fixed bottom-0 left-1/2 z-30 w-full max-w-[430px] -translate-x-1/2 bg-background px-4 pt-3"
        style={{
          paddingBottom: "max(16px, env(safe-area-inset-bottom))",
        }}
      >
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!cvvValid}
          className={`flex min-h-[52px] w-full items-center justify-center rounded-2xl py-4 font-semibold text-white transition-colors ${
            cvvValid
              ? "bg-[var(--color-brand)]"
              : "cursor-not-allowed bg-[var(--color-brand)]/40"
          }`}
        >
          Pagar R$ 1.090,00
        </button>
      </div>
    </div>
  );
}

export default function CvvCartaoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <InnerHeader title="Confirmar pagamento" />
        </div>
      }
    >
      <CvvCartaoContent />
    </Suspense>
  );
}
