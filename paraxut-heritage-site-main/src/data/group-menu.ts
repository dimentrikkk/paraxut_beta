export type GroupMenu = {
  id: string;
  name: string;
  price: number;
  sections: { title: string; items: string[] }[];
};

export const groupMenus: GroupMenu[] = [
  {
    id: "menu-1",
    name: "Menu 1",
    price: 35,
    sections: [
      {
        title: "Entradas variadas",
        items: [
          "Pão, paté de atum e azeitonas",
          "Rissóis de carne, bolinhos de bacalhau e croquetes de alheira",
          "Tostas de alho",
          "Folhadinhos de salsicha",
          "Pimentos Padrão",
        ],
      },
      { title: "Peixe", items: ["Bacalhau com natas", "Filetes de peixe com salada russa"] },
      {
        title: "Carne",
        items: ["Arroz de pato", "Posta à moda de Mirandela com arroz e feijão preto"],
      },
      { title: "Bebida incluída", items: ["Vinho verde e maduro da casa"] },
      { title: "Sobremesa", items: ["Bolo da casa", "Frutas variadas"] },
      { title: "Café", items: [] },
    ],
  },
  {
    id: "menu-2",
    name: "Menu 2",
    price: 40,
    sections: [
      {
        title: "Entradas variadas",
        items: [
          "Pão, paté de atum e azeitonas",
          "Rissóis de carne, bolinhos de bacalhau e croquetes de alheira",
          "Tostas de alho",
          "Folhadinhos de salsicha",
          "Pimentos Padrão",
          "Quiches mistas",
          "Revolto de cogumelos",
        ],
      },
      { title: "Peixe", items: ["Bacalhau à Zé do Pipo", "Bacalhau com broa"] },
      { title: "Carne", items: ["Picanha com feijão preto", "Vitela assada"] },
      { title: "Bebida incluída", items: ["Vinho verde e maduro da casa"] },
      { title: "Sobremesa", items: ["Bolo da casa", "Frutas variadas"] },
      { title: "Café", items: [] },
    ],
  },
];

export const groupMenuTerms = [
  "O menu só é válido para grupos a partir de 10 pessoas, com marcação prévia.",
  "As entradas, prato(s) principais e sobremesas são colocadas no centro da mesa e não servidas individualmente.",
  "A filosofia subjacente ao menu de grupos é permitir ao cliente provar um pouco de tudo, com um serviço rápido e excelente.",
  "O menu escolhido deve ser comunicado com 48 horas de antecedência.",
  "Caso necessário, temos opções vegetarianas.",
  "Se tiver interesse no karaoke, deve comunicar na hora da marcação da reserva.",
  "O serviço encerra às 24h.",
];