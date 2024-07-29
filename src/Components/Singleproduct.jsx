import React, {useState, useEffect} from 'react'
import { useParams } from "react-router"

import Axio from "axios";

import Trending from "./TrendingSlider";

const Singleproduct = () => {

  const [items, setItems] = useState([]);
  
  const api = "https://fakestoreapi.com/products";
  const Product = async () => {
    try {
      const product = await Axio.get(api);
      let Data = (await product.data);
      // console.log(Data);
      setItems(Data);
    } catch (error) {
      console.log(error);
    }
  }
  // Product();

    useEffect(() => {
      Product();
    }, []);
  
  // let { id } = useParams();
  // let item = items.filter((item) => item.id === parseInt(id));
  // console.log(item);
  // console.log(item);

  const [quantity, setQuantity] = useState(1);

  const calcPrice = (quantity) => {
    // return quantity * item[0].price;
  };

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
            <div className=" w-full h-[55vh] inline-flex justify-center items-center">
              {/* <img src={item[0].image} alt="product" className='h-[50vh]' /> */}
            </div>
            <div className=" w-full h-[25vh] flex justify-center items-center">
              {/* <img src={item[0].image} alt="Product image1" /> */}
              {/* <img src={item[0].image} alt="product image2" /> */}
              {/* <img src={item[0].image} alt="product image3" /> */}
            </div>
          </div>
          <div className=" w-[90%] Lp-l:w-1/2 h-auto Lp-l:h-[80vh] mx-auto px-8 Lp-l:px-16 bg-gray-300">
            <h2 className=" text-bh2 font-semibold mt-2 mb-4 pb-4">
              {/* {item[0].title} */}
            </h2>
            <p className=" text-4h font-medium my-4 Lp-l:mt-20">
              {/* {item[0].description} */}
            </p>
            <div className=" flex flex-col Lp-l:flex-row items-center justify-evenly Lp-l:justify-between Lp-l:mt-12 py-3">
              <h2 className="text-h3 font-semibold my-4">Quantity</h2>
              <div className=" Lp=l:w-36 Lp-l:h-20 flex justify-center items-center text-h3 border border-black">
                <button
                  onClick={decrease}
                  className=" w-20 Lp-l:h-20 text-bh2 border-r Lp-l:border-y border-black bg-gray-200"
                >
                  -
                </button>
                <p className=" w-20 text-center text-bh2 bg-transparent">
                  {quantity}
                </p>
                <button
                  onClick={increase}
                  className=" w-20 Lp-l:h-20 text-bh2 border-l Lp-l:border-y border-black bg-gray-200"
                >
                  +
                </button>
              </div>
              <h2 className="text-h3 font-semibold my-4">
                ${calcPrice(quantity)}
              </h2>
            </div>
            <div className=" flex flex-col Lp-l:flex-row items-center Lp-l:justify-between Lp-l:mt-12">
              <button className="w-[230px] text-4h font-semibold p-3 my-4 rounded-md border-2 border-black border-solid bg-transparent text-black hover:bg-black hover:text-white hover:border-black">
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
}

export default Singleproduct