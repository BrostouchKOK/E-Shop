import React from "react";
import { footerLinks } from "../../constant/footerData";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company detail */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold uppercase text-2xl
                    sm:text-3xl tracking-widest"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              quae! Ab!
            </p>
            <p className="mt-3 text-gray-600 lg:pr-24">
              Made wiht 💗 by Brostouch'K
            </p>
          </div>
          {/* Footer links */}
          <div className="grid col-span-2 sm:grid-cols-3 lg:pl-10">
            <div className="py-8 px-4">
              <h1 className="font-bold text-xl sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:dark:text-white/90 duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="font-bold text-xl sm:text-left mb-3">
                Quicks Links
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black hover:dark:text-white/90 duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="font-bold text-xl sm:text-left mb-3">
                Address Links
              </h1>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p className="text-gray-600">Phnom Penh</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p className="text-gray-600">+855969634904</p>
              </div>
              {/* Social link */}
              <div className="  mt-4 flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-blue-600 duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-blue-400 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
