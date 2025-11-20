export interface HydraCollection<T> {
  "@context": string;
  "@id": string;
  "@type": "hydra:Collection";
  "hydra:member": T[];
  "hydra:totalItems": number;
  "hydra:view"?: unknown;
  "hydra:search"?: unknown;
}

export interface MenuItem {
  "@id": string;
  "@type": "MenuItems";
  id: number;
  name: string;
  slug: string;
  orders: number;
  children: MenuItem[];
  menu: string;
  imageUrl: string;
  description: string;
  rawHtml: string;
  rawMobileHtml: string;
}

export interface Menu {
  "@id": string;
  "@type": "Menu";
  id: number;
  name: string;
  type: string;
  menuItems: MenuItem[];
}

export interface Message {
  name: string;
  date: string;
  message: string;
}
