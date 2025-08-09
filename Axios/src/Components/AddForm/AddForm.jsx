import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../schema/Schema";

export function AddForm({ handleAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    handleAdd(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container border shadow mt-5 w-75 p-5"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            {...register("title", { required: "title required" })}
            type="text"
            className="form-control"
            id="title"
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            {...register("price", { required: "price required" })}
            type="number"
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            {...register("description", { required: "description required" })}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            {...register("image", { required: "image required" })}
            type="file"
            className="form-control"
            id="image"
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>

          <div className="form-check">
            <input
              {...register("category", { required: "Category is required" })}
              className="form-check-input"
              type="radio"
              value="men's clothing"
              id="categoryMen"
            />
            <label className="form-check-label" htmlFor="men's clothing">
              Men's Clothing
            </label>
          </div>

          <div className="form-check">
            <input
              {...register("category", { required: "Category is required" })}
              className="form-check-input"
              type="radio"
              value="women's clothing"
              id="categoryWomen"
            />
            <label className="form-check-label" htmlFor="women's clothing">
              Women's Clothing
            </label>
          </div>

          <div className="form-check">
            <input
              {...register("category", { required: "Category is required" })}
              className="form-check-input"
              type="radio"
              value="jewelery"
              id="jewelery"
            />
            <label className="form-check-label" htmlFor="jewelery">
              Jewelery
            </label>
          </div>

          <div className="form-check">
            <input
              {...register("category", { required: "Category is required" })}
              className="form-check-input"
              type="radio"
              value="electronics"
              id="electronics"
            />
            <label className="form-check-label" htmlFor="electronics">
              Electronics
            </label>
          </div>

          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
