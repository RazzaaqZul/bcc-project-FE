import React from "react";
import { logo } from "../../assets";
import Button from "./Button";

import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py-[37px] px-[90px] justify-between items-center navbar bg-dimGreen h-[70px]">
      <ul className="flex  ">
        <img src={logo} alt="FoodLoss" className="sm:w-[150px] h-[48px]" />
      </ul>
      <ul className={`list-none flex  gap-[65px] text-white cursor-pointer `}>
        <li>
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
