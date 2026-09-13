import type { Locale } from "@/lib/i18n";

export type Localized = Record<Locale, string>;

export type MenuItem = {
  id: string;
  name: Localized;
  description?: Localized;
  price: number | null;
};

export type MenuSubcategory = {
  id: string;
  title: Localized;
  note?: Localized;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  title: Localized;
  subcategories: MenuSubcategory[];
};

const t = (pt: string, en: string, es: string, fr: string): Localized => ({ pt, en, es, fr });

export const menu: MenuCategory[] = [
  {
    id: "sopas-entradas",
    title: t("Sopas & Entradas", "Soups & Starters", "Sopas y Entrantes", "Soupes et Entrées"),
    subcategories: [
      {
        id: "sopas",
        title: t("Sopas", "Soups", "Sopas", "Soupes"),
        items: [
          { id: "sopa-legumes", name: t("Sopa de legumes", "Vegetable soup", "Sopa de verduras", "Soupe de légumes"), price: 3 },
          { id: "caldo-verde", name: t("Caldo Verde", "Caldo Verde", "Caldo Verde", "Caldo Verde"), price: 3.5 },
        ],
      },
      {
        id: "entradas",
        title: t("Entradas", "Starters", "Entrantes", "Entrées"),
        items: [
          { id: "pao", name: t("Pão", "Bread", "Pan", "Pain"), price: 2.2 },
          {
            id: "couvert",
            name: t("Couvert", "Couvert", "Couvert", "Couvert"),
            description: t("Pão, azeitonas e azeite", "Bread, olives and olive oil", "Pan, aceitunas y aceite de oliva", "Pain, olives et huile d’olive"),
            price: 4.9,
          },
          { id: "pimentos-padron", name: t("Pimentos Padrão", "Padrón peppers", "Pimientos de Padrón", "Piments de Padrón"), price: 8.5 },
          { id: "cogumelos", name: t("Cogumelos crocantes", "Crispy mushrooms", "Champiñones crujientes", "Champignons croustillants"), price: 9.5 },
          { id: "asinhas", name: t("Asinhas de frango picantes", "Spicy chicken wings", "Alitas de pollo picantes", "Ailes de poulet épicées"), price: 9.9 },
          { id: "tabua-queijo", name: t("Tábua de queijo e presunto", "Cheese and cured ham board", "Tabla de queso y jamón", "Planche de fromage et jambon"), price: 15.9 },
          {
            id: "tabua-salgadinhos",
            name: t("Tábua de salgadinhos", "Savoury snacks board", "Tabla de aperitivos", "Planche d’amuse-bouches"),
            description: t("Rissóis de carne, croquetes de alheira, rissóis de leitão e bolinhos de bacalhau", "Meat rissoles, alheira croquettes, suckling pig rissoles and codfish cakes", "Empanadillas de carne, croquetas de alheira, empanadillas de cochinillo y buñuelos de bacalao", "Rissoles de viande, croquettes d’alheira, rissoles de cochon de lait et beignets de morue"),
            price: 15.9,
          },
          { id: "gambas-alho", name: t("Gambas à guilho", "Garlic prawns", "Gambas al ajillo", "Crevettes à l’ail"), price: 14.9 },
        ],
      },
    ],
  },
  {
    id: "familia-leve",
    title: t("Infantil, Vegetariano & Saladas", "Kids, Vegetarian & Salads", "Infantil, Vegetariano y Ensaladas", "Enfants, Végétarien et Salades"),
    subcategories: [
      {
        id: "infantil",
        title: t("Menu Infantil", "Kids Menu", "Menú Infantil", "Menu Enfant"),
        note: t("Até 12 anos — bebida incluída", "Up to 12 years — drink included", "Hasta 12 años — bebida incluida", "Jusqu’à 12 ans — boisson incluse"),
        items: [
          { id: "nuggets", name: t("Nuggets", "Nuggets", "Nuggets", "Nuggets"), price: 14.5 },
          { id: "pizza-batata", name: t("Pizza com batata frita", "Pizza with fries", "Pizza con patatas fritas", "Pizza avec frites"), price: 14.5 },
        ],
      },
      {
        id: "vegetariano",
        title: t("Vegetariano", "Vegetarian", "Vegetariano", "Végétarien"),
        items: [
          { id: "bolonhesa-veg", name: t("Bolonhesa", "Bolognese", "Boloñesa", "Bolognaise"), price: 16.9 },
          {
            id: "tagliatelle-legumes",
            name: t("Tagliatelle de legumes", "Vegetable tagliatelle", "Tagliatelle de verduras", "Tagliatelles aux légumes"),
            description: t("Cogumelos, brócolos e tomate cherry", "Mushrooms, broccoli and cherry tomatoes", "Champiñones, brócoli y tomate cherry", "Champignons, brocoli et tomates cerises"),
            price: 15.9,
          },
        ],
      },
      {
        id: "saladas",
        title: t("Saladas", "Salads", "Ensaladas", "Salades"),
        items: [
          { id: "salada-frango", name: t("Salada de frango", "Chicken salad", "Ensalada de pollo", "Salade de poulet"), description: t("Massa, alface, tomate cherry, frango, abacaxi, ovo, croutons e molho de mostarda e mel", "Pasta, lettuce, cherry tomatoes, chicken, pineapple, egg, croutons and honey mustard dressing", "Pasta, lechuga, tomate cherry, pollo, piña, huevo, picatostes y salsa de mostaza y miel", "Pâtes, laitue, tomates cerises, poulet, ananas, œuf, croûtons et sauce moutarde-miel"), price: 13.9 },
          { id: "salada-atum", name: t("Salada de atum", "Tuna salad", "Ensalada de atún", "Salade de thon"), description: t("Massa, alface, tomate cherry, atum, ovo, queijo mozzarella, pimentos e molho de mostarda e mel", "Pasta, lettuce, cherry tomatoes, tuna, egg, mozzarella, peppers and honey mustard dressing", "Pasta, lechuga, tomate cherry, atún, huevo, mozzarella, pimientos y salsa de mostaza y miel", "Pâtes, laitue, tomates cerises, thon, œuf, mozzarella, poivrons et sauce moutarde-miel"), price: 13.9 },
          { id: "salada-salmao", name: t("Salada de salmão fumado", "Smoked salmon salad", "Ensalada de salmón ahumado", "Salade de saumon fumé"), description: t("Alface, tomate cherry, salmão fumado, queijo mozzarella, ovo e molho de três ervas", "Lettuce, cherry tomatoes, smoked salmon, mozzarella, egg and three-herb dressing", "Lechuga, tomate cherry, salmón ahumado, mozzarella, huevo y salsa de tres hierbas", "Laitue, tomates cerises, saumon fumé, mozzarella, œuf et sauce aux trois herbes"), price: 14.5 },
        ],
      },
    ],
  },
  {
    id: "peixes-carnes",
    title: t("Peixes & Carnes", "Fish & Meat", "Pescados y Carnes", "Poissons et Viandes"),
    subcategories: [
      {
        id: "peixes",
        title: t("Peixes", "Fish", "Pescados", "Poissons"),
        items: [
          { id: "sardinhas", name: t("Sardinhas assadas na brasa", "Charcoal-grilled sardines", "Sardinas a la brasa", "Sardines grillées à la braise"), price: 15.9 },
          { id: "filetes-robalo", name: t("Filetes de robalo", "Sea bass fillets", "Filetes de lubina", "Filets de bar"), price: 17.5 },
          { id: "bacalhau-broa", name: t("Bacalhau com broa", "Codfish with corn bread crust", "Bacalao con pan de maíz", "Morue en croûte de pain de maïs"), price: 21.9 },
          { id: "polvo-lagareiro", name: t("Polvo à lagareiro", "Octopus ‘à lagareiro’", "Pulpo ‘à lagareiro’", "Poulpe ‘à lagareiro’"), price: 21.9 },
        ],
      },
      {
        id: "carnes",
        title: t("Carnes", "Meat", "Carnes", "Viandes"),
        items: [
          { id: "secretos", name: t("Secretos de porco preto c/ migas", "Black pork ‘secretos’ with migas", "Secretos de cerdo ibérico con migas", "Secretos de porc noir avec migas"), price: 17.9 },
          { id: "bife-5-pimentas", name: t("Bife 5 pimentas", "Five-pepper steak", "Solomillo a las 5 pimientas", "Steak aux 5 poivres"), price: 17.9 },
          { id: "naco", name: t("Naco à conquistador", "‘Naco à conquistador’ beef", "Naco ‘à conquistador’", "Pièce de bœuf ‘à conquistador’"), price: 18.5 },
          { id: "tbone", name: t("T-Bone Steak (Beef)", "T-Bone Steak (Beef)", "Chuletón T-Bone (vacuno)", "T-Bone Steak (bœuf)"), price: 24 },
          { id: "posta-mirandela", name: t("Posta à moda de Mirandela (2 pax)", "Mirandela-style beef (2 people)", "Posta al estilo de Mirandela (2 personas)", "Posta de bœuf façon Mirandela (2 personnes)"), price: 36 },
        ],
      },
    ],
  },
];