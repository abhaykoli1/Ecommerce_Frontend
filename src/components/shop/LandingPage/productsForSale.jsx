import React from "react";
import { useEffect } from "react";

export const ProductsForSale = () => {
  const products = [
    {
      id: 1,
      image: "https://picsum.photos/150",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 4.5,
      reviews: 88,
    },
    {
      id: 2,
      image: "https://picsum.photos/150",
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.2,
      reviews: 75,
    },
    {
      id: 3,
      image: "https://picsum.photos/150",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.7,
      reviews: 99,
    },
    {
      id: 4,
      image: "https://picsum.photos/150",
      name: "S-Series Gaming Chair",
      price: 375,
      originalPrice: 450,
      discount: 25,
      rating: 4.6,
      reviews: 120,
    },
    {
      id: 5,
      image: "https://picsum.photos/150",
      name: "S-Series Gaming Chair",
      price: 375,
      originalPrice: 450,
      discount: 25,
      rating: 4.6,
      reviews: 120,
    },
  ]; // Countdown Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0)
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return {
            ...prevTime,
            days: days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        clearInterval(interval);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" mx-auto py-14">
      {/* <div className="px-10">
        {" "}
        <h2 className="flex gap-5 items-center font-bold text-xl">
          <span className="w-7 h-10  rounded-md bg-primary"></span>
          Today's
        </h2>
        <div className="flex  items-center mt-4 gap-32  mb-20">
          <h1 className="">Flash Sales</h1>
          <div className="font-bold text-4xl"> 30 : 39 : 20 : 50</div>
        </div>
      </div> */}
      <div className="mb-8 lg:container mx-auto px-5">
        <p className="text-red-500 font-semibold text-sm uppercase">Today's</p>
        <div className="flex  items-center gap-32  mb-10">
          <h1 className="text-4xl font-bold">Flash Sale</h1>
          <div className="font-bold text-4xl"> 30 : 39 : 20 : 50</div>
        </div>
        {/* <h2 className="text-4xl font-bold">New Arrival</h2> */}
      </div>
      {/* <div className="mx-auto w-full "> */}
      <div className="flex xl:container mx-auto HorizontalScroll pt-7 pb-10 gap-5 px-5 ">
        {/* <div className="flex mx-auto w-full overflow-x-auto space-x-4 gap-10 pb-20 "> */}
        {products.map((product) => (
          <div
            key={product.id}
            className={
              "grid bg-white flex-shrink-0 w-[300px] duration-700 transition-all category-card grid-cols-1   relative !rounded-xl overflow-hidden cursor-pointer mx-auto borde"
            }
            //   className="flex-shrink-0 w-[300px] bg-white hover:shadow-2xl duration-500 transition-all rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </div>
            </div>
            <div className="p-4 absolute bottom-0 text-white">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center my-2">
                <div className="text-yellow-400 text-sm">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </div>
                <span className="text-sm text-gray-200 ml-2">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold text-red-500">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-200 line-through ml-2">
                  ${product.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          href="/products"
          className="px-6 py-2  focus:border focus:border-white focus:outline text-white font-bold rounded-lg "
        >
          View All Products
        </button>
      </div>
    </section>
  );
};
