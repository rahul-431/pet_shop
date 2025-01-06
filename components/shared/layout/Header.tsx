"use client";

import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    //for large screen
    <div className="flex items-center justify-between">
      <div className="flex gap-1 items-center cursor-pointer">
        <Image src="/waggy_logo.png" alt="logo image" width={80} height={80} />
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl font-light">Waggy</h1>
          <p className=" text-base md:text-lg text-gray-600 font-normal">
            Pet Shop
          </p>
        </div>
      </div>
      <div className="hidden lg:flex border border-gray-400 rounded-md p-2 h-14 lg:w-96 md:w-80 sm:w-48 items-center justify-between">
        <input
          type="text"
          className="outline-none p-1 md:text-lg text-base"
          placeholder="Search products"
        />
        <button>
          <Search color="gray" />
        </button>
      </div>
      <div className="flex items-center lg:gap-6 md:gap-4 gap-2">
        <div className="hidden md:flex flex-col">
          <h1 className="text-base sm:text-lg text-gray-600">Phone</h1>
          <p className="text-lg sm:text-xl text-gray-700">+977 9865410868</p>
        </div>
        <div className="flex flex-col items-end md:items-start">
          <h1 className="text-base sm:text-lg text-gray-600">Email</h1>
          <p className="text-lg sm:text-xl text-gray-700">Waggy@shop.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
