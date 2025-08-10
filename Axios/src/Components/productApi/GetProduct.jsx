import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteProduct } from "./Delete";

export function GetProduct({ updateProduct }) {
  const [data, setData] = useState([]);

  const API = "https://fakestoreapi.com/products";

  async function getproduct() {
    try {
      const res = await axios.get(API);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <section>
        <div className="container p-0 mx-auto border ">
          <div className="row g-2">
            {data.map((item) => (
              <div className="col-3" key={item.id}>
                <div className="rounded-2 ps-2 card h-100 d-flex flex-column">
                  <div
                    className="mb-3 w-100 d-flex align-items-center justify-content-center"
                    style={{ height: "25rem" }}
                  >
                    <img
                      className="w-100 h-100 object-fit-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <h3 className="pb-4">{item.title}</h3>
                  <p className="pb-4">{item.category}</p>
                  <p>{item.price}</p>

                  <div className="mt-auto pb-4 d-flex justify-content-around">
                    <button
                      onClick={() => updateProduct(item)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => DeleteProduct(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
