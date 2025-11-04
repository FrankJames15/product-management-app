import { Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
    return (
        <Flex gap={4} border={"1px dashed grey"}>
            <a>Home</a>
            <a>Cart</a>
        </Flex>
    );
};

export default Navbar;
