import Link from "next/link";
import { FaCat, FaDog } from "react-icons/fa";
import { IoFish } from "react-icons/io5";
import { LuBird } from "react-icons/lu";
import { PiBowlFoodBold } from "react-icons/pi";
const ShopList = () => {
  const list = [
    {
      href: "#",
      icon: <FaDog size={60} />,
      label: "Dog Shop",
    },
    {
      href: "#",
      icon: <FaCat size={60} />,
      label: "Cat Shop",
    },
    {
      href: "#",
      icon: <IoFish size={60} />,
      label: "Fish Shop",
    },
    {
      href: "#",
      icon: <LuBird size={60} />,
      label: "Bird Shop",
    },
    {
      href: "#",
      icon: <PiBowlFoodBold size={60} />,
      label: "Foodies",
    },
  ];
  return (
    <div className="my-10 px-4 sm:my-16 flex flex-wrap items-center gap-4 justify-around w-full">
      {list.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex flex-col gap-2 items-center text-yellow-300 hover:text-yellow-400"
        >
          {item.icon}
          <h1 className="text-lg text-black">{item.label}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ShopList;
