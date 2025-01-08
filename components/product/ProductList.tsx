import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ProductCard from "./ProductCard";

const ProductList = ({ title, data, shopLink }: ProductListType) => {
  return (
    <div className="w-full flex flex-col my-4 lg:px-12 md:px-6 px-5 gap-6 sm:gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
          {title}
        </h1>
        <Link
          href={shopLink}
          className="flex items-center space-x-2 p-1 sm:p-2 md:p-4 rounded-md bg-yellow-600 hover:bg-yellow-500 text-white font-semibold tracking-wide"
        >
          <span>Shop Now</span>
          <span>
            <MdOutlineArrowForwardIos />
          </span>
        </Link>
      </div>
      <div className="grid gap-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full mb-5">
        {data.map((item, index) => (
          <ProductCard key={index} product={item.product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
