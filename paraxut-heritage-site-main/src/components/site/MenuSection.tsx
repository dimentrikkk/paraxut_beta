import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [photoStarts, setPhotoStarts] = useState<Record<number, number>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<{ categoryIndex: number; imageIndex: number } | null>(null);

  const getVisibleImages = (categoryIndex: number) => {
    const images = categoryImages[categoryIndex];
    const start = photoStarts[categoryIndex] ?? 0;

    return [0, 1, 2].map((offset) => images[(start + offset) % images.length]);
  };

  const movePhotos = (categoryIndex: number, direction: number) => {
    const imageCount = categoryImages[categoryIndex].length;
    setPhotoStarts((current) => ({
      ...current,
      [categoryIndex]: ((current[categoryIndex] ?? 0) + direction + imageCount) % imageCount,
    }));
  };

  const moveSelectedPhoto = (direction: number) => {
    setSelectedPhoto((current) => {
      if (!current) return current;
      const images = categoryImages[current.categoryIndex];
      return {
        ...current,
        imageIndex: (current.imageIndex + direction + images.length) % images.length,
      };
    });
  };

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
      if (event.key === "ArrowLeft") moveSelectedPhoto(-1);
      if (event.key === "ArrowRight") moveSelectedPhoto(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  const activePhoto = selectedPhoto
    ? categoryImages[selectedPhoto.categoryIndex][selectedPhoto.imageIndex]
    : null;

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
                  <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => movePhotos(i, -1)}
                        aria-label={t("gallery.prev")}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                    <div className="grid min-w-0 flex-1 grid-cols-3 gap-3">
                      {getVisibleImages(i).map((image, imageIndex) => (
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedPhoto({
                                categoryIndex: i,
                                imageIndex: ((photoStarts[i] ?? 0) + imageIndex) % categoryImages[i].length,
                              })
                            }
                            className="group relative block w-full overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <img
                              src={image.src}
                              alt={image.name}
                              loading="lazy"
                              className="aspect-[16/9] w-full object-cover"
                            />
                            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 pb-2 pt-6 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                              {image.name}
                            </span>
                          </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => movePhotos(i, 1)}
                        aria-label={t("gallery.next")}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
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

      {activePhoto && selectedPhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.name}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label={t("gallery.close")}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-sm text-white hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              moveSelectedPhoto(-1);
            }}
            aria-label={t("gallery.prev")}
            className="absolute left-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-white hover:bg-white/10 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure onClick={(event) => event.stopPropagation()} className="max-h-full text-center">
            <img src={activePhoto.src} alt={activePhoto.name} className="max-h-[75svh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-3 text-sm text-white">{activePhoto.name}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              moveSelectedPhoto(1);
            }}
            aria-label={t("gallery.next")}
            className="absolute right-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-white hover:bg-white/10 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
