"use client";
import Image from "next/image";
import Ratings from "../shared/Ratings";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { FaCartPlus, FaHeart } from "react-icons/fa";


const ProductDetail = ({
  _id,
  name,
  rating,
  price,
  discount,
  mainImage,
  otherImages,
  status,
  sizes,
  colors,
  quantity,
}: ProductCardDetails) => {
  const [orderQuantity, setOrderQuantity] = useState<number>(1);
  const handleIncrement = () => {
    if (orderQuantity === quantity)
      toast.error("Can not exceed availble quantity");
    setOrderQuantity((prev) => prev + 1);
  };
  const hanleAddToCart = () => {};
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-2">
        <div className="relative w-full max-w-min max-h-min rounded-md">
          <Image
            src={mainImage}
            alt={`${name}'s image`}
            layout="fill"
            objectFit="cover"
            className="relative"
          />
        </div>
        <div className="flex gap-2">
          {otherImages.map((image, index) => (
            <div key={index} className="relative w-20 h-20 rounded-md">
              <Image
                src={image}
                alt="other image"
                layout="fill"
                objectFit="cover"
                className="relative"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg sm:text-xl font-semibold">{name}</h1>
          <Ratings rating={rating} />
          <h1 className="text-lg sm:text-xl font-semibold">$ {price}</h1>
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1>Available Sizes</h1>
            {sizes.map((item, index) => (
              <p className="p-2 border border-gray-300 rounded-md" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1>Avaialble colors</h1>
            {colors.map((item, index) => (
              <Checkbox color={item} key={index} />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <p>
            {quantity > 1 ? "Only" : "Last"} {quantity} left, Make it yours!
          </p>
          <div className="flex items-center gap-5">
            <div className="py-2 px-4 flex items-center gap-2">
              <button
                disabled={orderQuantity == 1}
                onClick={() => setOrderQuantity((prev) => prev + 1)}
              >
                -
              </button>
              <p>{orderQuantity}</p>
              <button
                disabled={orderQuantity === quantity}
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <Button onClick={hanleAddToCart} className="space-x-1">
              <span> Add to Cart</span>
              <span>
                <FaCartPlus />
              </span>
            </Button>
            <Button onClick={hanleAddToCart} className="space-x-1">
              <span>Add to wishlist</span>
              <span>
                <FaHeart />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
