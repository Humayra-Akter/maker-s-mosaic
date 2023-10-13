import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ScrollToTop from "../Home/ScrollToTop";
import Cart from "../Cart/Cart";
import CategoryMenu from "../Cart/CategoryMenu";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const category = useSelector((state) => state.category.category);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h1
        className="text-3xl pt-12 text-center font-black text-primary  px-7"
        style={{ fontFamily: "arial" }}
      >
        Your Home's Best Friend
      </h1>
      <CategoryMenu />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 p-11">
        {products
          .filter((product) => {
            if (category === "All") {
              return product.title;
            } else {
              return category === product.category && product.title;
            }
          })
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
      <Cart />
      <ScrollToTop />
    </div>
  );
};

export default Products;
