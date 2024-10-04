import BaseLogo from '../../public/BaseLogo.webp'
import OPLogo from '../../public/OP-Logo.png'
import a from '../../public/EthLogo.png'

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
    BASE = 'https://github.com/user-attachments/assets/5d0523e7-7946-442d-827a-e64cd180f4c9',
    OPTIMISM = "https://github.com/user-attachments/assets/c62366a6-133f-4882-9323-d58a36bf0ae6",
    ETH = "https://github.com/user-attachments/assets/29b09a7a-cdab-419b-9f09-ff863a1706a2"
}

export interface MarqueeInterface {
    title: string,
    description: string,
    img: ImgMarquee
}