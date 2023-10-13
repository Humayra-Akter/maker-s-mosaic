import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-5">
          <span
            style={{ fontFamily: "rockwell" }}
            className="text-xl font-bold"
          >
            My Order
          </span>
          <div
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-500 text-gray-600 font-bold  p-1 text-xl rounded-md hover:text-red-500 hover:border-red-600 cursor-pointer"
          >
            x
          </div>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((product) => {
            return (
              <ItemCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                images={product.images}
                qty={product.qty}
              />
            );
          })
        ) : (
          <h2
            style={{ fontFamily: "rockwell" }}
            className="text-center mt-10 text-xl font-bold text-primary"
          >
            Your cart is empty
          </h2>
        )}

        <div>{/* <h3>Total Cost: ${totalCost}</h3> */}</div>
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[18vw] my-2" />
          <button className="bg-primary font-bold px-3 text-white py-2 rounded-lg w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-primary shadow-md text-accent text-6xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;