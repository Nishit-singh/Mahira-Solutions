
export enum BusinessVertical {
  PRINTING = 'PRINTING',
  METAL = 'METAL'
}

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  vertical: BusinessVertical;
  category: string;
  imageUrl: string;
  galleryUrls?: string[];
  badges?: string[];
  specs: Specification[];
  applications?: string[]; // target industries/use cases
}

export interface Category {
  id: string;
  title: string;
  vertical: BusinessVertical;
  description: string;
  imageUrl: string;
}
