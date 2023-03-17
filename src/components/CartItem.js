import { Button, CardMedia, Typography } from "@mui/material"

const CartItem = ({itemData, deleteCartItem}) => {
    return (
        <>

            <CardMedia component="img" image={itemData.image} title={itemData.title}
             sx={{height:"100px", width:"80px"}} />
            <Typography variant="h6" > {itemData.title} </Typography>
            <Typography variant="p" > £ {itemData.price} </Typography>
            <Typography variant="p" > {itemData.count} </Typography>
            <Button size="small"
                variant="contained"
                component="button"
                onClick={() => deleteCartItem(itemData)}
            >Delete</Button>
        </>
    )
}

export default CartItem