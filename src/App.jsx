import React, { useState, useEffect } from "react";
import { Provider } from "@/components/ui/provider";

import { Button, HStack } from "@chakra-ui/react";
import Header from "./custom-components/header/Header";
import Home from "./pages/Home";
import { products as productsData } from "./data/products";

const App = () => {
    const [products, setProducts] = useState(productsData);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [overallTotal, setOverallTotal] = useState(0);

    const handleCategoryChange = ({ value = null, checked = null }) => {
        setSelectedCategories((prev) =>
            checked ? [...prev, value] : prev.filter((cat) => cat !== value)
        );
    };

    const filterByCategory = (category = []) => {
        if (category.length === 0) {
            setFilteredProducts(products);
            return;
        }
        const filtered = productsData.filter((product) =>
            category.includes(product.category.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const incQuantityFn = (id) => {
        setProducts((prev) =>
            prev.map((product) => {
                if (product.id !== id) return product;

                return {
                    ...product,
                    quantity: product.quantity + 1,
                };
            })
        );
    };
    const decQuantityFn = (id) => {
        setProducts((prev) =>
            prev.map((product) => {
                if (product.id !== id) return product;

                return {
                    ...product,
                    quantity: Math.max(0, product.quantity - 1),
                };
            })
        );
    };

    const computeTotal = () => {
        return products.reduce(
            (acc, { price, quantity }) => acc + price * quantity,
            0
        );
    };
    const toggleAddToCart = (id) => {
        setProducts((prev) =>
            prev.map((product) => {
                if (product.id !== id) return product;

                return {
                    ...product,
                    isAdded: !product.isAdded,
                };
            })
        );
    };

    useEffect(() => {
        const newTotal = computeTotal();
        setOverallTotal(newTotal);
        setFilteredProducts(products);
    }, [products]);

    useEffect(() => {
        filterByCategory(selectedCategories);
    }, [selectedCategories]);

    return (
        <Provider>
            <Header />
            <Home
                handleCategoryChange={handleCategoryChange}
                setProducts={setProducts}
                products={filteredProducts}
                overallTotal={overallTotal}
                toggleAddToCart={toggleAddToCart}
                decQuantityFn={decQuantityFn}
                incQuantityFn={incQuantityFn}
            />
        </Provider>
    );
};

export default App;
