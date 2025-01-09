"use client";
import Image from "next/image";
import Ratings from "../shared/Ratings";
import { Button } from "../ui/button";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";
const ProductCard = ({ product }: ProductCardType) => {
  const { mainImage, name, status, price, discount, rating } = product;
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 shadow-md shadow-gray-300 rounded-md">
      <div className="relative w-full h-60 rounded-md bg-gray-200">
        <Image
          src={mainImage}
          alt={`${name}'s image`}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
        {status && (
          <p className="absolute top-4 left-4 p-1 rounded-sm bg-green-500 text-white">
            {status}
          </p>
        )}
        {discount && (
          <p className="absolute top-4 right-4 p-1 rounded-sm bg-red-500 text-white">
            {discount}% Off
          </p>
        )}
      </div>
      <div className="flex justify-between items-start p-2">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">{name}</h1>
          <Ratings rating={rating} />
          <p className="text-lg font-semibold">${price}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            size="sm"
            className="border bg-transparent text-black hover:text-white border-yellow-600 hover:bg-yellow-600"
          >
            <FaHeart />
          </Button>
          <Button
            size="sm"
            className="border bg-transparent text-black hover:text-white border-yellow-600 hover:bg-yellow-600"
          >
            <FaCartPlus />
          </Button>
          <Button
            onClick={() => router.push("/product/123")}
            size="sm"
            className="border bg-transparent text-black hover:text-white border-yellow-600 hover:bg-yellow-600"
          >
            <MdOutlineArrowForwardIos />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
