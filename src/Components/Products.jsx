import React, { useEffect, useState } from "react";

import Axio from "axios";

const Products = () => {
  let [data, setData] = useState([]);

  const api = "https://fakestoreapi.com/products";

  const GetAllproducts = async () => {
    try {
      const products = await Axio.get(api);
      // console.log(products.data);
      setData(products.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllproducts();
  }, [data]);

  return (
    <div className="w-[90vw] h-auto mx-auto pl-[0.18rem] grid grid-cols-mod grid-rows-aut3 gap-4 py-4">
      {data.map((product) => {
        const { id, title, price, image } = product;
        return (
          <div key={id} className=" bg-white h-[350px] px-2 pb-2 flex flex-col border-2 border-gray-300 hover:border-black rounded-md items-center">
            <div className="w-[280px] h-[160px] inline-flex justify-center">
            <img src={image} alt="product-img" className=" h-[150px] w-[200px] my-2" />
            </div>
            <span className="text-black w-[280px] h-10 my-4 text-4h text-center overflow-hidden">{title}</span>
            {/* <span className="text-black text-4h w-[250px] h-[62px] overflow-hidden">{description}</span> */}
            <span className="text-black my-2 text-bh2">{price}</span>
            <div className="w-[250px] px-2 mt-4 flex justify-between">
            <button className="text-h4 font-medium px-3 rounded-md bg-red-200 text-black hover:bg-red-500 hover:text-white">Add to Cart</button>
            <button className="text-h4 font-medium px-2 rounded-md bg-green-200 text-black hover:bg-green-500 hover:text-white">Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
