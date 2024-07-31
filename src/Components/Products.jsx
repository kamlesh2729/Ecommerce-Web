import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

import { productContext } from '../Contexts/ProductContext';
import AllProducts from './Productspage/product';

const Products = () => {
  // const [ loading, setLoading] = useState(false);
  // let componenMounted = true;
  
  const { products } = useContext(productContext);
  const [productcat, setProductCat] = useState(products);

  let filter = productcat;

  const filterProduct = (cat) => {
    const productCat = products.filter((item) => item.category === cat);
    setProductCat(productCat);
  }
  
  useEffect(() => { 
    setProductCat(products);
  } ,[products]);


  // const AddtoLocalcart = () => {
  //   localStorage.setItem("cart", JSON.stringify(data));
  // }

  // const GetLocalcart = () => {
  //   let Cart = localStorage.getItem("cart");
  //   // console.log(Cart);
  //   if (Cart) {
  //     return JSON.parse(localStorage.getItem("cart"));
  //   } else {
  //     return [];
  //   }
  // }

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
            onClick={() => setProductCat(products)}
          >
            All
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => filterProduct("men's clothing")}
          >
            men's clothing
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => filterProduct("women's clothing")}
          >
            women's clothing
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => filterProduct("jewelery")}
          >
            jewelery
          </button>

          <button
            className=" text-4h font-medium px-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 hover:text-black"
            onClick={() => filterProduct("electronics")}
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

        <div className="h-auto Lp-l:w-full mx-auto justify-center items-center grid grid-cols-com Lp-l:grid-cols-mod Lp-l:grid-rows-aut3 gap-6 py-8 mt-8">
          {filter.map((product) => {
            return <AllProducts product={product} key={product.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
