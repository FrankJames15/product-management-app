import React from "react";
import { Stat } from "@chakra-ui/react";

const CustomStat = (props) => {
    const { label = "", value = 0, ...rest } = props;
    return (
        <Stat.Root
            maxWidth="5rem"
            // border={"1px dashed grey"}
            mx={"auto"}
            {...rest}
        >
            <Stat.Label>{label}</Stat.Label>
            <Stat.ValueText>{value}</Stat.ValueText>
            <Stat.HelpText />
        </Stat.Root>
    );
};

export default CustomStat;
