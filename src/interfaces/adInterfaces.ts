export interface IAd {
  id?: string;
  name: string;
  model: string;
  year: string;
  km: number;
  fuel_type: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  images: any;
  ad_status: string;
  user: {
    id: string;
    name: string;
    description: string;
  };
  comments: {
    id: string;
    text: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
      profile_image: string;
    };
  }[];
}

export interface IKar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
