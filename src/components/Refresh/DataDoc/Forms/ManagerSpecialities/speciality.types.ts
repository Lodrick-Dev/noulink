export type Speciality = {
  id?: string;
  name: string;
  price: number;
  description: string;
  available: boolean;
  image: string;
};

export type SpecialityFormData = {
  name: string;
  price: string;
  description: string;
  image: File | null;
  currentImage: string;
  available: boolean;
};
