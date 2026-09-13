import { localeLabels, locales, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="group"
      aria-label={t("lang.label")}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          aria-label={localeLabels[l].label}
          className={cn(
            "min-h-9 min-w-9 rounded-sm px-2 text-xs font-semibold tracking-wide transition-colors",
            locale === l
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
          )}
        >
          <span aria-hidden="true" className="mr-1">
            {localeLabels[l].flag}
          </span>
          {localeLabels[l].short}
        </button>
      ))}
    </div>
  );
}
