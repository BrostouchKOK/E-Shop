import React from "react";
import { menuLinks } from "../../constant/menuLinks";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { dropDownLinks } from "../../constant/dropDownLinks";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
        duration-200 relative z-40"
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* logo and links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold uppercase text-2xl
                    sm:text-3xl tracking-widest"
            >
              KBT-Eshop
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 text-gray-500 dark:text-gray-500 dark:hover:text-white
                                hover:text-black duration-200 font-semibold"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* dropDown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold
                    text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div
                    className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md
                    bg-white shadow-md p-2 dark:bg-gray-900 dark:text-white"
                  >
                    <ul className="space-y-2">
                      {dropDownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="inline-block text-gray-500
                            dark:hover:text-white duration-200 hover:bg-primary/20 w-full rounded-md py-1 px-2"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* search bar section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl text-gray-600 dark:text-gray-400
                    absolute top-1/2 -translate-y-1/2
                    right-3 group-hover:text-primary duration-200"
              />
            </div>
            {/* order button section */}
            <button className="relative p-3">
              <FaShoppingCart onClick={handleOrderPopup} className="text-xl text-gray-600 dark:text-gray-400" />
              <div
                className="w-4 h-4 bg-red-500 text-white rounded-full
                absolute top-0 right-0 flex justify-center items-center text-xs"
              >
                4
              </div>
            </button>
            {/* dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
