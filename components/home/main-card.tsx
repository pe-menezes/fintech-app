"use client";

import Link from "next/link";
import { ChevronRight, CreditCard, Store, Wallet } from "lucide-react";
import { Card } from "./card";
import { PixIcon } from "./pix-icon";

export function MainCard() {
  const actions = [
    { label: "Pix", icon: PixIcon },
    { label: "Transferir", icon: Wallet },
    { label: "Pagar", icon: CreditCard },
    { label: "Vender", icon: Store },
  ];
  return (
    <Card className="flex flex-col gap-4">
      {/* A) Linha Saldo: label + chevron no topo; valor na linha de baixo */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Saldo da Conta</p>
          <p className="text-4xl font-semibold">R$ 110,67</p>
        </div>
        <ChevronRight className="h-6 w-6 shrink-0 text-muted-foreground" />
      </div>
      <Link
        href="/aportar-com-cartao"
        className="flex min-h-[44px] items-center justify-between gap-3 rounded-2xl bg-[#EFEFEF] p-3"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
          <CreditCard className="h-5 w-5 text-[var(--color-brand)]" />
        </span>
        <span className="font-medium text-sm">Aportar com Cartão</span>
        <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
      </Link>
      {/* B) Linha Reserva */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-medium">Reserva Stone</p>
          <p className="text-sm text-muted-foreground">
            Deixe o dinheiro trabalhar para você
          </p>
        </div>
        <button
          type="button"
          className="min-h-[44px] shrink-0 px-3 text-sm font-medium text-brand"
        >
          Conhecer
        </button>
      </div>
      {/* C) Divider full width */}
      <div className="-mx-4 border-t border-border" />
      {/* D) Área das ações com bg cinza */}
      <div className="-mx-4 bg-black/[0.02] px-4 py-4">
        <div className="flex justify-between gap-2">
          {actions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="flex min-h-[44px] min-w-[44px] flex-col items-center gap-1.5"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ECECEC] text-zinc-900">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <span className="text-xs text-foreground">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
