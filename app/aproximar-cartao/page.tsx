"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Nfc } from "lucide-react";
import { InnerHeader } from "@/components/shared/inner-header";

export default function AproximarCartaoPage() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.replace("/aporte-realizado"), 3000);
    return () => clearTimeout(t);
  }, [router]);

  const goToSuccess = () => router.replace("/aporte-realizado");

  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Aproxime o Cartão" />

      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-8">
        <p className="text-center text-foreground">
          Aproxime o seu cartão na parte de trás do celular para pagar.
        </p>

        <button
          type="button"
          onClick={goToSuccess}
          className="my-8 flex h-48 w-48 items-center justify-center rounded-full bg-[#EFEFEF] animate-pulse"
          aria-label="Simular leitura NFC (avançar)"
        >
          <Nfc className="h-20 w-20 text-[var(--color-brand)]" />
        </button>

        <p className="text-center text-sm text-muted-foreground">
          Mantenha o cartão próximo até a aprovação!
        </p>
      </div>

      <div
        className="fixed bottom-0 left-1/2 z-10 w-full max-w-[430px] -translate-x-1/2 p-4 bg-background"
        style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          onClick={() => router.back()}
          className="flex min-h-[44px] w-full items-center justify-center rounded-2xl border border-border bg-card py-4 font-semibold text-foreground"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
