import { UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { useI18n } from "@/lib/i18n";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={restaurant.images.hero}
        alt={t("hero.imageAlt")}
        width={1600}
        height={1104}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/80"
      />

      <div className="mx-auto flex min-h-[88svh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[oklch(0.82_0.09_78)]">
          {t("hero.since")}
        </p>
        <h1 className="font-display mt-5 text-4xl leading-[1.1] text-[oklch(0.98_0.01_85)] uppercase tracking-[0.06em] sm:text-6xl lg:text-7xl">
          Restaurante
          <span className="mt-1 block">Paraxut</span>
        </h1>
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[oklch(0.82_0.09_78)] to-transparent"
        />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[oklch(0.88_0.06_78)] sm:text-base">
          {t("hero.house")}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[oklch(0.93_0.012_85)] sm:text-lg">
          {t("hero.tagline")}
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#menu"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-[oklch(0.82_0.09_78)] px-6 text-sm font-semibold tracking-wide text-[oklch(0.97_0.012_85)] transition-colors duration-300 hover:bg-[oklch(0.82_0.09_78)] hover:text-[oklch(0.2_0.02_55)] sm:w-auto"
          >
            <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
            {t("cta.viewMenu")}
          </a>
          <WhatsAppButton className="w-full sm:w-auto">{t("cta.whatsapp")}</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
