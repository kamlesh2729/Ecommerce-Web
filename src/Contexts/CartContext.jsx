import React, { useState, createContext, useEffect } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart) {
            const Total = cart.reduce((accu, curr) => {
                return accu + curr.price * curr.amount;
            }, 0);
            setTotal(Total)
        }
    },[cart]);

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accu, curr) => {
                return accu + curr.amount;
            }, 0)
            setItemAmount(amount);
        }
    }, [cart]);
    
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
    const incressQty = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id)
    };
    
    const decreaseQty = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 }
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } 
        if (cartItem.amount < 2) {
                removeTocart(id);
        }
        
    };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeTocart, incressQty, decreaseQty, itemAmount, total}}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
