import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddForm } from "./Components/AddForm/AddForm";
import { GetProduct } from "./Components/productApi/GetProduct";
import { AddProduct } from "./Components/productApi/AddProduct";

function App() {
  const handleAdd = async (formData) => {
    await AddProduct(formData);
  };

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <GetProduct />
    </>
  );
}

export default App;
