import Flash from "@/components/home/Flash";
import { Hero } from "@/components/home/Hero";
import Quotes from "@/components/home/Quotes";
import ShopList from "@/components/home/ShopList";
import ProductList from "@/components/product/ProductList";
import { AllProductList, DemoProductList } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-2 md:mt-5">
      <Hero />
      <ShopList />
      <div className="flex flex-col w-full gap-5">
        {AllProductList.map((item, index) => (
          <ProductList
            key={index}
            data={item.data}
            title={item.title}
            shopLink={item.shopLink}
          />
        ))}
      </div>
      <Flash />
      <Quotes />
      <ProductList
        data={DemoProductList}
        title="Best Selling Products"
        shopLink="#"
      />
    </div>
  );
}
