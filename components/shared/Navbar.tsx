import React from "react";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 lg:px-12 md:px-6 sm:px-4 px-3">
      <Header />
      <hr />
    </div>
  );
};

export default Navbar;
