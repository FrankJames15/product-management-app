export const products = [
    {
        id: 1,
        name: "Mr. Lee Denim Jeans",
        rating: 3,
        description:
            "Classic denim jeans perfect for casual wear. Lightweight yet durable—ideal for layering during cool days.",
        price: 1250,
        quantity: 4,
        category: "pants/shorts",
        specification:
            "Material: 100% Cotton | Fit: Regular | Color: Dark Blue | Wash: Machine Wash Cold",
        isAdded: false,
        image: new URL("../images/jeans.png", import.meta.url).href,
    },
    {
        id: 2,
        name: "UrbanFlex Shorts",
        rating: 5,
        description:
            "Stylish and comfortable cargo shorts made for everyday adventure. Comes with multiple functional pockets.",
        price: 850,
        quantity: 7,
        category: "pants/shorts",
        specification: "Material: Cotton Twill | Fit: Relaxed | Color: Blue ",
        isAdded: true,
        image: new URL("../images/short.png", import.meta.url).href,
    },
    {
        id: 3,
        name: "Basic Grey T-Shirt",
        rating: 4,
        description:
            "Soft and breathable cotton tee perfect for daily wear. Simple yet versatile style for any outfit.",
        price: 450,
        quantity: 10,
        category: "tops",
        specification:
            "Material: 100% Cotton | Fit: Regular | Color: Grey | Wash: Machine Wash Warm",
        isAdded: false,
        image: new URL("../images/grey-tshirt.png", import.meta.url).href,
    },
];
