"use client";

import { ChevronRight } from "lucide-react";
import { Card } from "./card";

export function ConsultorCard() {
  return (
    <Card className="flex items-center gap-4">
      <div className="h-16 w-16 shrink-0 rounded-full bg-[#E6E6E6]" />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">Consultor Stone</p>
        <p className="font-bold">Willian S</p>
        <p className="text-sm text-muted-foreground">
          Seu consultor de negócios
        </p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
    </Card>
  );
}
