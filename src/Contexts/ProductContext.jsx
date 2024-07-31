import React, {createContext, useState, useEffect} from 'react'


export const productContext = createContext();

const ProductProvider = ({ children }) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const FeatchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }
        FeatchProducts();
    }, []);
    return (
        <productContext.Provider value={{ products }}>{children}</productContext.Provider>
    )
    }

export default ProductProvider;