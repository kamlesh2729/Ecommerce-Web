import React, { useEffect, useState } from "react";

import Axio from "axios";

const Products = () => {
  let [data, setData] = useState([]);
  let [price, setPrice] = useState('');
  let [producttype, setProductType] = useState();

  const api = "https://fakestoreapi.com/products";

  const GetAllproducts = async () => {
    try {
      const products = await Axio.get(api);
      console.log(products.data);
      setData(products.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  // const MensClothig = data.filter((data) => data.price != producttype);
  // const Pricefilter = data.filter((data) => data.price <= price);
  console.log(producttype);
  console.log(price);
  

  useEffect(() => {
    GetAllproducts();
  }, [data]);

  return (
    <>
      <section className=" w-full px-28 bg-yellow-100">
        <div className="w-full h-16 flex justify-center items-center gap-4">
          <label
            htmlFor="PriceRange"
            className="text-black font-titles font-semibold text-4h"
          >
            Price Range
          </label>
          <select
            id="PriceRange"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className=" border-2 border-gray-800 border-solid rounded-md w-44 h-12 text-black text-4h"
          >
            <option value="--">----</option>
            <option value="100">1-100</option>
            <option value="500">101-500</option>
          </select>

          <label
            htmlFor="ProductType"
            className="text-black font-titles font-semibold text-4h"
          >
            Product Type
          </label>
          <select
            id="ProductType"
            onChange={(e) => {
              setProductType(e.target.value);
            }}
            className=" border-2 border-gray-800 border-solid rounded-md w-64 h-12 text-black text-4h"
          >
            <option value="----">----</option>
            <option value="Men's Clothing">Men's Clothing</option>
            <option value="Women's Clothing">Women's Clothing</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronic">Electronic</option>
          </select>

          <button
            type="submit"
            className="bg-text-orange text-white w-32 h-12 font-semibold text-4h rounded-lg"
          >
            Search
          </button>
        </div>
        
        <div className="w-full h-auto justify-center items-center grid grid-cols-mod grid-rows-aut3 gap-4 py-8">
          {data.map((product) => {
            const { id, title, price, image } = product;
            return (
              <div
                key={id}
                className=" bg-white h-[350px] px-2 pb-2 flex flex-col border-2 border-gray-300 hover:border-black rounded-md items-center"
              >
                <div className="w-[280px] h-[160px] inline-flex justify-center">
                  <img
                    src={image}
                    alt="product-img"
                    className=" h-[150px] w-[200px] my-2"
                  />
                </div>
                <span className="text-black w-[280px] h-10 my-4 text-4h text-center overflow-hidden">
                  {title}
                </span>
                {/* <span className="text-black text-4h w-[250px] h-[62px] overflow-hidden">{description}</span> */}
                <span className="text-black my-2 text-bh2">{price}</span>
                <div className="w-[250px] px-2 mt-4 flex justify-between">
                  <button className="text-h4 font-medium px-3 rounded-md bg-red-200 text-black hover:bg-red-500 hover:text-white">
                    Add to Cart
                  </button>
                  <button className="text-h4 font-medium px-2 rounded-md bg-green-200 text-black hover:bg-green-500 hover:text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
