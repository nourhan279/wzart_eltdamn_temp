import axios from "axios";
import { useEffect, useState } from "react";

export function GetProduct() {
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
                <div className="rounded-2 ps-2 card h-100">
                  <img
                    className="mb-3"
                    width="300"
                    height="300"
                    src={item.image}
                    alt={item.title}
                  />
                  <h3 className="pb-4">{item.title}</h3>
                  <p className="pb-4">{item.category}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
