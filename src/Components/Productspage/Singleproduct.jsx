import React, { useState, useContext } from "react";
import { useParams } from "react-router";

import { cartContext } from "../../Contexts/CartContext";
import { productContext } from "../../Contexts/ProductContext";

import Trending from "./TrendingSlider";

const Singleproduct = () => {
  // const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);
  const { products } = useContext(productContext);

  const item = products.find((item) => item.id === parseInt(id));
  // console.log(item);

  if (!item) {
    return <section>Loading products details getting......</section>;
  }

  const { title, image, price, description } = item;

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <section>
        <div className="w-full Lp-l:max-w-8lx h-auto mx-auto flex flex-col Lp-l:flex-row justify-center items-center">
          <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto">
            <div className=" w-full h-[40vh] Lp-l:h-[80vh] inline-flex justify-center items-center">
              <img
                src={image}
                alt="product"
                className=" h-[30vh] w-[60vw] Lp-l:w-[30vw] Lp-l:h-[50vh] hover:scale-110 hover: transition duration-300"
              />
            </div>
          </div>
          <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto px-8 Lp-l:px-16 bg-gray-300">
            <h2 className=" text-bh2 font-semibold mt-2 mb-2 pb-4">{title}</h2>
            <div className=" h-auto Lp-l:h-[20vh] overflow-hidden">
              <p className=" text-4h font-medium overflow-hidden">
                {description}{" "}
              </p>
            </div>
            <div className=" flex flex-col Lp-l:flex-row items-center justify-evenly Lp-l:justify-between Lp-l:mt-3 py-3">
              <h2 className="text-h3 font-semibold my-4">Quantity</h2>
              <div className=" Lp=l:w-36 Lp-l:h-20 flex justify-center items-center text-h3 border border-black">
                <button
                  onClick={decrease}
                  className=" w-20 Lp-l:h-20 text-bh2 border-r Lp-l:border-y border-black bg-gray-200"
                >
                  -
                </button>
                <p className=" w-20 text-center text-bh2 bg-transparent">
                  {quantity}{" "}
                </p>
                <button
                  onClick={increase}
                  className=" w-20 Lp-l:h-20 text-bh2 border-l Lp-l:border-y border-black bg-gray-200"
                >
                  +
                </button>
              </div>
              <h2 className="text-h3 font-semibold my-4">
                ${parseFloat(price * quantity).toFixed(2)}{" "}
              </h2>
            </div>
            <div className=" flex flex-col Lp-l:flex-row items-center Lp-l:justify-between Lp-l:mt-4">
              <button
                onClick={() => addToCart(item, item.id)}
                className="w-[230px] text-4h font-semibold p-3 my-4 rounded-md border-2 border-black border-solid bg-transparent text-black hover:bg-black hover:text-white hover:border-black"
              >
                Add to Cart
              </button>
              <button className="w-[230px] text-4h font-semibold p-3 my-4 rounded-md border-2 border-red-600 border-solid bg-red-600 text-white hover:bg-transparent hover:text-red-600 hover:border-red-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <Trending />
      </section>
    </>
  );
};

export default Singleproduct;
