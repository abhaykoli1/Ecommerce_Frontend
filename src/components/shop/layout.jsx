import React, { Fragment, useState } from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import Footer from "./footer";

export const ShopLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Fragment className="">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};
