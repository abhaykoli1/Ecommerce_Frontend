// import Frame1 from "../../../assets/Frame1.png";
// import Frame2 from "../../../assets/Frame2.png";
// import Frame3 from "../../../assets/Frame3.png";

// function NewArrivalSection() {
//   const products = [
//     {
//       id: 1,
//       image: Frame1,
//       title: "PlayStation 5",
//       description: "Black and White version of the PS5 coming out on sale.",
//       url: "/shop/playstation-5",
//     },
//     {
//       id: 2,
//       image: Frame2,
//       title: "Women's Collections",
//       description: "Featured women collections that give you another vibe.",
//       url: "/shop/womens-collections",
//     },
//     {
//       id: 3,
//       image: Frame3,
//       title: "Speakers",
//       description: "Amazon wireless speakers.",
//       url: "/shop/speakers",
//     },
//     {
//       id: 4,
//       image: Frame3,
//       title: "Perfume",
//       description: "GUCCI INTENSE OUD EDP.",
//       url: "/shop/perfume",
//     },
//   ];

//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-6">New Arrival</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Large Featured Item */}
//           <div className="md:col-span-2">
//             <div className="relative rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src={products[0].image}
//                 alt={products[0].title}
//                 className="w-full h object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {products[0].title}
//                 </h3>
//                 <p className="text-gray-200 mb-4">{products[0].description}</p>
//                 <a
//                   href={products[0].url}
//                   className="inline-block px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100"
//                 >
//                   Shop Now
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="md:col-span-2">
//             <div className="md:col-span-2">
//               <div className="relative rounded-lg overflow-hidden shadow-lg">
//                 <img
//                   src={products[1].image}
//                   alt={products[1].title}
//                   className="w-full h object-cover"
//                 />
//                 {/* <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {products[1].title}
//                 </h3>
//                 <p className="text-gray-200 mb-4">{products[1].description}</p>
//                 <a
//                   href={products[1].url}
//                   className="inline-block px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100"
//                 >
//                   Shop Now
//                 </a>
//               </div> */}
//               </div>
//             </div>
//             <div className="flex md:col-span-2 h-full gap-4 mt-5">
//               <div className="w-full h-full">
//                 <div className="relative rounded-lg overflow-hidden ">
//                   <img
//                     src={products[2].image}
//                     alt={products[2].title}
//                     className="w-full h-full object-cover "
//                   />
//                   {/* <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {products[1].title}
//                 </h3>
//                 <p className="text-gray-200 mb-4">{products[1].description}</p>
//                 <a
//                   href={products[1].url}
//                   className="inline-block px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100"
//                 >
//                   Shop Now
//                 </a>
//               </div> */}
//                 </div>
//               </div>
//               <div className="w-full h-full">
//                 <div className="relative rounded-lg overflow-hidden">
//                   <img
//                     src={products[2].image}
//                     alt={products[2].title}
//                     className="w-full h-full object-cover "
//                   />
//                   {/* <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {products[1].title}
//                 </h3>
//                 <p className="text-gray-200 mb-4">{products[1].description}</p>
//                 <a
//                   href={products[1].url}
//                   className="inline-block px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-100"
//                 >
//                   Shop Now
//                 </a>
//               </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default NewArrivalSection;

import Frame1 from "../../../assets/Frame1.png";
import Frame2 from "../../../assets/Frame2.png";
import Frame3 from "../../../assets/Frame3.png";

function NewArrivalSection() {
  const products = [
    {
      id: 1,
      image: Frame1,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      url: "/shop/playstation-5",
    },
    {
      id: 2,
      image: Frame2,
      title: "Women's Collections",
      description: "Featured women collections that give you another vibe.",
      url: "/shop/womens-collections",
    },
    {
      id: 3,
      image: Frame3,
      title: "Speakers",
      description: "Amazon wireless speakers.",
      url: "/shop/speakers",
    },
    {
      id: 4,
      image: Frame3,
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP.",
      url: "/shop/perfume",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-red-500 font-semibold text-sm uppercase">
            Featured
          </p>
          <h1 className="text-4xl font-bold">New Arrival</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Product */}
          <div className="md:col-span-2 hover:shadow-[0px_40px_50px_-10px_rgba(0,0,0,0.3),_10px_20px_20px_-10px_rgba(0,0,0,0.5)] hover:scale-[105%] duration-500 transition-all bg-white rounded-lg">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={products[0].image}
                alt={products[0].title}
                className="w-full ] object-cover"
              />
            </div>
          </div>

          {/* Secondary Product */}
          <div className="md:col-span-2 ">
            <div className="relative overflow-hidden rounded-lg hover:shadow-[0px_40px_50px_-10px_rgba(0,0,0,0.3),_10px_20px_20px_-10px_rgba(0,0,0,0.5)] hover:scale-[105%] duration-500 transition-all">
              <img
                src={products[1].image}
                alt={products[1].title}
                className="w-full  object-cover"
              />
            </div>
            {/* Small Cards */}
            <div className="md:col-span-2 flex w-full mt-6 gap-5">
              <div className="w-full">
                <div className="relative overflow-hidden rounded-lg hover:shadow-[0px_40px_50px_-10px_rgba(0,0,0,0.3),_10px_20px_20px_-10px_rgba(0,0,0,0.5)] hover:scale-[105%] duration-500 transition-all">
                  <img
                    src={products[2].image}
                    alt={products[2].title}
                    className="w-full  object-cover"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="relative overflow-hidden rounded-lg hover:shadow-[0px_40px_50px_-10px_rgba(0,0,0,0.3),_10px_20px_20px_-10px_rgba(0,0,0,0.5)] hover:scale-[105%] duration-500 transition-all">
                  <img
                    src={products[2].image}
                    alt={products[2].title}
                    className="w-full  object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div
              key={product.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[200px] object-cover"
              />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default NewArrivalSection;
