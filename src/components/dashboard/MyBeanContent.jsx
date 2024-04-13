"use client";
import React, { useState } from "react";
import MyBean from "./MyBean";
import ProductPreview from "./ProductReview";
import AddBeanForm from "./AddBeanForm";

const MyBeanContent = () => {
  const [addBean, setAddBean] = useState(false);

  return (
    <div>
      {addBean ? <ProductPreview /> : <MyBean setAddBean={setAddBean} />}
      <AddBeanForm/>
    </div>
  );
};

export default MyBeanContent;
