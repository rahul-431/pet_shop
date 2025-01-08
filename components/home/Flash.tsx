import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Flash = () => {
  return (
    <div className="my-5 w-full relative py-2 lg:px-12 md:px-6 px-5 md:min-h-[460px] min-h-[520px] bg-pink-100 flex flex-col gap-8  md:gap-0 md:flex-row items-center justify-around">
      <div className="flex flex-col gap-2 justify-center sm:gap-4 lg:gap-8 items-start">
        <p className="text-base md:text-xl text-yellow-600 font-semibold">
          UPTO 40% OFF
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-xs sm:max-w-lg">
          Clearance Sale !!!
        </h1>
        <Link
          href="#"
          className="flex items-center space-x-2 p-2 md:p-4 rounded-md border border-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold tracking-wide"
        >
          <span>Shop Now</span>
          <span>
            <MdOutlineArrowForwardIos />
          </span>
        </Link>
      </div>
      <div className="relative w-80 h-80 lg:w-96 lg:h-96">
        <Image
          src="/dog.png"
          alt="pet image"
          className="z-10 relative"
          layout="fill"
          objectFit="contain"
        />
        <div className="absolute z-0 -bottom-4 opacity-60 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-pink-200" />
      </div>
    </div>
  );
};

export default Flash;
