import { ArrowLeft, Check, MessageCircle, Music } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { groupMenus, groupMenuTerms } from "@/data/group-menu";
import { restaurant, whatsappLink } from "@/config/restaurant";

const title = "Menu de Grupos | Restaurante Paraxut";
const description =
  "Menus para grupos a partir de 10 pessoas no Restaurante Paraxut, no centro histórico de Guimarães.";

export const Route = createFileRoute("/menu-grupos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu-grupos" }],
  }),
  component: GroupMenuPage,
});

function GroupMenuPage() {
  const bookingLink = whatsappLink(
    "Olá, gostaria de pedir informações sobre o menu de grupos do Restaurante Paraxut.",
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" hash="menu" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar à carta
          </Link>
          <div className="text-right">
            <p className="font-display text-lg uppercase text-foreground">{restaurant.name}</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Desde 1992</p>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-secondary px-4 py-14 text-center sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Restaurante Paraxut</p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-6xl">Menu para Grupos</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
          Duas propostas completas para partilhar à mesa, disponíveis mediante marcação prévia.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {groupMenus.map((menu) => (
            <article key={menu.id} className="flex flex-col border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-end justify-between gap-4 border-b border-border pb-5">
                <h2 className="text-3xl uppercase">{menu.name}</h2>
                <p className="text-right">
                  <span className="block text-xs uppercase text-muted-foreground">Preço por pessoa</span>
                  <strong className="font-display text-4xl text-gold">{menu.price} €</strong>
                </p>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                {menu.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl text-card-foreground">{section.title}</h3>
                    {section.items.length ? (
                      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gold" aria-hidden="true">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-auto flex items-center gap-2 border-t border-border pt-6 text-sm font-semibold text-foreground">
                <Music className="h-4 w-4 text-gold" aria-hidden="true" /> Karaoke disponível
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">Informação importante</p>
          <h2 className="mt-3 text-center text-3xl uppercase sm:text-4xl">Termos e condições</h2>
          <ul className="mt-9 space-y-4">
            {groupMenuTerms.map((term) => (
              <li key={term} className="flex items-start gap-3 text-base leading-relaxed text-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{term}</span>
              </li>
            ))}
          </ul>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Pedir informações pelo WhatsApp
          </a>
        </div>
      </section>

      <footer className="px-4 py-10 text-center">
        <p className="font-display text-2xl uppercase">Restaurante Paraxut</p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold">Desde 1992</p>
      </footer>
    </main>
  );
}