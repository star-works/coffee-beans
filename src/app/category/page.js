"use client";
import CategorySelectedComponent from "@/components/category/CategorySelectedComponent";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SelectedProvider from "@/components/context/SelectedProvider";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  return (
    <SelectedProvider>
      <Header />
      <CategorySelectedComponent /> <Footer />
    </SelectedProvider>
  );
};

export default CategoryPage;
