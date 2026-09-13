import { Clock, MapPin, MessageCircle, Soup } from "lucide-react";
import { restaurant } from "@/config/restaurant";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function TouristStrip() {
  const { t } = useI18n();

  const items = [
    { icon: MapPin, label: t("tourist.location") },
    { icon: Soup, label: t("tourist.cuisine") },
    { icon: Clock, label: t("tourist.hours") },
    { icon: MessageCircle, label: t("tourist.booking") },
  ];

  return (
    <section aria-labelledby="tourist-title" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <Reveal>
          <h2 id="tourist-title" className="text-3xl text-foreground sm:text-4xl">
            {t("tourist.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
            {t("tourist.text")}
          </p>
        </Reveal>
        <ul className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 80}>
              {i === 0 ? (
                <a
                  href={restaurant.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col items-center gap-2 rounded-sm border border-border/70 bg-card px-3 py-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <item.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <span className="text-xs font-medium leading-snug text-foreground sm:text-sm">
                    {item.label}
                  </span>
                </a>
              ) : (
                <div className="flex h-full flex-col items-center gap-2 rounded-sm border border-border/70 bg-card px-3 py-5 transition-transform duration-300 hover:-translate-y-1">
                  <item.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <span className="text-xs font-medium leading-snug text-foreground sm:text-sm">
                    {item.label}
                  </span>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
