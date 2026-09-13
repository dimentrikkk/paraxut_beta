import { restaurant, whatsappLink } from "@/config/restaurant";
import { useI18n } from "@/lib/i18n";
import { sections } from "./sections";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t } = useI18n();
  const { address } = restaurant;

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl uppercase tracking-[0.14em] text-card-foreground">
            {restaurant.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.32em] text-gold">{t("hero.since")}</p>
          <address className="mt-5 space-y-1 text-sm not-italic text-muted-foreground">
            <p>
              {address.street}
              <br />
              {address.postalCode} {address.city}, {address.country}
            </p>
            <p>
              <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {restaurant.phone}
              </a>
            </p>
            <p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp: {restaurant.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${restaurant.email}`} className="break-all hover:text-gold">
                {restaurant.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label={t("footer.links")}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {t("footer.links")}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-gold">
                  {t(s.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {t("footer.languages")}
          </h2>
          <LanguageSwitcher className="mt-4 -ml-2 flex-wrap" />
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {restaurant.name}. {t("footer.rights")}
      </div>
    </footer>
  );
}
