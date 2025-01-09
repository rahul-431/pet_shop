import Register from "@/components/form/Register";
import HomeRegister from "@/components/form/Register";
import Flash from "@/components/home/Flash";
import { Hero } from "@/components/home/Hero";
import Quotes from "@/components/home/Quotes";
import ServiceSection from "@/components/home/ServiceSection";
import ShopList from "@/components/home/ShopList";
import List from "@/components/product/ProductList";
import { AllProductList, DemoBlogPosts, DemoProductList } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-2 md:mt-5">
      <Hero />
      <ShopList />
      <div className="flex flex-col w-full gap-5">
        {AllProductList.map((item, index) => (
          <List
            key={index}
            data={item.data}
            title={item.title}
            link={item.shopLink}
          />
        ))}
      </div>
      <Flash />
      <Quotes />
      <List data={DemoProductList} title="Best Selling Products" link="#" />
      <div className="w-full bg-pink-100 py-10 md:py-14">
        <div className="max-w-lg flex flex-col gap-6 mx-auto">
          <div className="font-semibold text-3xl sm:text-4xl md:text-5xl flex flex-col gap-2 items-center">
            <h1>Get 20% Off On</h1>
            <h1 className="text-yellow-600">First Purchase</h1>
          </div>
          <div className="w-80 mx-auto sm:w-full ">
            <Register />
          </div>
        </div>
      </div>
      <List
        data={DemoBlogPosts}
        title="Latest Blog Post"
        link="#"
        buttonLabel="Read All"
        which="blog"
      />
      <ServiceSection />
    </div>
  );
}
