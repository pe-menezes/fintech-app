"use client";

type Props = {
  brand: "Mastercard" | "Visa" | "Elo" | "Amex";
  className?: string;
};

export function CardBrandIcon({ brand, className = "" }: Props) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    Mastercard: { bg: "bg-[#EB001B]/10", text: "text-[#EB001B]", label: "MC" },
    Visa: { bg: "bg-[#1A1F71]/10", text: "text-[#1A1F71]", label: "Visa" },
    Elo: { bg: "bg-[#00A4E0]/10", text: "text-[#00A4E0]", label: "Elo" },
    Amex: { bg: "bg-[#006FCF]/10", text: "text-[#006FCF]", label: "Amex" },
  };

  const c = config[brand] ?? config.Visa;

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${className}`}
    >
      <span className={`text-xs font-bold ${c.text}`}>{c.label}</span>
    </div>
  );
}
