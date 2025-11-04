import {
    Box,
    Button,
    Flex,
    Heading,
    SimpleGrid,
    Spacer,
} from "@chakra-ui/react";
import React from "react";
import ProductCard from "../custom-components/ProductCard";
import CustomStat from "../custom-components/CustomStat";
import AddProductForm from "../custom-components/AddProductForm";
import CustomCheckBoxCard from "../custom-components/CustomCheckBoxCard";

const Home = (props) => {
    const {
        setProducts = () => {},
        products = [],
        overallTotal = 0,
        handleCategoryChange = () => {},
        toggleAddToCart = () => {},
        decQuantityFn = () => {},
        incQuantityFn = () => {},
    } = props;

    return (
        <>
            <Box
                //
                // border={"1px dashed grey"}
                mx={"5%"}
            >
                <Flex my={5} align={"center"}>
                    <CustomCheckBoxCard
                        label="Tops"
                        onChange={({ checked }) => {
                            handleCategoryChange({
                                value: "tops",
                                checked: checked,
                            });
                        }}
                    />
                    <CustomCheckBoxCard
                        label="Pants/Shorts"
                        onChange={({ checked }) => {
                            handleCategoryChange({
                                value: "pants/shorts",
                                checked: checked,
                            });
                        }}
                    />
                    <Spacer />
                    <CustomStat label={"Overall Total"} value={overallTotal} />
                    <Spacer />
                    <AddProductForm
                        products={products}
                        setProducts={setProducts}
                    />
                </Flex>
                <Flex
                    // minChildWidth={"250px"}
                    gap={8}
                    wrap={"wrap"}
                >
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            //
                            image={product.image}
                            name={product.name}
                            rating={product.rating}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                            quantity={product.quantity}
                            isAdded={product.isAdded}
                            specification={product.specification}
                            //
                            toggleAddToCart={toggleAddToCart}
                            decQuantityFn={decQuantityFn}
                            incQuantityFn={incQuantityFn}
                        />
                    ))}
                </Flex>
            </Box>
        </>
    );
};

export default Home;
