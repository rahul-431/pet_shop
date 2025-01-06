import Link from "next/link";
import { SelectComp } from "../Select";
import { FaCartPlus, FaHeart, FaUser } from "react-icons/fa";
import { Categories, NavLinks, Pages } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className=" flex flex-col-reverse gap-3 sm:flex-row md:items-center justify-between">
      <div className="w-full sm:w-[180px] md:w-[200px]">
        <SelectComp
          label="Categories"
          placeholder="Shop by Category"
          items={Categories}
        />
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-10 text-lg text-gray-600">
        {NavLinks.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-yellow-600">
            {item.label}
          </Link>
        ))}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-transparent text-lg font-light">
                Pages
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col gap-4 p-4 ">
                  {Pages.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="hover:text-yellow-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Sheet>
          <SheetTrigger className="md:hidden text-xl p-2 hover:bg-gray-300">
            <FaBarsStaggered />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[200px] place-items-start pt-10"
          >
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription />
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4 text-lg text-gray-600">
              {NavLinks.map((item, index) => (
                <SheetClose asChild key={index}>
                  <Link href={item.href} className="hover:text-yellow-600">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4 md:gap-8 text-xl">
          <Link href="#">
            <FaUser />
          </Link>
          <Link href="#">
            <FaHeart />
          </Link>
          <Link href="#">
            <FaCartPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
