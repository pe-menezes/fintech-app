"use client";

import { ChevronRight } from "lucide-react";
import { Card } from "./card";

export function ConsultorCard() {
  return (
    <Card className="flex items-center gap-4">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face&auto=format&q=80"
        alt="Foto do consultor Willian S"
        className="h-16 w-16 shrink-0 rounded-full object-cover bg-[#E6E6E6]"
      />
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
