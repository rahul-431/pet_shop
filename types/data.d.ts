//for UI
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

// for API data
type CategoryRequest = {
  name: string;
  description?: string;
  image?: string;
  isFeatured?: boolean;
};
type CategoryResponse = {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
};
type ProductRequest = {
  name: string;
  category: Category;
  description?: string;
  mainImage: string;
  additionalImages?: string[];
  price: number;
  discount: number;
  stock: number;
  isFeatured?: boolean;
};

type ProductResponse = {
  _id: string;
  name: string;
  category: CategoryResponse;
  description?: string;
  mainImage: string;
  additionalImages?: string[];
  price: number;
  discount: number;
  stock: number;
  isFeatured: boolean;
  rating: number;
  reviews: ReviewResponse[];
  createdAt: string;
  updatedAt: string;
};
type ReviewRequest = {
  user: string;
  product: string;
  rating: number;
  comment: string;
};
type ReviewResponse = {
  _id: string;
  user: string;
  product: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
};
type CartRequest = {
  user: string;
  items: [
    {
      product: string;
      quantity: number;
    }
  ];
  totalAmount?: number;
};
type CartResponse = {
  user: string;
  items: [
    {
      product: ProductResponse;
      quantity: number;
    }
  ];
  totalAmount: number;
};
type WishlistRequest = {
  userId: string;
  productId: string;
};
type WishlistResponse = {
  _id: string;
  user: string;
  products: ProductResponse[];
};
type OrderRequest = {
  userId: string;
  items: [
    {
      product: string;
      quantity: number;
      price: number;
    }
  ];
  totalAmount: number;
  shippingAddress: Address;
};
type OrderResponse = {
  _id: string;
  user: string;
  items: [
    {
      product: ProductResponse;
      quantity: number;
      price: number;
    }
  ];
  status: string;
  totalAmount: number;
  shippingAddress: Address;
  paymentStatus: string;
  createdAt: string;
  updatedAt: string;
};
type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type UserRegitraion = {
  name: string;
  email: string;
  password: string;
};
type UserLogin = {
  email: string;
  password: string;
};
type UserDetailsRegistraion = {
  address: Address;
  phone: string;
};

type UserResponse = {
  name: string;
  email: string;
  address: Address;
  phone: string;
  isAdmin: boolean;
  onboarded: boolean;
  wishlist: WishlistResponse[];
  cart: CartResponse[];
};
