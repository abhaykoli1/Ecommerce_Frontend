import React from "react";
import home from "../../../assets/home.png";
const HeroSection = () => {
  return (
    <section className="h-screen  hero-image bg-cover bg-cente">
      <div className="h-full w-full flex items-center justify-center bg-black/50">
        <h1 className="text-white text-4xl font-bold">Welcome to My Site</h1>
      </div>
    </section>
  );
};

export default HeroSection;
