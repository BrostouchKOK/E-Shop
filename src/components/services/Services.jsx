import React from "react";
import { serviceData } from "../../constant/servieceData";

const Services = () => {
  return (
    <div>
      <div className="container mt-12 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {serviceData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              <div className="text-4xl md:text-5xl text-primary">
                {data.icon()}
              </div>
              {/* {data.icon()} */}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
