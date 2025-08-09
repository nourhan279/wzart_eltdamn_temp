import axios from "axios";
import { useEffect } from "react";

export async function AddProduct(data) {
  const API = "https://fakestoreapi.com/products";

  try {
    const res = await axios.post(API, data);
    console.log(res);
    return alert(`product ${res.data.title} has been added successfully`);
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    Addproduct(data);
  }, []);
}
