import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button} from "@mui/material";
import FeaturedProductCard from "./FeaturedProductCard";
import { Link } from 'react-router-dom';





const FeaturedProduct = ({ products }) => {

    const [randomNumber, setRandomNumber] = useState(11)

    const generateRandomNumber = () => {
        const min = 1;
        const max = 19;
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomInt);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            generateRandomNumber()
        }, 24 * 60 * 60 * 1000)

        return () => clearInterval(interval)
    }, [])

    const featuredProduct = products.filter((item) => item.id === randomNumber)[0];
    const image = featuredProduct?.image ?? `${require("../assets/logo.svg").default}`
    const title = featuredProduct?.title ?? "WELCOME TO SHOP-365"
    const id = featuredProduct?.id

    return (

        <Card sx={{ display: "flex", flexDirection: { md: "row", xs:"column" }, justifyContent: "space-evenly", height: 400, background: "#DAC7C7", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)", overflow: "hidden", objectFit:"cover", mb: 2 }}>
            <FeaturedProductCard image={image} title={title} />
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Typography variant="h5" sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 700, color: "#011627", textAlign: "center" }}>
                    Deal of the Day!
                </Typography>
                <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" size="large" color="error" sx={{ width: "100%" }}>
                        50% Off! Buy Now!!!
                    </Button>
                </Link>
            </CardContent>
        </Card>

    );
};

  export default FeaturedProduct;







