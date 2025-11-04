import {
    Card,
    VStack,
    HStack,
    Text,
    Image,
    AspectRatio,
    Button,
    Spacer,
    Badge,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomNumberInput from "./CustomNumberInput";
import ProductDrawer from "./ProductDrawer";
import CustomRating from "./CustomRating";
import CustomStat from "./CustomStat";

const ProductCard = (props) => {
    const {
        id = null,
        name = "",
        quantity = 0,
        price = 0.0,
        image = "",
        rating = null,
        isAdded = null,
        description = "",
        category = null,
        specification = "",

        toggleAddToCart = () => {},

        decQuantityFn = () => {},
        incQuantityFn = () => {},
        ...rest
    } = props;

    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Card.Root
                cursor="pointer"
                borderRadius={"lg"}
                width="350px"
                {...rest}
            >
                <AspectRatio maxH="170px" ratio={4 / 3}>
                    <Image src={image} objectFit="cover" />
                </AspectRatio>
                <Card.Header>
                    <Text>
                        <Badge colorPalette={"blue"}>{category}</Badge>
                    </Text>
                    <Card.Title>{name}</Card.Title>
                    {rating === isNaN ? (
                        "No rating yet"
                    ) : (
                        <CustomRating
                            count={rating}
                            size="md"
                            readOnly
                            // mt={2}
                        />
                    )}
                </Card.Header>
                <Card.Body>
                    <VStack align={"flex-start"}>
                        <Text>Price: {price}</Text>
                    </VStack>

                    <HStack>
                        <Text>Quantity:</Text>
                        <CustomNumberInput
                            value={quantity}
                            decQuantityFn={decQuantityFn}
                            incQuantityFn={incQuantityFn}
                            id={id}
                        />
                        {quantity < 5 && (
                            <Badge ml={2} colorPalette="red" fontSize={"1rem"}>
                                low stock
                            </Badge>
                        )}
                    </HStack>
                </Card.Body>
                <Card.Footer display="flex" align={"end"}>
                    <CustomStat label={"Subtotal"} value={price * quantity} />
                    <Spacer />
                    <Button size={"sm"} onClick={toggleDrawer}>
                        View
                    </Button>
                    <Button
                        size={"sm"}
                        colorScheme={isAdded ? "red" : "green"}
                        onClick={() => toggleAddToCart(id)}
                    >
                        {isAdded ? "Remove from Cart" : "Add to cart"}
                    </Button>
                </Card.Footer>
            </Card.Root>
            <ProductDrawer
                open={open}
                setOpen={setOpen}
                image={image}
                name={name}
                rating={rating}
                price={price}
                description={description}
                category={category}
                specification={specification}
            />
        </>
    );
};

export default ProductCard;
