import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export const AdminLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <section
      className="bg-[rgba(17,24,29,1) bg-whitesmoke overflow-y-auto
 h-[100vh]"
    >
      <AdminHeader sidebar={sidebar} setSidebar={setSidebar} />
      <AdminSidebar sidebar={sidebar} setSidebar={setSidebar} />

      <main
        className={`flex p-5 flex-1 flex-col bg-[rgba(17, 24,29 ,1)]  lg:top-[60px] top-[60px]  absolute right-0 bottom-0  z-0 duration-500 overflow-auto ${
          sidebar ? "lg:left-60 left-0" : "!left-0"
        }`}
      >
        <Outlet />
      </main>
    </section>
  );
};
