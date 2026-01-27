"use client";

import { BannerCarousel } from "./banner-carousel";
import { BottomNav } from "./bottom-nav";
import { ConsultorCard } from "./consultor-card";
import { DeviceCard } from "./device-card";
import { MainCard } from "./main-card";
import { ModulesGrid } from "./modules-grid";
import { PromoCarousel } from "./promo-carousel";
import { ReceivablesCard } from "./receivables-card";
import { SalesCard } from "./sales-card";
import { TopBar } from "./top-bar";

const scrollbarHide =
  "overflow-x-auto overflow-y-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

export function HomeScreen() {
  return (
    <div className="pb-[calc(120px+env(safe-area-inset-bottom))]">
      <TopBar />
      <main className="space-y-3 px-4 pt-4">
        <MainCard />
        <PromoCarousel scrollbarHide={scrollbarHide} />
        <ReceivablesCard />
        <SalesCard />
        <DeviceCard />
        <ModulesGrid />
        <ConsultorCard />
        <BannerCarousel scrollbarHide={scrollbarHide} />
      </main>
      <BottomNav />
    </div>
  );
}
