"use client";
import Image from "next/image";
import Link from "next/link";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { LuUserCog } from "react-icons/lu";

const AdminSidebarLinks = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: <RiDashboardHorizontalFill />,
  },
  {
    href: "/admin/products",
    label: "Product",
    icon: <AiOutlineProduct />,
  },
  {
    href: "/admin/category",
    label: "Category",
    icon: <MdOutlineCategory />,
  },
  {
    href: "/admin/order",
    label: "Order",
    icon: <FaCartArrowDown />,
  },
  {
    href: "/admin/blog",
    label: "Blog",
    icon: <TbBrandBlogger />,
  },

  {
    href: "/admin/customer",
    label: "Customer",
    icon: <FiUsers />,
  },
  {
    href: "/admin/user",
    label: "User",
    icon: <LuUserCog />,
  },
];
const AppSidebar = () => {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <div
      className={`${
        open ? "px-4" : "px-6"
      } w-fit flex flex-col gap-5 items-center border-r border-gray-300`}
    >
      <div className="flex gap-1 items-center">
        <Image
          src="/waggy_logo.png"
          alt="logo image"
          width={open ? 48 : 60}
          height={open ? 48 : 60}
        />
        <div className={`${open ? "hidden" : "flex"} flex-col`}>
          <h1 className="text-2xl font-light">Waggy</h1>
          <p className=" text-base text-gray-600 font-normal">Pet Shop</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {AdminSidebarLinks.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`${
                isActive && "bg-green-200"
              } flex gap-2 items-center text-lg ${
                open ? "p-2" : "px-6 py-2"
              } rounded-md hover:bg-green-200`}
            >
              <span className={`${open ? "text-2xl" : "text-xl"}`}>
                {item.icon}
              </span>
              <span className={`${open ? "hidden" : "inline-block"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AppSidebar;
