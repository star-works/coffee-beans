"use client";
import CategorySelectedComponent from "@/components/category/CategorySelectedComponent";
import SelectedProvider from "@/components/context/SelectedProvider";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  return (
    <SelectedProvider>
      <CategorySelectedComponent />
    </SelectedProvider>
  );
};

export default CategoryPage;
