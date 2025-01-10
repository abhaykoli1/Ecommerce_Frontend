import ButtonComponent from "../components/common/button";
import CarouselSection from "../components/shop/LandingPage/carousel";
import React, { Fragment } from "react";
import { jwtDecode } from "jwt-decode";

export const LandingPage = () => {
  // const token = localStorage.getItem("token");
  // if (token) {
  //   // console.log(token)
  //   const decodedToken = jwtDecode(token);
  //   console.log("Decoded Token:", decodedToken);
  // }

  return (
    <Fragment>
      <div>
        <CarouselSection />
        <h2>Flash Sales</h2>
        <ButtonComponent text={"Login"} btnCss={""} />
      </div>
    </Fragment>
  );
};
