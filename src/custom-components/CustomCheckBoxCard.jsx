import { CheckboxCard } from "@chakra-ui/react";

const CustomCheckBoxCard = (props) => {
    const {
        label = "",
        isChecked = false,
        onChange = () => {},
        ...rest
    } = props;
    return (
        <CheckboxCard.Root
            maxW="150px"
            isChecked={isChecked}
            onCheckedChange={onChange}
            cursor="pointer"
            {...rest}
        >
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
                <CheckboxCard.Indicator />
                {label && <CheckboxCard.Label>{label}</CheckboxCard.Label>}
            </CheckboxCard.Control>
        </CheckboxCard.Root>
    );
};
export default CustomCheckBoxCard;
