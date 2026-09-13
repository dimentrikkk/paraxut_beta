import { MapPin, Navigation } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Location() {
  const { t } = useI18n();
  const { address } = restaurant;

  return (
    <section id="localizacao" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading eyebrow={t("location.eyebrow")} title={t("location.title")} />
          <Reveal delay={100} className="mt-6">
            <address className="not-italic">
              <p className="font-display text-xl text-foreground">{restaurant.name}</p>
              <p className="mt-2 flex items-start gap-2 text-base text-muted-foreground">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {address.street}
                  <br />
                  {address.postalCode} {address.city}
                  <br />
                  {address.country}
                </span>
              </p>
            </address>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("location.historic")}</p>
            <a
              href={restaurant.maps.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm border border-gold/70 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              {t("cta.maps")}
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <iframe
            title={t("location.mapTitle")}
            src={restaurant.maps.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-4/3 w-full rounded-sm border border-border grayscale-[0.15]"
          />
        </Reveal>
      </div>
    </section>
  );
}
