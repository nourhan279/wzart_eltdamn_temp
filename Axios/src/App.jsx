import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddForm } from "./Components/AddForm/AddForm";
import { GetProduct } from "./Components/productApi/GetProduct";
import { AddProduct } from "./Components/productApi/AddProduct";

function App() {
  const [isedit, setisedit] = useState(null);

  const handleAdd = async (formData) => {
    await AddProduct(formData);
  };

  const updateProduct = (item) => {
    setisedit(item);
  };

  return (
    <>
      <AddForm
        handleAdd={handleAdd}
        isedit={isedit}
        setisedit={setisedit}
        formReset={(reset) => (App.resetForm = reset)}
      />
      <GetProduct updateProduct={updateProduct} />
    </>
  );
}

export default App;
