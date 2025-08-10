import axios from "axios";
export async function editProduct(item, id) {
  const API = "https://fakestoreapi.com/products";

  try {
    const res = await axios.put(`${API}/${id}`, item);
    console.log(res);
    return alert(`product ${res.data.title} has been updated successfully`);
  } catch (error) {
    console.log(error);
  }
}
