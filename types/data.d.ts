type ProductCardDetails = {
  data: {
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
};

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
type ListType = {
  title: string;
  link: string;
  which?: string;
  buttonLabel?: string;
  data: (ProductCardType | BlogType)[];
};

type BlogType = {
  blog: {
    _id: string;
    author: string;
    image: string;
    title: string;
    createdAt: string;
    text: string;
  };
};
