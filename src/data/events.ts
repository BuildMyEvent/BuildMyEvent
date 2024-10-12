import { ImgMarquee } from "@/types/interfaces";

export const events = [
  {
    slug: 'base',
    name: 'Base Community Meetup',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s",
    location: 'Centro de Convenciones, Ciudad Tech',
    date: '15-17 de Julio, 2024',
    image: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    logo: ImgMarquee.BASE,
    tickets: [
      {
        title: "Ticket General",
        price: "$6",
        description: "Acceso a todas las charlas y oportunidades de networking en el meetup de Base en Costa Rica.",
        features: [
          "Acceso completo a las charlas",
          "Networking con profesionales"
        ],
        image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
        // image: GeneralTicket
      },
      {
        title: "Ticket VIP",
        price: "$12",
        description: "Acceso premium con beneficios adicionales para una experiencia mejorada en el meetup.",
        features: [
          "Todo lo incluido en Ticket General",
          "Asientos preferenciales",
          "Sesión exclusiva de Q&A"
        ],
        image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75',
        builderScore: 10
      },
      {
        title: "Ticket Premium",
        price: "$20",
        description: "La experiencia más completa con acceso total y beneficios exclusivos.",
        features: [
          "Todo lo incluido en Ticket VIP",
          "Cena con los ponentes",
          "Merchandising exclusivo"
        ],
        image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
        // image: PremiumTicket
      },
    ]
  }
]