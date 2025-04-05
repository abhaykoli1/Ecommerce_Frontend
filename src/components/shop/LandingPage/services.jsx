import React from "react";

export const Services = () => {
  return (
    <section className="py-20 lg:container mx-auto">
      <div className="flex  lg:flex-row   flex-col justify-between lg:gap-7 gap-14">
        <div className="flex flex-col items-center gap-1 justify-center">
          <div className="h-14 w-14  rounded-full bg-black"></div>
          <h2 className="font-semibold text-pretty">FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center">
          <div className="h-14 w-14 rounded-full bg-black"></div>
          <h2 className="font-semibold text-pretty">FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="gap-1 flex flex-col items-center">
          <div className="h-14 w-14 rounded-full bg-black"></div>
          <h2 className="font-semibold text-pretty">FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>
      </div>
    </section>
  );
};
