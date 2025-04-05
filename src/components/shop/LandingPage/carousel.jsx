import { useState, useEffect } from "react";
import image from "../../../assets/side.webp";
import image2 from "../../../assets/images/page2.jpg";
import slide1 from "../../../assets/images/slide1.png";
import slide2 from "../../../assets/images/slide2.png";
import slide3 from "../../../assets/images/slide3.jpg";

function CarouselSection() {
  const posters = [
    {
      image: slide1,
      title: "Spring Collection 2023",
      description: "Discover our vibrant and trendy spring collection.",
      tagline: "Style That Blossoms",
      posterUrl: "/collections/spring-2023",
    },
    {
      image: slide2,
      title: "Summer Essentials",
      description: "Cool, breathable outfits perfect for sunny days.",
      tagline: "Summer Vibes, Perfect Style",
      posterUrl: "/collections/summer-essentials",
    },
    {
      image: slide3,
      title: "Winter Warmth",
      description: "Stay cozy and stylish with our winter collection.",
      tagline: "Warmth Meets Elegance",
      posterUrl: "/collections/winter-warmth",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="home" className="hero-block py-16 overflow-hidden">
      <div className="relative w-full">
        <div>
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posters.map((item, index) => (
              <div
                key={index}
                className="min-w-full h-auto text-white flex-shrink-0 overflow-hidden"
              >
                <div className="relative flex flex-col items-center justify-center">
                  {/* Responsive image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-auto h-[400p sm:h-[500px] md:h-[600px lg:h-[700px object-cove bg-cente"
                  />
                  <div className="absolute text-center bottom-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 px-6 text-center mb-4 text-sm sm:text-base md:text-lg">
                      {item.description}
                    </p>
                    <h3 className="text-md sm:text-lg md:text-xl text-blue-400 mb-4">
                      {item.tagline}
                    </h3>
                    <a
                      href={item.posterUrl}
                      className="mt-4 px-4 py-2 sm:px-6 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Explore Collection
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 sm:p-3 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#9664;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 sm:p-3 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
}

export default CarouselSection;
