import {
    AspectRatio,
    Badge,
    Button,
    CloseButton,
    Drawer,
    Image,
    Portal,
    Separator,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomRating from "./CustomRating";

const ProductDrawer = (props) => {
    const {
        open,
        setOpen = () => {},
        category = null,
        name = "",
        rating = null,
        image = "",
        description = "",
        price = 0.0,
        specification = "",
    } = props;
    return (
        <Drawer.Root
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
            size={"xl"}
        >
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>{name}</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body lineHeight={"1.5rem"}>
                            <AspectRatio maxH={"400px"} ratio={3 / 4}>
                                <Image src={image} />
                            </AspectRatio>
                            <VStack align={"start"} mt={4} spacing={2}>
                                {rating ? (
                                    <CustomRating
                                        count={5}
                                        size={"md"}
                                        readOnly
                                    />
                                ) : (
                                    "No rating yet"
                                )}
                                <Text>
                                    Category:
                                    <Badge>{category}</Badge>
                                </Text>
                            </VStack>
                            <Text>Price: {price}</Text>
                            <Separator my={4} />
                            <VStack mt={2} spacing={3} align={"flex-start"}>
                                <Text>Description: {description}</Text>
                                <Text>Specification: {specification}</Text>
                            </VStack>
                        </Drawer.Body>
                        <Drawer.Footer></Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
};

export default ProductDrawer;
