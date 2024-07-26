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
  }, []);

  const ProudProduct = data.filter((item) => item.id <= 8);

  return (
    <>
      <section className=" w-[90%] Lp-l:max-w-8lx my-16 mx-auto py-8">
        <h3 className=" py-8 text-h3 font-semibold">
          Products We are Proud of
        </h3>
        <div className="h-auto">
          <div className="w-[90vw] h-auto mx-auto pl-[0.18rem] grid grid-cols-com Lp-l:grid-cols-mod Lp-l:grid-rows-proud gap-7 py-4">
            {ProudProduct.map((product) => {
              const { id, image, price, title } = product;
              return (
                <div
                  key={id}
                  className=" bg-white h-auto px-2 py-4 flex flex-col border-2 border-gray-400 hover:border-slate-500 rounded-md items-center"
                >
                  <img
                    src={image}
                    alt="product images"
                    className=" h-[180px] w-[120px] object-center"
                  />
                  <span className=" font-medium overflow-hidden w-full text-3xl h-10 mt-8">
                    {title}
                  </span>
                  <h2 className=" font-semibold text-4h w-full mt-6">{price}$</h2>
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