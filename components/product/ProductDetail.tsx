"use client";
import Image from "next/image";
import Ratings from "../shared/Ratings";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const ProductDetail = ({ data }: ProductCardDetails) => {
  const {
    name,
    rating,
    price,
    mainImage,
    otherImages,
    sizes,
    colors,
    quantity,
  } = data;
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(mainImage);
  const handleIncrement = () => {
    if (orderQuantity === quantity)
      toast.error("Can not exceed availble quantity");
    setOrderQuantity((prev) => prev + 1);
  };
  const hanleAddToCart = () => {};
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full lg:px-12 md:px-6 px-5">
      <div className="flex flex-col gap-2">
        <div className="relative w-[296px] h-48 md:w-96 md:h-60 lg:w-[424px] lg:h-[340px]">
          <Image
            src={activeImage}
            alt={`${activeImage}'s image`}
            layout="fill"
            objectFit="contain"
            className="relative rounded-md bg-gray-200"
          />
        </div>
        <div className="flex gap-2">
          {otherImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(image)}
              className="cursor-pointer relative w-[80px] sm:w-[100px] h-[80px]"
            >
              <Image
                src={image}
                alt="other image"
                layout="fill"
                objectFit="contain"
                className={`${
                  activeImage === image && "border border-yellow-500"
                } relative rounded-md bg-gray-200`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {name}
          </h1>
          <Ratings rating={rating} />
          <h1 className="text-lg sm:text-xl font-semibold">${price}</h1>
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1>Available Sizes</h1>
            <div className="flex gap-2">
              {sizes.map((item, index) => (
                <p
                  className="w-10 text-center p-2 border border-gray-300 rounded-md"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Avaialble colors</h1>
            <div className="flex gap-2">
              {colors.map((item, index) => (
                <p
                  className={`w-5 h-5 bg-${item}-600 rounded-full`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <p>
            {quantity > 1 ? "Only" : "Last"} {quantity} left, Make it yours!
          </p>
          <div className="flex items-center gap-5">
            <div className="py-2 px-4 flex items-center gap-4 bg-gray-200 rounded-md">
              <button
                className="text-xl"
                disabled={orderQuantity == 1}
                onClick={() => setOrderQuantity((prev) => prev - 1)}
              >
                <FiMinus />
              </button>
              <p className="text-lg">{orderQuantity}</p>
              <button
                className="text-xl"
                disabled={orderQuantity === quantity}
                onClick={handleIncrement}
              >
                <GoPlus />
              </button>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={hanleAddToCart}
                className="bg-transparent hover:bg-yellow-500 hover:text-white text-black border border-yellow-500"
              >
                <FaCartPlus />
              </Button>
              <Button
                size="sm"
                onClick={hanleAddToCart}
                className="bg-transparent hover:bg-yellow-500 hover:text-white text-black border border-yellow-500"
              >
                <FaHeart />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
