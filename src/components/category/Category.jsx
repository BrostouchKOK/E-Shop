import React from "react";
import Button from "../shared/Button";
import img1 from "../../assets/category/earphone.png";
import img2 from "../../assets/category/watch.png";
import img3 from "../../assets/category/macbook.png";

const Category = () => {
  return (
    <div>
      <div className="container mb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70
            text-white rounded-3xl relative h-[300px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Ejoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img src={img1} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90
            text-white rounded-3xl relative h-[300px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white-400">Ejoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="w-[320px] absolute bottom-0 -right-4 lg:top-[40px]"
            />
          </div>
          {/* third col */}
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90
            text-white rounded-3xl relative h-[300px] flex items-center"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white-400">Ejoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={img3}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
