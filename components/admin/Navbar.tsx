"use client";
import React from "react";
import { Button } from "../ui/button";
import { useSidebar } from "@/context/SidebarContext";
import { BsLayoutSidebar } from "react-icons/bs";
import Link from "next/link";
import { MdOutlineNotifications } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LuUserCog } from "react-icons/lu";

const Navbar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <div className="w-full flex items-center justify-between">
      <Button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 text-black hover:bg-gray-300"
      >
        <BsLayoutSidebar />
      </Button>
      <div className="flex gap-5 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-gray-300 hover:bg-gray-400">
                <LuUserCog />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col gap-4 p-4 ">
                  <Link
                    // key={index}
                    href="#"
                    className="hover:text-yellow-600"
                  >
                    My Account
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="#" className="text-2xl">
          <MdOutlineNotifications />
        </Link>
        <button className="text-2xl">
          <TbLogout />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
