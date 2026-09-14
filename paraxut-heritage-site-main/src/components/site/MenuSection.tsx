import { Camera } from "lucide-react";
import { menu } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";
import galleryDish from "@/assets/gallery-dish.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import gallerySquare from "@/assets/gallery-square.jpg";
import soupBoard from "@/assets/sopas/tabua.jpeg";
import caldoVerde from "@/assets/sopas/caldoverde.jpeg";
import cheeseBoard from "@/assets/entradas/tabuaqueijo.jpeg";
import prawns from "@/assets/entradas/gambas.jpeg";
import vegetableSoup from "@/assets/entradas/sopalegumes.jpeg";
import mushrooms from "@/assets/entradas/cogumelos.jpeg";
import peppers from "@/assets/entradas/pimentos.jpeg";

const categoryImages = [
  [soupBoard, caldoVerde, cheeseBoard, prawns, vegetableSoup, mushrooms, peppers],
  [galleryInterior, galleryDish, gallerySquare],
  [gallerySquare, galleryDish, galleryInterior],
];

function formatPrice(price: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : locale, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function MenuSection() {
  const { t, locale } = useI18n();

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
                  <div className="grid grid-cols-3 gap-3">
                    {categoryImages[i % categoryImages.length].map((image, imageIndex) => (
                      <img
                        key={`${category.id}-${imageIndex}`}
                        src={image}
                        alt={`${category.title[locale]} ${imageIndex + 1}`}
                        loading="lazy"
                        className="aspect-[16/9] w-full rounded-sm object-cover"
                      />
                    ))}
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
    </section>
  );
}
