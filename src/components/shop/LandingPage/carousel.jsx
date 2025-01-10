import { useState } from "react";
import { Bike, Trophy, Users } from "lucide-react";

function CarouselSection() {
  const products = [
    {
      image: "../../../assets/side.webp",
      title: "Standard Bike Rental",
      description: "Affordable and reliable bike rental for everyday needs.",
      icon: <Bike />,
      price: 29.99,
      availableSizes: ["S", "M", "L", "XL"],
      availableColors: ["White", "Blue", "Black"],
      categories: ["Shirts", "Casual"],
      rating: 4.6,
      reviews: 350,
      productUrl: "/products/standard-bike-rental",
      discount: 10,
      material: "Metal Frame",
      brand: "TurboRides",
    },
    {
      image: "./assets/premium-bike.jpg",
      title: "Premium Bike Rental",
      description: "Premium bikes for a smoother and faster ride.",
      icon: <Trophy />,
      price: 149.99,
      availableSizes: ["M", "L", "XL", "XXL"],
      availableColors: ["Black", "Brown"],
      categories: ["Jackets", "Outerwear"],
      rating: 4.8,
      reviews: 120,
      productUrl: "/products/premium-bike-rental",
      discount: 15,
      material: "Aluminum Frame",
      brand: "TurboRides Premium",
    },
    {
      image: "./assets/group-rentals.jpg",
      title: "Group Rentals",
      description: "Great discounts for group bike rentals.",
      icon: <Users />,
      price: 49.99,
      availableSizes: ["S", "M", "L", "XL"],
      availableColors: ["Gray", "Black", "Navy"],
      categories: ["Pants", "Sportswear"],
      rating: 4.7,
      reviews: 200,
      productUrl: "/products/group-rentals",
      discount: 5,
      material: "Steel Frame",
      brand: "TurboRides Group",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="hom" className="hero-block py-16 bg-gray-900 mt-20">
      <h1 className="text-center text-orange-500 font-extrabold text-3xl mb-8">
        Products We Provide
      </h1>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((item, index) => (
              <div
                key={index}
                className="min-w-full h-auto flex-shrink-0 bg-gray-800 text-white p-4 rounded-lg"
              >
                <div className="relative h-full flex flex-col items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />

                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-300 px-6 text-center mb-4">
                    {item.description}
                  </p>
                  <div className="text-xl font-semibold mb-2">
                    $
                    {item.discount > 0
                      ? (item.price * (1 - item.discount / 100)).toFixed(2)
                      : item.price.toFixed(2)}
                    {item.discount > 0 && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${item.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="mb-2">
                    <strong>Available Sizes:</strong>{" "}
                    {item.availableSizes.join(", ")}
                  </div>
                  <div className="mb-2">
                    <strong>Available Colors:</strong>{" "}
                    {item.availableColors.join(", ")}
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">
                      {"★".repeat(Math.round(item.rating))}
                      {"☆".repeat(5 - Math.round(item.rating))}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                    <strong>Brand:</strong> {item.brand} <br />
                    <strong>Material:</strong> {item.material}
                  </div>
                  <a
                    href={item.productUrl}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#9664;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
}

export default CarouselSection;
