"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../common/Header";
import "../../../app/dashboard.css";
import MiniSidebar from "../MiniSidebar";

const DashboardLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="inter_font bg-[#F9FAFB]">
      <div className="flex items-start transition-all duration-300 ease-in-out">
        <MiniSidebar setShowNav={setShowNav} showNav={showNav} />
        <Sidebar setShowNav={setShowNav} showNav={showNav} />
        <div className="w-full">
          <Header showNav={showNav} />
          <div className="md:p-8 sm:py-4 ps-[60px] pe-3  py-2 overflow-auto custom_height bg-[#F9FAFB]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
