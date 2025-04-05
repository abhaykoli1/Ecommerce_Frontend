import { ProductsForSale } from "@/components/shop/LandingPage/productsForSale";
import ButtonComponent from "../../components/common/button";
import CarouselSection from "../../components/shop/LandingPage/carousel";
import React, { Fragment } from "react";
import NewArrivalSection from "@/components/shop/LandingPage/newArrival";
import BrowseByCategory from "@/components/shop/LandingPage/browseByCategory";
import { Services } from "@/components/shop/LandingPage/services";
import HeroSection from "@/components/shop/LandingPage/hero";

export const LandingPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <ProductsForSale />
      <BrowseByCategory />
      <NewArrivalSection />
      <Services />
    </Fragment>
  );
};
