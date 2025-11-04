import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { PiFileX } from "react-icons/pi";

const Header = () => {
    return (
        <Flex
            //
            // border={"1px dashed grey"}
            borderBottom={"1px solid grey"}
            p={"1rem"}
        >
            <Heading>Products</Heading>
            <Spacer />
            {/* <Navbar /> */}
        </Flex>
    );
};

export default Header;
