"use client";

type BannerCarouselProps = {
  scrollbarHide: string;
};

export function BannerCarousel({ scrollbarHide }: BannerCarouselProps) {
  return (
    <div
      className={`snap-x snap-mandatory px-4 py-2 ${scrollbarHide}`}
    >
      <div className="flex gap-4">
        <article
          className="h-[120px] w-[340px] shrink-0 snap-start rounded-2xl bg-gradient-to-br from-[#2F684D] to-emerald-800 p-4 text-white shadow-sm"
        >
          <p className="font-semibold">Samsung até 80% OFF</p>
          <p className="mt-1 text-sm opacity-90">Confira condições</p>
          <button
            type="button"
            className="mt-2 text-sm font-medium underline"
          >
            Saiba mais
          </button>
        </article>
        <article
          className="h-[120px] w-[340px] shrink-0 snap-start rounded-2xl bg-emerald-900 p-4 text-white shadow-sm"
        >
          <p className="font-semibold">Link de pagamento...</p>
          <p className="mt-1 text-sm opacity-90">Placeholder</p>
        </article>
      </div>
    </div>
  );
}
