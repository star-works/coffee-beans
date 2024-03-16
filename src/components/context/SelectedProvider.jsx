"use client";
import { createContext, useContext, useEffect, useState } from "react";

const SelectedContentContext = createContext();
export function useSelectedProvider() {
  return useContext(SelectedContentContext);
}

export default function SelectedProvider({ children }) {
  const [roastLevel, setRoastLevel] = useState();
  const [coffeeNotes, setCoffeeNotes] = useState();
  const [beanSort, setBeanSort] = useState([]);
  const [category, setCategory] = useState();
  const [beanOrigin, setBeanOrigin] = useState();
  const [coffeeType, setCoffeeType] = useState();
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [roasterLocation, setRoasterLocation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [subscription, setSubscription] = useState();
  const selectCategoryFilter = () => {
    category !== "" ? setSelectedCategory([...selectedCategory, category]) : [];
  };
  const removeHandler = (index) => {
    const newArr = selectedCategory.filter((_, i) => i !== index);
    setSelectedCategory(newArr);
  };
  useEffect(() => {
    selectCategoryFilter();
  }, [category]);
  const value = {
    setCategory,
    selectedCategory,
    selectCategoryFilter,
    removeHandler,
    category,
    roastLevel,
    setRoastLevel,
    coffeeNotes,
    setCoffeeNotes,
    beanSort,
    setBeanSort,
    beanOrigin,
    setBeanOrigin,
    coffeeType,
    setCoffeeType,
    roasterLocation,
    setRoasterLocation,
    certifications,
    setCertifications,
    subscription,
    setSubscription,
  };

  return (
    <SelectedContentContext.Provider value={value}>
      {children}
    </SelectedContentContext.Provider>
  );
}
