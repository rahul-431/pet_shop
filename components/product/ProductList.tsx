import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ProductCard from "./ProductCard";
import BlogCard from "../blog/BlogCard";

const List = ({ title, data, link, buttonLabel, which }: ListType) => {
  const isProductCardType = (item: any): item is ProductCardType =>
    (item as ProductCardType).product !== undefined;
  const isBlogType = (item: any): item is BlogType =>
    (item as BlogType).blog !== undefined;
  return (
    <div className="w-full flex flex-col my-4 lg:px-12 md:px-6 px-5 gap-6 sm:gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
          {title}
        </h1>
        <Link
          href={link}
          className="flex items-center space-x-2 p-1 sm:p-2 md:p-4 rounded-md border border-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold tracking-wide"
        >
          <span>{buttonLabel ? buttonLabel : "Shop Now"}</span>
          <span>
            <MdOutlineArrowForwardIos />
          </span>
        </Link>
      </div>
      <div
        className={`grid ${
          !which
            ? "gap-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            : " gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
        }  w-full mb-5`}
      >
        {data.map((item, index) => {
          if (!which && isProductCardType(item)) {
            return <ProductCard key={index} product={item.product} />;
          }
          if (isBlogType(item)) {
            return <BlogCard key={index} blog={item.blog} />;
          }
          return null; // Fallback for unexpected types
        })}
      </div>
    </div>
  );
};

export default List;
