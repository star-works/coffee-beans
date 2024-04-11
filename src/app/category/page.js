"use client";
import CategorySelectedComponent from "@/components/category/CategorySelectedComponent";
import Footer from "@/components/common/Footer";
import SelectedProvider from "@/components/context/SelectedProvider";
import { Header } from "@radix-ui/react-accordion";
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
