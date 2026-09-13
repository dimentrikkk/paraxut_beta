import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { restaurant } from "@/config/restaurant";
import { sections } from "./sections";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

const navSections = sections.filter((s) => s.id !== "contactos");

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur"
          : "border-transparent bg-background/80 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              "font-display truncate text-base font-semibold tracking-[0.1em] text-foreground uppercase transition-all sm:text-lg lg:text-base xl:text-lg",
            )}
          >
            {restaurant.name}
          </span>
          <span className="mt-0.5 text-[10px] tracking-[0.32em] text-gold uppercase">
            {t("hero.since")}
          </span>
        </a>

        <nav aria-label={t("nav.home")} className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => (
            <div key={s.id} className={cn("relative", s.id === "menu" && "group")}>
              <a
                href={`#${s.id}`}
                className="relative block rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-[calc(100%-1.5rem)]"
              >
                {t(s.key)}
              </a>
              {s.id === "menu" ? (
                <div className="invisible absolute left-0 top-full min-w-48 translate-y-1 border border-border bg-background p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <Link
                    to="/menu-grupos"
                    className="block rounded-sm px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-gold"
                  >
                    Menu de grupos
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <WhatsAppButton className="text-xs">{t("cta.whatsapp")}</WhatsAppButton>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-accent"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pb-6 pt-3 lg:hidden"
      >
        <nav className="flex flex-col" aria-label={t("nav.openMenu")}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-base text-foreground transition-colors hover:text-gold"
            >
              {t(s.key)}
            </a>
          ))}
          <Link
            to="/menu-grupos"
            onClick={() => setOpen(false)}
            className="border-b border-border/60 py-3 pl-4 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            Menu de grupos
          </Link>
        </nav>
        <WhatsAppButton className="mt-5 w-full">{t("cta.whatsapp")}</WhatsAppButton>
        <LanguageSwitcher className="mt-4 justify-center" />
      </div>
    </header>
  );
}
