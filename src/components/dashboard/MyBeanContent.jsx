"use client";
import React, { useState } from "react";
import MyBean from "./MyBean";
import ProductPreview from "./ProductReview";
import AddBeanForm from "./AddBeanForm";
import BeanDetails from "./BeanDetails";

const MyBeanContent = () => {
  const [addBean, setAddBean] = useState(false);

  return (
    <div>
      {addBean ? (
        <AddBeanForm  />
      ) : (
        <MyBean setAddBean={setAddBean} />
      )}
    </div>
  );
};

export default MyBeanContent;
