import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Outlit() {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-white">
      <div className="w-full md:w-64 flex-shrink-0 z-50">
        <Navbar />
      </div>
      <div className="flex-1 h-full overflow-y-auto flex flex-col relative z-0">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Outlit;