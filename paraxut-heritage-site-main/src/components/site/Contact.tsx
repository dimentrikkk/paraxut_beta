import { Clock, Facebook, Mail, MessageCircle, Navigation, Phone } from "lucide-react";
import { restaurant, whatsappLink } from "@/config/restaurant";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const { t } = useI18n();
  const { hours } = restaurant;

  return (
    <section id="contactos" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading center eyebrow={t("contact.eyebrow")} title={t("contact.title")} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <ul className="h-full space-y-4 rounded-sm border border-border bg-card p-6">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("contact.phone")}
                  </p>
                  <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="text-base text-card-foreground hover:text-gold">
                    {restaurant.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("contact.whatsapp")}
                  </p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-card-foreground hover:text-gold"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("contact.email")}
                  </p>
                  <a
                    href={`mailto:${restaurant.email}`}
                    className="block truncate text-base text-card-foreground hover:text-gold"
                  >
                    {restaurant.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t("contact.facebook")}
                  </p>
                  {restaurant.facebookUrl ? (
                    <a
                      href={restaurant.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-card-foreground hover:text-gold"
                    >
                      {restaurant.name}
                    </a>
                  ) : (
                    <span className="text-base text-muted-foreground">{t("contact.facebookSoon")}</span>
                  )}
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col rounded-sm border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t("contact.hours")}
                </p>
              </div>
              <p className="mt-3 text-base text-card-foreground">{t("contact.everyday")}</p>
              <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <dt>{t("contact.lunch")}</dt>
                  <dd>
                    {hours.lunch.from} – {hours.lunch.to}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>{t("contact.dinner")}</dt>
                  <dd>
                    {hours.dinner.from} – {hours.dinner.to}
                  </dd>
                </div>
              </dl>

              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-sm bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${restaurant.email}`}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-sm border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t("cta.email")}
                </a>
                <a
                  href={restaurant.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-sm border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
