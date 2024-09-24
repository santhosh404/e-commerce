import { createContext, useEffect, useState } from "react";
import { getProductService } from "../service/productService";
import { message } from "antd";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                const response = await getProductService();
                if (response) {
                    setProduct(response.data.product)
                    setLoading(false);
                }
            } catch (err) {
                console.error(err)
                setLoading(false);
                message.error(err.message);
            }
        }
        getProducts();

    }, [])

    return (
        <ProductContext.Provider value={{ product, setProduct, loading, setLoading }}>
            {children}
        </ProductContext.Provider>
    );
}