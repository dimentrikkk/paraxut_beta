import { createFileRoute } from "@tanstack/react-router";

import { LanguageProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TouristStrip } from "@/components/site/TouristStrip";
import { About } from "@/components/site/About";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { ReservationForm } from "@/components/site/ReservationForm";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { restaurant, fullAddress } from "@/config/restaurant";

const title = "Restaurante Paraxut | Restaurante Português em Guimarães";
const description =
  "Restaurante Paraxut, desde 1992 no centro histórico de Guimarães. Cozinha tradicional portuguesa na Praça de São Tiago. Reservas por WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: restaurant.name,
          servesCuisine: "Portuguese",
          foundingDate: "1992",
          telephone: restaurant.phone,
          email: restaurant.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: restaurant.address.street,
            postalCode: restaurant.address.postalCode,
            addressLocality: restaurant.address.city,
            addressCountry: "PT",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: restaurant.hours.lunch.from,
              closes: restaurant.hours.lunch.to,
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: restaurant.hours.dinner.from,
              closes: restaurant.hours.dinner.to,
            },
          ],
          description: fullAddress,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <TouristStrip />
        <About />
        <MenuSection />
        <Gallery />
        <Reviews />
        <ReservationForm />
        <Location />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
