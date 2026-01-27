"use client";

import { ChevronRight, Receipt } from "lucide-react";
import { Card } from "./card";

export function ReceivablesCard() {
  return (
    <Card>
      <div className="space-y-4">
        {/* Top: esquerda (label + valor), direita (CTA ícone verde + texto preto + chevron) */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">
              Recebimentos do mês
            </p>
            <p className="font-semibold">R$ 104,77</p>
          </div>
          <button
            type="button"
            className="flex min-h-[44px] items-center gap-2 text-left font-medium text-foreground"
          >
            <Receipt className="h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
            <span className="max-w-[140px] whitespace-pre-line leading-tight">
              {"Receba na\nconta Stone"}
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </button>
        </div>
        {/* Divider entre mês e Recebimentos futuros */}
        <div className="-mx-4 border-t border-border" />
        {/* Recebimentos futuros: label + chevron na mesma linha; valor muted abaixo */}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Recebimentos futuros
            </p>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">R$ 99,92</p>
          <p className="text-xs text-muted-foreground">
            (1 jan, 2026 até 28 jul, 2027)
          </p>
        </div>
        {/* Bottom: esquerda retângulo (caixinha 18 qua + R$ 99,92); direita retângulo Conferir tudo */}
        <div className="flex gap-3">
          <div className="flex min-h-[44px] flex-1 items-center gap-3 rounded-2xl bg-[#EFEFEF] p-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-center text-sm font-medium leading-tight">
              {"18\nqua"}
            </div>
            <span className="font-medium">R$ 99,92</span>
          </div>
          <button
            type="button"
            className="flex min-h-[44px] flex-1 items-center justify-center gap-1 rounded-2xl bg-[#EFEFEF] text-muted-foreground"
          >
            Conferir tudo
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}
