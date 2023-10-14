import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [item, setItem] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    currency: "BDT",
    quantity: "",
    images: "",
    seller: {
      name: "",
      rating: "",
    },
    attributes: [
      {
        name: "",
        value: "",
      },
    ],
    shippingInfo: {
      deliveryTime: "",
      shippingCost: "",
    },
  });

  const handleAttributeChange = (index, field, value) => {
    const updatedAttributes = [...item.attributes];
    updatedAttributes[index][field] = value;
    setItem({
      ...item,
      attributes: updatedAttributes,
    });
  };

  const handleAddAttribute = () => {
    setItem({
      ...item,
      attributes: [
        ...item.attributes,
        {
          name: "",
          value: "",
        },
      ],
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="card bg-transparent border-2 shadow-md">
      <div className="card bg-transparent border-4 shadow-md">
        <div className="card-body">
          <h1
            style={{ fontFamily: "rockwell" }}
            className="text-center text-2xl text-primary font-extrabold"
          >
            ADD <strong>Item</strong>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product title"
                  name="title"
                  className="input input-sm input-bordered w-full"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "title is required",
                    },
                  })}
                />
                <label>
                  {errors.title?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.title.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product description"
                  name="description"
                  className="input input-sm input-bordered w-full"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "description is required",
                    },
                  })}
                />
                <label>
                  {errors.description?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product category"
                  name="category"
                  className="input input-sm input-bordered w-full"
                  {...register("category", {
                    required: {
                      value: true,
                      message: "category is required",
                    },
                  })}
                />
                <label>
                  {errors.category?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.category.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Product price"
                  name="price"
                  className="input input-sm input-bordered w-full"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "price is required",
                    },
                  })}
                />
                <label>
                  {errors.price?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Currency
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product currency"
                  name="currency"
                  className="input input-sm input-bordered w-full"
                  {...register("currency", {
                    required: {
                      value: true,
                      message: "currency is required",
                    },
                  })}
                />
                <label>
                  {errors.currency?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.currency.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Product quantity"
                  name="quantity"
                  className="input input-sm input-bordered w-full"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "quantity is required",
                    },
                  })}
                />
                <label>
                  {errors.quantity?.type === "required" && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* Image upload field */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-primary font-bold text-md">
                  Image
                </span>
              </label>
              <input
                type="file"
                placeholder="Your image"
                name="image"
                className="input input-sm input-bordered w-full"
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is required",
                  },
                })}
              />
              <label>
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Seller Rating
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Seller rating"
                  name="seller.rating"
                  className="input input-sm input-bordered w-full"
                  {...register("seller.rating")}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Delivery Time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Delivery time"
                  name="shippingInfo.deliveryTime"
                  className="input input-sm input-bordered w-full"
                  {...register("shippingInfo.deliveryTime")}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-primary font-bold text-md">
                    Shipping Cost
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Shipping cost"
                  name="shippingInfo.shippingCost"
                  className="input input-sm input-bordered w-full"
                  {...register("shippingInfo.shippingCost")}
                />
              </div>
            </div>
            <div className="form-control pt-5 w-full">
              <div className="flex justify-between">
                <h2 className="label-text text-primary font-bold text-md">
                  Attributes
                </h2>
                <button
                  type="button"
                  onClick={handleAddAttribute}
                  className="btn btn-sm text-xs w-1/6 uppercase border-accent text-accent font-bold bg-primary"
                >
                  Add Attribute
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {item.attributes.map((attribute, index) => (
                  <div key={index} className="space-y-2">
                    <label className="block">
                      Attribute Name
                      <input
                        type="text"
                        value={attribute.name}
                        onChange={(e) =>
                          handleAttributeChange(index, "name", e.target.value)
                        }
                        className="input input-sm input-bordered w-full"
                      />
                    </label>
                    <label className="block">
                      Attribute Value
                      <input
                        type="text"
                        value={attribute.value}
                        onChange={(e) =>
                          handleAttributeChange(index, "value", e.target.value)
                        }
                        className="input input-sm input-bordered w-full"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="btn btn-sm text-xs w-1/3 uppercase border-accent text-accent font-bold bg-primary"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
