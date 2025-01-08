import ProductCard from "@/components/product/ProductCard";
import ProductDetail from "@/components/product/ProductDetail";
import { ProductList } from "@/constants";

const page = () => {
  const data = {
    _id: "101",
    name: "Hoodies",
    rating: 4.5,
    price: 100,
    discount: 20,
    mainImage: "/dog.png",
    otherImages: ["/cat.png", "/bird.png", "/fish.png", "/dog.png"],
    status: "Sale",
    sizes: ["S", "M", "L"],
    colors: ["red", "yellow", "green"],
    quantity: 10,
  };
  return (
    <div className="w-full flex flex-col gap-5 lg:px-12 md:px-6 px-5">
      <div className="max-w-max py-10 mx-auto">
        <ProductDetail data={data} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Related Products
        </h1>
        <div className="grid gap-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full mb-5">
          {ProductList.map((item, index) => (
            <ProductCard key={index} product={item.product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
