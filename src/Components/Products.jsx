import React, {useState, useEffect } from "react";

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


  useEffect(() => {
    const GetAllproducts = async () => {
      try {
      const products = await Axio.get(api);
      // console.log(products.data);
      setData( await products.data);
      setProductCat( await products.data);
      // setPriceRange( await products.data);
    } catch (error) {
      console.log(error);
    }
    };
      GetAllproducts();
  }, []);

  return (
    <>
      <section className=" w-full h-auto px-28">
        <div className="w-full h-16 flex justify-center items-center gap-4">
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

        <div className="w-full h-auto justify-center items-center grid grid-cols-com Lp-l:grid-cols-mod Lp-l:grid-rows-aut3 gap-4 py-8">
          {filter.map((product) => {
            const { id, title, price, image } = product;
            return (
              <div
                key={id}
                className=" bg-gray-200 h-auto px-2 py-2 flex flex-col border-[1px] hover:border-black rounded-md items-center"
              >
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
                {/* <span className="text-black text-4h w-[250px] h-[62px] overflow-hidden">{description}</span> */}
                <span className="text-black my-1 text-bh2">${price}</span>
                <div className="w-[250px] px-1 mt-4 flex justify-between">
                  <button className="text-4h font-medium px-3 rounded-md bg-red-200 text-black hover:bg-red-500 hover:text-white">
                    Add to Cart
                  </button>
                  <button className="text-4h font-medium px-2 rounded-md bg-green-200 text-black hover:bg-green-500 hover:text-white">
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
