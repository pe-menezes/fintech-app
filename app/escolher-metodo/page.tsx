"use client";

import Link from "next/link";
import { ChevronRight, Keyboard, Nfc } from "lucide-react";
import { Card } from "@/components/shared/card";
import { InnerHeader } from "@/components/shared/inner-header";

export default function EscolherMetodoPage() {
  return (
    <div className="min-h-screen bg-background">
      <InnerHeader title="Como deseja pagar?" />

      <div className="mx-auto max-w-[430px] space-y-4 px-4 pt-6">
        <Link
          href="/aproximar-cartao"
          className="flex min-h-[44px] w-full"
          aria-label="Aproximar cartão (Tap)"
        >
          <Card className="flex w-full items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EFEFEF]">
              <Nfc className="h-7 w-7 text-[var(--color-brand)]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Aproximar Cartão (Tap)</p>
              <p className="text-sm text-muted-foreground">
                Encoste o cartão no celular para pagar
              </p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
          </Card>
        </Link>

        <Link
          href="/digitar-cartao"
          className="flex min-h-[44px] w-full"
          aria-label="Digitar cartão"
        >
          <Card className="flex w-full items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EFEFEF]">
              <Keyboard className="h-7 w-7 text-[var(--color-brand)]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Digitar Cartão</p>
              <p className="text-sm text-muted-foreground">
                Insira os dados do cartão manualmente
              </p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
          </Card>
        </Link>
      </div>
    </div>
  );
}
