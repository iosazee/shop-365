import React from "react";
import {Container, Typography} from "@mui/material";

function Results({products}){

    const totalResults = products.length;

    return(
        <Container>
            <Typography>{totalResults} Results Returned</Typography>
        </Container>
    )
}

export default Results;