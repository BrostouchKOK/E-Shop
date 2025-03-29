import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div
            className="w-screen h-screen fixed top-0 left-0
          bg-black/50 z-50 backdrop-blur-sm"
          >
            <div
              className="w-[300px] p-4 fixed bg-white top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 shadow-md duration-300
              dark:bg-gray-900 dark:text-white rounded-xl"
            >
              {/* header section */}
              <div className="flex items-center justify-between">
                <h1>Order Now</h1>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={handleOrderPopup}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-3 flex flex-col items-center justify-center">
                <input type="text" placeholder="Name" className="form-input" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
                <div>
                  <Button text={"Order Now"} bgColor={"bg-primary"} textColor={"text-white"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
