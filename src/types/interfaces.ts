export interface NavBarInterface {
    title: string,
    url: string
}
export interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
  }
export interface Event {
    id:string,
    title:string,
    description:string,
    img:string,
}

export enum ImgMarquee {
    BASE = 'https://github.com/user-attachments/assets/814e1ba2-c98d-457d-866f-5f19af848a33',
    OPTIMISM = 'https://github.com/user-attachments/assets/284fddba-dfd1-4c88-9604-52b3432064cb',
    ETH = "https://github.com/user-attachments/assets/ef8d0ebd-67d9-4d96-a7b6-2fbfea38b57e"
}

export interface MarqueeInterface {
    title: string,
    description: string,
    img: ImgMarquee
    banner?: string
    slug?: string
}

export interface Ticket {
    title: string;
    price: string;
    image?: string;
    description: string;
    features: string[];
    builderScore?: number | undefined;
    type: string
  }
  
  