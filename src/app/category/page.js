"use client";
import PageComponent from "@/components/category/PageComponents";
import { useEffect, useState } from "react";

const page = () => {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const selectCategoryFilter = () => {
    setSelectedCategory([...selectedCategory, category]);
  };

  useEffect(() => {
    selectCategoryFilter();
  }, [category]);
  return <PageComponent />;
};

export default page;
