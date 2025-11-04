import React from "react";
import { HStack, IconButton, NumberInput } from "@chakra-ui/react";
import { LuMinus, LuPlus } from "react-icons/lu";

const CustomNumberInput = (props) => {
    const {
        id = null,
        value = 0,
        decQuantityFn = () => {},
        incQuantityFn = () => {},
    } = props;
    return (
        <NumberInput.Root unstyled spinOnPress={false} value={value}>
            <HStack gap="2">
                <NumberInput.DecrementTrigger
                    asChild
                    onClick={() => decQuantityFn(id)}
                >
                    <IconButton variant="outline" size="sm">
                        <LuMinus />
                    </IconButton>
                </NumberInput.DecrementTrigger>
                <NumberInput.ValueText
                    textAlign="center"
                    fontSize="lg"
                    minW="3ch"
                />
                <NumberInput.IncrementTrigger
                    asChild
                    onClick={() => incQuantityFn(id)}
                >
                    <IconButton variant="outline" size="sm">
                        <LuPlus />
                    </IconButton>
                </NumberInput.IncrementTrigger>
            </HStack>
        </NumberInput.Root>
    );
};

export default CustomNumberInput;
