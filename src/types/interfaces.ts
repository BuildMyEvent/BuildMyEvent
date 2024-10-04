export interface NavBarInterface {
    title: string,
    url: string
}
export interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
  }
export interface Event {
    id:string,
    title:string,
    description:string,
    img:string,
}

export enum ImgMarquee {
    male = "https://github.com/user-attachments/assets/00c5f17e-17f8-42a3-8e24-4783125216bb",
    female = "https://github.com/user-attachments/assets/931ae195-52e4-42bd-90cf-99018b37034e"
}

export interface MarqueeInterface {
    name: string,
    body: string,
    img: ImgMarquee
}