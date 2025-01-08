type ProductCardType = {
  product: {
    mainImage: string;
    name: string;
    status: string;
    price: number;
    discount?: number;
    rating: number;
  };
};
type ProductCardDetails = {
  _id: string;
  name: string;
  rating: number;
  price: number;
  discount?: number;
  mainImage: string;
  otherImages: string[];
  status?: string;
  sizes: string[];
  colors: string[];
  quantity: number;
};
type ProductListType = {
  title: string;
  shopLink: string;
  data: ProductCardType[];
};
