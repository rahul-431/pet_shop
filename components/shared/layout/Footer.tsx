import { FooterQuickLinks, HelpCenterLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPinterestP,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const SocialMediaLinks = [
    {
      href: "#",
      icon: <FaFacebookF />,
    },
    {
      href: "#",
      icon: <FaTwitter />,
    },
    {
      href: "#",
      icon: <FaPinterestP />,
    },
    {
      href: "#",
      icon: <FaInstagram />,
    },
    {
      href: "#",
      icon: <FaYoutube />,
    },
  ];

  return (
    <div className=" flex flex-col gap-2">
      <div className="py-5 flex lg:flex-row flex-col items-start justify-center lg:justify-between gap-5 sm:gap-10">
        <div className="w-full flex sm:flex-row flex-col gap-5 px-4 sm:px-0 justify-around">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center cursor-pointer">
              <Image
                src="/waggy_logo.png"
                alt="logo image"
                width={80}
                height={80}
              />
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-light">Waggy</h1>
                <p className=" text-base md:text-lg text-gray-500 font-normal">
                  Pet Shop
                </p>
              </div>
            </div>
            <p className="max-w-60 text-gray-500">
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <div className="flex items-center justify-between max-w-60">
              {SocialMediaLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="p-2 border rounded-full border-yellow-500 text-gray-500 hover:bg-yellow-500 hover:text-white"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
              Quick Links
            </h1>
            <ul className="space-y-1 sm:space-y-2 flex flex-col">
              {FooterQuickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-yellow-600"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex lg:flex-row sm:flex-row-reverse flex-col gap-5 px-4 sm:px-0 sm:justify-around">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
              Help Center
            </h1>
            <ul className="space-y-1 sm:space-y-2 flex flex-col">
              {HelpCenterLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-yellow-600"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
              Our NewsLetter
            </h1>
            <p className="max-w-60">
              Subscribe to our newsletter to get updates about our grand offers
            </p>
            <div className="flex items-center justify-between border rounded-full px-2 md:px-4 border-gray-400">
              <input
                type="text"
                className="p-1 md:p-3 rounded-2xl outline-none"
                placeholder="Enter your email"
              />
              <button className="text-yellow-300 hover:text-yellow-400 text-xl p-2">
                <FaLocationArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex sm:flex-row flex-col gap-2 items-center justify-between my-4 lg:px-12 md:px-6 px-5">
        <h1 className="space-x-1 flex items-center">
          <span>
            <FaRegCopyright />
          </span>
          <span>2025 Waggy. All rights are reserved.</span>
        </h1>
        <Link href="https://rahulmijar.vercel.app/#/projects" target="_blank">
          Developed by Rahul Mijar
        </Link>
      </div>
    </div>
  );
};

export default Footer;
