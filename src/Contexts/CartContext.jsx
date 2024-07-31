import React, { useState, createContext } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product, id) => {
        // console.log(`item ${product.title},${id} added to the cart`);
        const newItems = { ...product, amount: 1 };

        const cartItem = cart.find((item)=>{
          return item.id === id;
        });
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItems]);
        }
    };
    

    const removeTocart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
    }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeTocart}}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
