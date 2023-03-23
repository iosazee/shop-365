import { Button, CardMedia, Typography, Grid } from "@mui/material";

const CartItem = ({itemData, deleteCartItem}) => {
    return (
        <>
            <Grid container>
                <Grid item xs={6} md={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <CardMedia component="img" image={itemData.image} title={itemData.title} sx={{height:"100px", width:"80px"}} />
                </Grid>
                <Grid item xs={6} md={3} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography variant="p" > {itemData.title} </Typography>
                </Grid>
                <Grid item xs={4} md={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography variant="p" > £ {itemData.price} </Typography>
                </Grid>
                <Grid item xs={4} md={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography variant="p" > QTY:{itemData.count} </Typography>
                </Grid>
                <Grid item xs={4} md={2} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button size="small"
                    variant="contained"
                    color="error"
                    component="button"
                    sx={{textTransform: "none"}}
                    onClick={() => deleteCartItem(itemData)}
                    >
                    Delete
                    </Button>
                </Grid>   
            </Grid>
        </>
    )
}

export default CartItem