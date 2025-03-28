import React from "react";
import Button from "../shared/Button";
import img1 from "../../assets/category/speaker.png";
import img2 from "../../assets/category/gaming.png";
import img3 from "../../assets/category/vr.png";

const Category = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100
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
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={img2}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70
            text-white rounded-3xl relative h-[300px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Ejoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img src={img3} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* third col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
            text-white rounded-3xl relative h-[300px] flex items-start"
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
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={img1}
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
