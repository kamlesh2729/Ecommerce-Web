import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import { cartContext } from "../../Contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  
  const { id, title, image, price } = product;


  return (
    <>
      <div className="w-full h-auto py-6 Lp-l:mx-0 flex flex-col justify-center items-center gap-6 border-2 hover:border-black rounded-md">
          <div className="w-[280px] h-[160px] inline-flex justify-center">
            <img
              src={image}
              alt="product-img"
              className=" h-[140px] w-[140px] my-2 mix-blend-multiply hover:scale-110 transition duration-300" />
          </div>
          <Link to={`/Sproduct/${id}`}>
          <div className="text-black w-[250px] h-10 my-2 text-4h text-center overflow-hidden">
          {title}
          </div>
          </Link>
          <span className="text-black my-1 text-bh2">${price}</span>
          <button onClick={()=>addToCart(product,id)} className="w-[250px] Lp-l:w-[200px] text-4h font-semibold p-3 rounded-md bg-white border-2 border-black border-solid text-black hover:bg-blue-500 hover:text-white hover:border-blue-500">
            Add to Cart
          </button>
      </div>
    </>
  );
}

export default Product;