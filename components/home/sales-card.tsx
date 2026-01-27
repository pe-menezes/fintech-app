"use client";

import { ChevronRight, RefreshCw } from "lucide-react";
import { Card } from "./card";

export function SalesCard() {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Vendas dos últimos 7 dias
          </p>
          <p className="text-3xl font-semibold">R$ 0,00</p>
        </div>
        <ChevronRight className="h-6 w-6 shrink-0 text-muted-foreground" />
      </div>
      <div className="-mx-4 border-t border-black/10" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium">Não há vendas no período</p>
          <p className="text-sm text-muted-foreground">
            Atualizado às 09:00
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-xl bg-[#EFEFEF] p-3"
        >
          <RefreshCw className="h-5 w-5 text-foreground" strokeWidth={2} />
        </button>
      </div>
    </Card>
  );
}
