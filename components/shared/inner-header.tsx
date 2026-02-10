"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  onBack?: () => void;
};

export function InnerHeader({ title, onBack }: Props) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <header className="w-full bg-[var(--color-brand)] px-4 pb-4 pt-[calc(env(safe-area-inset-top)+12px)]">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <div className="w-6" />
      </div>
    </header>
  );
}
