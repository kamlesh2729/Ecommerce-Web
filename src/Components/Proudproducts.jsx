import React, { useEffect, useState } from "react";

import Axio from "axios";

const Proudproducts = () => {

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

  const ProudProduct = data.filter((item) => item.id <= 8);

  return (
    <>
      <section className=" my-8 w-[92vw] mx-auto">
        <h3 className=" py-8 text-h3 font-semibold">
          Products We are Proud of
        </h3>
        <div className="h-auto">
          <div className="w-[90vw] h-auto mx-auto pl-[0.18rem] grid grid-cols-mod grid-rows-aut2 gap-4 py-4">
            {ProudProduct.map((product) => {
              const { id, image, price, title } = product;
              return (
                <div
                  key={id}
                  className=" bg-white h-auto px-2 py-4 flex flex-col border-2 border-gray-400 hover:border-slate-500 rounded-md items-center"
                >
                  <img src={image} alt="product images" className=" h-[200px] w-[200px]" />
                  <span className=" font-medium overflow-hidden w-full text-3xl h-10 my-4">{title}</span>
                  <h2 className=" font-semibold text-4h w-full">{price}$</h2>
                </div>
              );
          })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Proudproducts