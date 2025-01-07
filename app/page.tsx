import { Hero } from "@/components/home/Hero";
import ShopList from "@/components/home/ShopList";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-2 md:mt-5">
      <Hero />
      <ShopList/>
    </div>
  );
}
