import React from "react";
import { GrDeliver } from "react-icons/gr";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
const ServiceSection = () => {
  const services = [
    {
      title: "Free Delivery",
      description: "Convenient, cost-free delivery for all your pet needs.",
      icon: <GrDeliver />,
    },
    {
      title: "100% Secure Payment",
      description:
        "Trusted, secure payment for a worry-free shopping experience.",
      icon: <RiSecurePaymentLine />,
    },
    {
      title: "Daily Offer",
      description: "Exciting daily deals to save on premium pet products.",
      icon: <MdOutlineLocalOffer />,
    },
    {
      title: "Quality Guarantee",
      description:
        "Assured top-quality products for your beloved pets, always reliable.",
      icon: <LuBadgeCheck />,
    },
  ];
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:px-12 md:px-6 px-5 my-10">
      {services.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 items-center">
          <div className="p-5 w-20 h-20 flex items-center justify-center rounded-full border border-gray-500 text-2xl">
            {item.icon}
          </div>
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
