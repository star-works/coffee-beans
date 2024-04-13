"use client";
import { useState } from "react";
import AddBeanForm from "./AddBeanForm";
import MyBean from "./MyBean";

const MyBeanContent = () => {
  const [addBean, setAddBean] = useState(false);

  return (
    <div>{addBean ? <AddBeanForm /> : <MyBean setAddBean={setAddBean} />}</div>
  );
};

export default MyBeanContent;
