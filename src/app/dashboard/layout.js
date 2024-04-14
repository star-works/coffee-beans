"use client";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import "../dashboard.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth > 768) {
        setShowNav(true);
      }
    }
  }, [showNav]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="inter_font bg-[#F9FAFB]">
        <div className="flex items-start ">
          <Sidebar setShowNav={setShowNav} showNav={showNav} />
          <div className="w-full">
            <Header showNav={showNav} />
            <div className="sm:p-8 xs:p-5 p-4 overflow-auto custom_height bg-[#F9FAFB]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
