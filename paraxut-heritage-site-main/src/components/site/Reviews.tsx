import { Quote, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

const reviews = [
  "The food was delicious, well presented and full of taste. The environment is super pleasant and welcoming, perfect for enjoying a special moment.",
  "In addition to the very good and very full food, the price of the experience was quite fair! I recommend to everyone - first quality care from Uncle Paulo!",
  "Good service, friendly and without surroundings. Mirandesa post was at the point, dessert too. And the red green wine was top. In terms of quality price is acceptable. And to come back.",
];

export function Reviews() {
  const { t } = useI18n();

  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow={t("reviews.eyebrow")} title={t("reviews.title")} />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal as="li" key={review} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
                  <div className="flex gap-1 text-gold" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-3.5 w-3.5 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {review}
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Avaliação de cliente
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t("reviews.note")}</p>
      </div>
    </section>
  );
}
