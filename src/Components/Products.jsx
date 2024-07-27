import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Axio from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [productcat, setProductCat] = useState(data);
  // const [ loading, setLoading] = useState(false);
  // let componenMounted = true;
  let filter = productcat;
  
  const api = "https://fakestoreapi.com/products";

  const FilteredProduct = (cat) => {
  const CategoryFil = data.filter((data) => data.category === cat);
  setProductCat(CategoryFil);
  }
  
  const AddtoLocalcart = () => {
    localStorage.setItem("cart", JSON.stringify(data));
  }

  const GetLocalcart = () => {
    let Cart = localStorage.getItem("cart");
    // console.log(Cart);
    if (Cart) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  }


  useEffect(() => {
    const GetAllproducts = async () => {
      try {
      const products = await Axio.get(api);
      setData( await products.data);
      setProductCat( await products.data);
    } catch (error) {
      console.log(error);
    }
    };
    GetAllproducts();
    GetLocalcart();
  }, []);

  return (
    <>
      <section className=" w-full Lp-l:max-w-8lx h-auto mx-auto">
        <div className=" max-w-81x Lp-l:w-full h-36 Lp-l:h-16 grid grid-cols-cona grid-rows-mod Lp-l:flex justify-center items-center gap-4">
          {/* <div className="flex flex-col Lp-l:flex-row">
            <label
              htmlFor="PriceRange"
              className="text-black font-titles font-semibold text-4h"
            >
              Price Range
            </label>
            <select
              id="PriceRange"
              onChange={(e) => {
                setPriceRange(e.target.value);
              }}
              className=" border-2 border-gray-800 border-solid rounded-md w-44 h-12 text-black text-4h"
            >
              <option value="--">----</option>
              <option value="100">1-100</option>
              <option value="500">101-500</option>
            </select>
          </div> */}
          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => setProductCat(data)}
          >
            All
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => FilteredProduct("men's clothing")}
          >
            men's clothing
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => FilteredProduct("women's clothing")}
          >
            women's clothing
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => FilteredProduct("jewelery")}
          >
            jewelery
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => FilteredProduct("electronics")}
          >
            electronics
          </button>

          {/* <div className="flex flex-col Lp-l:flex-row">
            <label
              htmlFor="ProductType"
              className="text-black font-titles font-semibold text-4h"
            >
              Product Type
            </label>
            <select
              id="ProductType"
              onSelect={(e) => {
                setProductCat(e.target.value);
              }}
              className=" border-2 border-gray-800 border-solid rounded-md w-64 h-12 text-black text-4h"
            >
              <option value="data">All</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronic</option>
            </select>
          </div> */}

          {/* <button
            type="submit"
            onClick={FilteredProduct}
            className="bg-text-orange text-white w-32 h-12 font-semibold text-4h rounded-lg"
          >
            Search
          </button> */}
        </div>

        <div className="w-full h-auto justify-center items-center grid grid-cols-com Lp-l:grid-cols-mod Lp-l:grid-rows-aut3 gap-6 py-8 mt-8">
          {filter.map((product) => {
            const { id, title, price, image } = product;
            return (
              <div
                key={id}
                className=" w-[80%] Lp-l:w-auto h-auto px-2 py-6 Lp-l:py-2 mx-auto Lp-l:mx-0 flex flex-col justify-center items-center border-2 hover:border-black rounded-md"
              >
                <Link to="/Sproduct" className="w-full Lp-l:w-auto h-auto flex flex-col justify-center items-center rounded-md">
                  <div className="w-[280px] h-[160px] inline-flex justify-center">
                    <img
                      src={image}
                      alt="product-img"
                      className=" h-[140px] w-[140px] my-2 mix-blend-multiply"
                    />
                  </div>
                  <div className="text-black w-[250px] h-10 my-2 text-4h text-center overflow-hidden">
                    {title}
                  </div>
                  <span className="text-black my-1 text-bh2">${price}</span>
                  <button onClick={AddtoLocalcart} className="w-[250px] Lp-l:w-[200px] text-4h font-semibold p-3 rounded-md bg-white border-2 border-black border-solid text-black hover:bg-blue-500 hover:text-white hover:border-blue-500">
                    Add to Cart
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
