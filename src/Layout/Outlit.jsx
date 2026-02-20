import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Outlit() {
  return (
    <div className="flex">
      <div className="w-2/10 h-screen max-h-screen">
        <Navbar />
      </div>
      <div className="w-8/10 h-screen overflow-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Outlit;
