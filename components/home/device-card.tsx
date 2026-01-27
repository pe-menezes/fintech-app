"use client";

import { Smartphone } from "lucide-react";
import { Card } from "./card";

export function DeviceCard() {
  return (
    <Card className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFEFEF]">
        <Smartphone className="h-6 w-6 text-foreground" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">Você possui</p>
        <p className="font-semibold">1 maquininha</p>
      </div>
      <button
        type="button"
        className="shrink-0 rounded-xl bg-[#EFEFEF] px-6 py-2 font-medium"
      >
        Gerenciar
      </button>
    </Card>
  );
}
