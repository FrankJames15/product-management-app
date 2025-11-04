import React from "react";
import { RatingGroup } from "@chakra-ui/react";

const CustomRating = (props) => {
    const { count = 0, label = "", ...rest } = props;
    return (
        <RatingGroup.Root
            count={count}
            defaultValue={3}
            size="sm"
            gap="4"
            label=""
            colorPalette={"yellow"}
            {...rest}
        >
            <RatingGroup.HiddenInput />

            {label && <RatingGroup.Label>{label}</RatingGroup.Label>}
            <RatingGroup.Control />
        </RatingGroup.Root>
    );
};

export default CustomRating;
