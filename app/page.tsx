import { Hero } from "@/components/home/Hero";
import ShopList from "@/components/home/ShopList";
import ProductList from "@/components/product/ProductList";
import { AllProductList } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-2 md:mt-5">
      <Hero />
      <ShopList />
      <div className="flex flex-col w-full gap-5">
        {AllProductList.map((item, index) => (
          <ProductList
            data={item.data}
            title={item.title}
            shopLink={item.shopLink}
          />
        ))}
      </div>
    </div>
  );
}
