import axios from "axios";
import { useEffect } from "react";

export async function DeleteProduct(id) {
  const API = "https://fakestoreapi.com/products";

  try {
    const res = await axios.delete(`${API}/${id}`);
    console.log(res);
    return alert(`product ${res.data.title} has been delete successfully`);
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    DeleteProduct(id);
  }, []);
}
