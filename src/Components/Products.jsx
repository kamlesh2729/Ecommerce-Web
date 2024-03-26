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
    <div className=" grid grid-cols-mod grid-rows-aut3 justify-center text-center bg-orange-200">
      {data.map((product) => {
        const { id, title, info, price, image } = product;
        return (
          <div key={id}>
            <span className="text-black text-h4">{title}</span>
            <img src={image} alt="product-img" className=" h-24 w-24" />
            <span className="text-black text-h4">{info}</span>
            <span className="text-black text-bh2">{price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
