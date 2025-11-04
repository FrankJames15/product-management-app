import React, { useEffect, useState } from "react";
import {
    Button,
    CloseButton,
    Dialog,
    Portal,
    Field,
    Input,
    Textarea,
    Box,
    Image,
    FileUpload,
    HStack,
} from "@chakra-ui/react";
import CustomRating from "./CustomRating";
import { LuFileImage } from "react-icons/lu";
import { nanoid } from "nanoid";

const AddProductModal = (props) => {
    const { products = [], setProducts = () => {} } = props;
    // console.log("AddProductModal products:", products);

    const initialState = {
        id: nanoid(),
        isAdded: false,
        image: "",
        name: "",
        category: "",
        description: "",
        specification: "",
        rating: 3,
        price: 1,
        quantity: 5,
    };

    const [product, setProduct] = useState(initialState);
    const [files, setFiles] = useState([]);
    const handleProductChange = (e) => {
        const { name, value, type } = e.target;

        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const handleRateChange = ({ value }) => {
        setProduct((prev) => ({
            ...prev,
            rating: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFiles([{ file }]);

            setProduct((prev) => ({
                ...prev,
                image: imageUrl,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setProducts((prevProducts) => [...prevProducts, product]);
        setProduct(initialState);
        setFiles([]);

        Dialog.closeAll();
    };

    // for cancel button and debugging
    const handleClose = () => {
        setProduct(initialState);
        setFiles([]);
        Dialog.closeAll();
    };

    useEffect(() => {
        // console.log("Product state updated:", product);
    }, [product]);

    return (
        <Dialog.Root size="lg" modal>
            <Dialog.Trigger asChild>
                <Button>Add Product</Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>New Product</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body
                            as="form"
                            id="new-product"
                            onSubmit={handleSubmit}
                            display="flex"
                            flexDirection="column"
                            gap={5}
                        >
                            <FileUpload.Root
                                accept="image/*"
                                onChange={handleImageChange}
                                maxFiles={1}
                            >
                                <FileUpload.HiddenInput />
                                <FileUpload.Trigger asChild>
                                    <Button variant="outline">
                                        <LuFileImage /> Upload Image
                                    </Button>
                                </FileUpload.Trigger>
                            </FileUpload.Root>
                            {files.length > 0 && (
                                <Box>
                                    <Image
                                        src={URL.createObjectURL(files[0].file)}
                                        alt="Preview"
                                        boxSize="200px"
                                        objectFit="cover"
                                        borderRadius="md"
                                    />
                                </Box>
                            )}
                            <Field.Root>
                                <Field.Label>Product Name</Field.Label>
                                <Input
                                    name="name"
                                    value={product.name}
                                    placeholder="Baleno Polo"
                                    onChange={handleProductChange}
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Category</Field.Label>
                                <Input
                                    name="category"
                                    value={product.category}
                                    placeholder="tops or pants/shorts"
                                    onChange={handleProductChange}
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Description</Field.Label>
                                <Textarea
                                    name="description"
                                    value={product.description}
                                    placeholder="A comfortable polo shirt"
                                    onChange={handleProductChange}
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Specification</Field.Label>
                                <Textarea
                                    name="specification"
                                    value={product.specification}
                                    placeholder="100% cotton, available in various sizes"
                                    onChange={handleProductChange}
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Rating</Field.Label>
                                <CustomRating
                                    count={5}
                                    value={product.rating}
                                    size="lg"
                                    name="rating"
                                    onValueChange={handleRateChange}
                                />
                            </Field.Root>
                            <HStack gap={4}>
                                <Field.Root>
                                    <Field.Label>Price</Field.Label>
                                    <Input
                                        name="price"
                                        type="number"
                                        value={product.price}
                                        placeholder="100"
                                        onChange={handleProductChange}
                                    />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Quantity</Field.Label>
                                    <Input
                                        name="quantity"
                                        type="number"
                                        value={product.quantity}
                                        placeholder="12"
                                        onChange={handleProductChange}
                                    />
                                </Field.Root>
                            </HStack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                {/* <Dialog.CloseTrigger asChild> */}
                                <Button variant="outline" onClick={handleClose}>
                                    Cancel
                                </Button>
                                {/* </Dialog.CloseTrigger> */}
                            </Dialog.ActionTrigger>
                            <Button
                                disabled={
                                    !product.name ||
                                    !product.category ||
                                    !product.description ||
                                    !product.specification ||
                                    !product.price ||
                                    !product.quantity
                                }
                                type="submit"
                                form="new-product"
                            >
                                Save
                            </Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};

export default AddProductModal;
