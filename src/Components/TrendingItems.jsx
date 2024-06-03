import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Axio from "axios";

const TrendingItems = () => {
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

  const ProudProduct = data.filter((item) => item.id >= 8);

  return (
    <>
    {ProudProduct.map((product) => {
        const { id, image, price, title } = product;
        return (
        <div key={id}
            className="cursor-pointer w-[210px] border-2 border-gray-400 hover:border-slate-500 rounded-md items-center"
        >
            <Link>
            <div>
                <img src={image} alt="product images" className=" h-[200px] w-[210px]"/>
            </div>
            <div className=" text-4h p-4 w-[21rem]">
                <p className=" font-medium overflow-hidden w-full text-3xl h-10 my-4">{title}</p>
                <p className=" font-semibold text-4h w-full">{price}$</p>
            </div>
            </Link>
        </div>
        );
    })}
    </>
  );
};

export default TrendingItems;
