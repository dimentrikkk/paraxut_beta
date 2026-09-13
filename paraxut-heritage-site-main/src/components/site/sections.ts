import type { TranslationKey } from "@/data/translations";

/** Secções da página única — usadas na navbar, footer e scroll suave. */
export const sections: { id: string; key: TranslationKey }[] = [
  { id: "inicio", key: "nav.home" },
  { id: "sobre", key: "nav.about" },
  { id: "menu", key: "nav.menu" },
  { id: "galeria", key: "nav.gallery" },
  { id: "avaliacoes", key: "nav.reviews" },
  { id: "reservas", key: "nav.reservations" },
  { id: "localizacao", key: "nav.location" },
  { id: "contactos", key: "nav.contact" },
];
