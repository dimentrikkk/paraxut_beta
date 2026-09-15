import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/config/restaurant";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Gallery() {
  const { t } = useI18n();
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const active = index === null ? null : galleryImages[index];

  return (
    <section id="galeria" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow={t("gallery.eyebrow")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal as="li" key={image.src + i} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm border border-border"
              >
                <img
                  src={image.src}
                  alt={t(image.captionKey)}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(active.captionKey)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t("gallery.close")}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-sm text-[oklch(0.97_0.01_85)] hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label={t("gallery.prev")}
            className="absolute left-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-[oklch(0.97_0.01_85)] hover:bg-white/10 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={active.src}
              alt={t(active.captionKey)}
              className="max-h-[75svh] w-auto rounded-sm object-contain"
            />
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label={t("gallery.next")}
            className="absolute right-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-[oklch(0.97_0.01_85)] hover:bg-white/10 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
