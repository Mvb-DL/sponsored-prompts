// components/MobileModelsJump.tsx
'use client';

export function MobileModelsJump() {
  const handleClick = () => {
    if (typeof window === 'undefined') return;

    const target = document.getElementById('models');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;

    const targetTopInDocument = rect.top + window.scrollY;

    // 👉 HIER stellst du ein, wie weit gescrollt wird
    // Aktuell: versucht zu zentrieren
    // const top =
    //   targetTopInDocument - (viewportHeight - elementHeight) / 2;

    // Besser für "etwas höher stehen lassen":
    const MOBILE_OFFSET_PX = 80; // diesen Wert kannst du anpassen (z.B. 60, 100, …)
    const top = targetTopInDocument - MOBILE_OFFSET_PX;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-10 flex flex-col items-center gap-2 md:hidden">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center">
        Models
      </p>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex flex-col items-center text-zinc-500 hover:text-zinc-100 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-0.5">
          Go to model selection
        </span>
        <span className="text-xl leading-none">↓</span>
      </button>
    </div>
  );
}
