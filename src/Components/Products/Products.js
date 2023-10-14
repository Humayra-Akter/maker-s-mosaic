import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ScrollToTop from "../Home/ScrollToTop";
import Cart from "../Cart/Cart";
import CategoryMenu from "../Cart/CategoryMenu";
import { useSelector } from "react-redux";
import ProductDetailPage from "./ProductDetailPage";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
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
              return product.title.toLowerCase().includes(search.toLowerCase());
            } else {
              return (
                category === product.category &&
                product.title.toLowerCase().includes(search.toLowerCase())
              );
            }
          })
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setDetails={setDetails}
            ></ProductCard>
          ))}
      </div>
      <Cart />
      <ScrollToTop />
      <ProductDetailPage details={details} />
    </div>
  );
};

export default Products;
