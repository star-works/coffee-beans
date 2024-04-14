"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../common/Header";
import "../../../app/dashboard.css";

const DashboardLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth < 768) {
        setShowNav(false);
      }
    }
  }, [showNav]);
  return (
    <div className="inter_font bg-[#F9FAFB]">
      <div className="flex items-start ">
        <Sidebar setShowNav={setShowNav} showNav={showNav} />
        <div className="w-full">
          <Header showNav={showNav} />
          <div className="md:p-8 sm:p-6 xs:p-4 px-2 py-2 overflow-auto custom_height bg-[#F9FAFB]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
