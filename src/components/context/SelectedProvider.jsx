import { createContext, useContext, useEffect, useState } from "react";

const SelectedContentContext = createContext();
export function useSelectedProvider() {
  return useContext(SelectedContentContext);
}

export default function SelectedProvider({ children }) {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
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
  };

  return (
    <SelectedContentContext.Provider value={value}>
      {children}
    </SelectedContentContext.Provider>
  );
}
