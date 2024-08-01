import React, { useContext } from 'react'

import { TbLetterX, TbArrowNarrowRight } from "react-icons/tb";
import { cartContext } from '../Contexts/CartContext';
import { slidebarContext } from '../Contexts/SliderbarContext';

const Cart = () => {

  const { cart, removeTocart, incressQty, decreaseQty, itemAmount, total } =
    useContext(cartContext);
  
  const { isopen, isClose } = useContext(slidebarContext);

  return (
    <>
      <section className={`${isopen ? 'right-0' : '-right-full'} " w-full h-screen Lp-l:max-w-[40vw] tab:w-[35vw] Lp-l:h-full bg-white fixed right-0 top-0 z-20 mx-auto"`}>
        <div className=' flex justify-between my-4 px-7'>
          <h2 className=' text-2xl Lp-l:text-h4'>Your shopping cart {itemAmount}</h2>
        <button onClick={isClose} className=' font-medium text-4xl Lp-l:text-h4'><TbArrowNarrowRight/></button>
        </div>
        <div className=" h-[70vh] overflow-scroll">
          {cart.map(item => {
            return (
              <div
                key={item.id}
                className=" w-auto h-[17.2vh] Lp-l:h-[22vh] mx-2 Lp-l:mx-1 flex relative border boder-solid border-black mb-4"
              >
                <div className=" w-[25vw] h-[13vh] Lp-l:w-[10vw] Lp-l:h-[18vh] my-auto">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-full h-full object-center"
                  />
                </div>

                <div className=" w-[74vw] Lp-l:w-[24vw] h-[17vh] Lp-l:h-[20vh] text-center">
                <div className='w-full h-[6vh] Lp-l:h-[8vh] my-4 text-left pl-2 pr-6 Lp-l:pr-4 overflow-hidden'>
                <h2 className="text-p font-normal"> {item.title} </h2>
                </div>
                  <div className=' flex justify-evenly mt-4 pt-5'>
                    {/* Qty div */}
                  <div className=" w-36 Lp-l:w-36 Lp-l:h-14 flex justify-center items-center text-h3 border border-black">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className=" w-20 Lp-l:h-14 text-h3 text-center border-r Lp-l:border-y border-black bg-gray-200"
                    >
                      -
                    </button>
                    <p className=" w-20 text-center text-h3 bg-transparent">
                      {item.amount}
                    </p>
                    <button
                      onClick={() => incressQty(item.id)}
                      className=" w-20 Lp-l:h-14 text-h3 text-center border-l Lp-l:border-y border-black bg-gray-200"
                    >
                      +
                    </button>
                    </div>
                    {/* price div  */}
                    <div>
                      <h3 className=" text-p font-medium mt-2 mb-2"> ${item.price}</h3>
                    </div>
                    {/* final price div  */}
                  <div>
                    <h3 className=" text-p font-medium mt-2 mb-2"> {`$ ${parseFloat(item.price * item.amount).toFixed(2)}`} </h3>
                  </div>
                  </div>
                </div>

                {/* <div className=" Lp-l:w-auto Lp-l:h-[20vh] flex justify-evenly Lp-l:flex-col gap-4 bg-red-200"></div> */}
                <button
                  onClick={() => {
                    removeTocart(item.id);
                  }}
                  className="w-10 Lp-l:h-14 absolute right-1 top-1 text-h3 text-center border-black"
                >
                  <TbLetterX />
                </button>
              </div>
            );
          })}
        </div>
        <div className=" flex border-t-2 border-dashed border-black">
          <h3>subtotal amount $ {parseFloat(total).toFixed(2)}</h3>
          <button className="w-[230px] text-4h font-semibold p-3 my-4 rounded-md border-2 border-black border-solid bg-transparent text-black hover:bg-black hover:text-white hover:border-black">
          Go To Checkout
          </button>
        </div>
      </section>
    </>
  );
}

export default Cart