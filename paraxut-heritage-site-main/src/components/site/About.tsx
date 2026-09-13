import { Heart, Sparkles, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";
import galleryInterior from "@/assets/gallery-interior.jpg";

export function About() {
  const { t } = useI18n();

  const values = [
    { icon: Sparkles, title: t("about.value1.title"), text: t("about.value1.text") },
    { icon: Heart, title: t("about.value2.title"), text: t("about.value2.text") },
    { icon: Users, title: t("about.value3.title"), text: t("about.value3.text") },
  ];

  return (
    <section id="sobre" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
          <Reveal delay={100} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={150 + i * 90}>
                <div className="h-full rounded-sm border border-border bg-card p-4">
                  <v.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="mt-3 text-lg text-card-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="order-first lg:order-last">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 -z-10 rounded-sm border border-gold/40"
            />
            <img
              src={galleryInterior}
              alt={t("gallery.interior")}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full rounded-sm object-cover shadow-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
