/**
 * CONFIGURAÇÃO CENTRAL DO RESTAURANTE
 * ------------------------------------------------------------
 * Altera aqui todos os dados de contacto, horários, links e imagens.
 * Nenhum destes valores deve ser repetido dentro dos componentes.
 */

import heroImage from "@/assets/hero-placeholder.png";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryDish from "@/assets/gallery-dish.jpg";
import gallerySquare from "@/assets/gallery-square.jpg";

export const restaurant = {
  name: "Restaurante Paraxut",
  shortName: "Paraxut",
  since: 1992,

  address: {
    street: "Praça de São Tiago 14",
    postalCode: "4800-445",
    city: "Guimarães",
    country: "Portugal",
  },

  phone: "+351 932 730 994",
  /** Formato internacional sem espaços nem "+" (usado nos links wa.me) */
  whatsapp: "351932730994",
  email: "restauranteparaxut@hotmail.com",

  /** TODO: colocar aqui o URL real da página de Facebook do restaurante. */
  facebookUrl: "https://www.facebook.com/restauranteparaxut/?locale=ru_RU",

  hours: {
    lunch: { from: "12:00", to: "15:00" },
    dinner: { from: "19:00", to: "22:00" },
  },

  maps: {
    /** Link para abrir no Google Maps (substituível pelo link oficial do negócio) */
    link: "https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+de+S%C3%A3o+Tiago+14%2C+4800-445+Guimar%C3%A3es&hl=pt-PT",
    /** Iframe do mapa (substituível pelo embed oficial) */
    embed:
      "https://www.google.com/maps?q=Pra%C3%A7a%20de%20S%C3%A3o%20Tiago%2014%2C%204800-445%20Guimar%C3%A3es&hl=pt-PT&output=embed",
  },

  /**
   * IMAGENS
   * Substitui estes ficheiros em src/assets/ pelas fotografias reais
   * (mantendo os mesmos nomes) — o design continua a funcionar.
   */
  images: {
    hero: heroImage,
    /** logo: importar aqui o logótipo real quando estiver disponível */
    logo: null as string | null,
  },
} as const;

export type GalleryImage = {
  src: string;
  /** chave de tradução do alt/legenda */
  captionKey: "gallery.interior" | "gallery.dish" | "gallery.square" | "gallery.facade";
};

/** GALERIA — substituir por fotografias reais do restaurante */
export const galleryImages: GalleryImage[] = [
  { src: galleryInterior, captionKey: "gallery.interior" },
  { src: galleryDish, captionKey: "gallery.dish" },
  { src: gallerySquare, captionKey: "gallery.square" },
  { src: heroImage, captionKey: "gallery.facade" },
];

export const fullAddress = `${restaurant.address.street}, ${restaurant.address.postalCode} ${restaurant.address.city}, ${restaurant.address.country}`;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${restaurant.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
