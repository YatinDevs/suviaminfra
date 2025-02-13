import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../pages/Homepage/Navbar";
import Footer from "../pages/Homepage/Footer";
import Whatsapppop from "../components/Popup/Whatsapppop";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="relative ">
        <Outlet />
        <div className="fixed z-50 bottom-8 right-0">
          <Whatsapppop />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
