import React from "react";
import {Container, Typography} from "@mui/material";

function Results({products}){

    const totalResults = products.length;

    return(
        <Container sx={{my: 3, pt: 2, borderTop: "1px #999 solid"}}>
            <Typography>{totalResults} Results Returned</Typography>
        </Container>
    )
}

export default Results;