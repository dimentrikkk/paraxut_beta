import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { menu } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";
import soupBoard from "@/assets/sopas/tabua.jpeg";
import caldoVerde from "@/assets/sopas/caldoverde.jpeg";
import cheeseBoard from "@/assets/entradas/tabuaqueijo.jpeg";
import prawns from "@/assets/entradas/gambas.jpeg";
import vegetableSoup from "@/assets/entradas/sopalegumes.jpeg";
import mushrooms from "@/assets/entradas/cogumelos.jpeg";
import peppers from "@/assets/entradas/pimentos.jpeg";
import beefPepper from "@/assets/carnes/bife 5 pimentas.jpg";
import naco from "@/assets/carnes/naco.jpg";
import pernil from "@/assets/carnes/pernil.jpg";
import picanha from "@/assets/carnes/picanha.jpg";
import secretos from "@/assets/carnes/secretos.jpg";
import codCornbread from "@/assets/peixes/bacalhaubroa.jpg";
import codCream from "@/assets/peixes/bacalhaunatas.jpg";
import seaBass from "@/assets/peixes/filetesrobalo.jpg";
import octopus from "@/assets/peixes/polvo.jpg";
import salmon from "@/assets/peixes/salmao.jpg";
import sardines from "@/assets/peixes/sardinha.jpg";
import prawnTagliatelle from "@/assets/peixes/tagliatelegambas.jpg";
import tunaSalad from "@/assets/saladas/saladaatum.jpg";
import chickenSalad from "@/assets/saladas/saladafrango.jpg";
import vegetarianBolognese from "@/assets/vegetariano/bolonhesavegetariana.webp";

const categoryImages = [
  [
    { src: soupBoard, name: "Tábua de sopas" },
    { src: caldoVerde, name: "Caldo Verde" },
    { src: cheeseBoard, name: "Tábua de queijo e presunto" },
    { src: prawns, name: "Gambas à guilho" },
    { src: vegetableSoup, name: "Sopa de legumes" },
    { src: mushrooms, name: "Cogumelos crocantes" },
    { src: peppers, name: "Pimentos Padrão" },
  ],
  [
    { src: tunaSalad, name: "Salada de atum" },
    { src: chickenSalad, name: "Salada de frango" },
    { src: vegetarianBolognese, name: "Bolonhesa vegetariana" },
  ],
  [
    { src: codCornbread, name: "Bacalhau com broa" },
    { src: codCream, name: "Bacalhau com natas" },
    { src: seaBass, name: "Filetes de robalo" },
    { src: octopus, name: "Polvo à lagareiro" },
    { src: salmon, name: "Salmão" },
    { src: sardines, name: "Sardinhas assadas" },
    { src: prawnTagliatelle, name: "Tagliatelle de gambas" },
    { src: beefPepper, name: "Bife 5 pimentas" },
    { src: naco, name: "Naco à conquistador" },
    { src: pernil, name: "Pernil" },
    { src: picanha, name: "Picanha" },
    { src: secretos, name: "Secretos de porco preto" },
  ],
];

function formatPrice(price: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : locale, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function MenuSection() {
  const { t, locale } = useI18n();
  const [photoStart, setPhotoStart] = useState(0);

  const soupAndStarterImages = categoryImages[0];
  const visibleSoupAndStarterImages = [0, 1, 2].map(
    (offset) => soupAndStarterImages[(photoStart + offset) % soupAndStarterImages.length],
  );

  return (
    <section id="menu" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow={t("menu.eyebrow")} title={t("menu.title")} />
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[oklch(0.18_0.02_55)] dark:text-foreground">
          {t("menu.subtitle")}
        </p>

        <div className="mt-12 space-y-10">
          {menu.map((category, i) => (
            <Reveal as="article" key={category.id} delay={(i % 3) * 90}>
              <div className="overflow-hidden rounded-sm border border-border bg-card">
                <div className="p-5 sm:p-7">
                  <h3 className="text-2xl uppercase text-card-foreground rule-gold">
                    {category.title[locale]}
                  </h3>
                  <div className="mt-7 grid gap-8 md:grid-cols-2">
                    {category.subcategories.map((subcategory) => (
                      <section key={subcategory.id}>
                        <h4 className="font-display text-xl text-gold">
                          {subcategory.title[locale]}
                        </h4>
                        {subcategory.note ? (
                          <p className="mt-1 text-sm font-semibold text-foreground">
                            {subcategory.note[locale]}
                          </p>
                        ) : null}
                        <ul className="mt-4 space-y-4">
                          {subcategory.items.map((item) => (
                            <li key={item.id}>
                              <div className="flex items-baseline justify-between gap-3">
                                <h5 className="text-sm font-semibold leading-snug text-card-foreground sm:text-base">
                                  {item.name[locale]}
                                </h5>
                                {item.price !== null ? (
                                  <span className="shrink-0 text-sm font-semibold text-gold">
                                    {formatPrice(item.price, locale)}
                                  </span>
                                ) : null}
                              </div>
                              {item.description ? (
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                  {item.description[locale]}
                                </p>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border bg-muted p-4 sm:p-5">
                  {i === 0 ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setPhotoStart(
                            (current) =>
                              (current - 1 + soupAndStarterImages.length) % soupAndStarterImages.length,
                          )
                        }
                        aria-label={t("gallery.prev")}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <div className="grid min-w-0 flex-1 grid-cols-3 gap-3">
                        {visibleSoupAndStarterImages.map((image, imageIndex) => (
                          <div key={`${category.id}-${photoStart}-${imageIndex}`} className="group relative overflow-hidden rounded-sm">
                            <img
                              src={image.src}
                              alt={image.name}
                              loading="lazy"
                              className="aspect-[16/9] w-full object-cover"
                            />
                            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 pb-2 pt-6 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                              {image.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setPhotoStart((current) => (current + 1) % soupAndStarterImages.length)
                        }
                        aria-label={t("gallery.next")}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-3">
                      {categoryImages[i % categoryImages.length].map((image, imageIndex) => (
                        <div key={`${category.id}-${imageIndex}`} className="group relative overflow-hidden rounded-sm">
                          <img
                            src={image.src}
                            alt={image.name}
                            loading="lazy"
                            className="aspect-[16/9] w-full object-cover"
                          />
                          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 pb-2 pt-6 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {image.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-center gap-2 text-center">
                    <Camera className="h-5 w-5 text-gold" aria-hidden="true" />
                    <p className="font-display text-xl text-foreground">{category.title[locale]}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">{t("menu.note")}</p>
      </div>
    </section>
  );
}
