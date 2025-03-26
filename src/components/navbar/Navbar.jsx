import React from "react";
import { menuLinks } from "../../assets/constant/menuLinks";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
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
              Eshop
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 text-gray-500 dark:text-white
                                hover:text-black duration-200 font-semibold"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* navbar right section */}
          <div className="felx justify-center items-center gap-4">
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
            {/* dark mode section */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
