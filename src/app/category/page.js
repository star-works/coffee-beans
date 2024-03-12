"use client";
import PageComponent from "@/components/category/PageComponents";
import SelectedProvider from "@/components/context/SelectedProvider";
import { useEffect, useState } from "react";

const page = () => {
  return (
    <SelectedProvider>
      <PageComponent />
    </SelectedProvider>
  );
};

export default page;
