import { Button, CardMedia, Typography } from "@mui/material"

const CartItem = ({itemData}) => {
    return (
        <>

            <CardMedia component="img" image={itemData.image} title={itemData.title}
             sx={{height:"100px", width:"80px"}} />
            <Typography variant="h6" > {itemData.title} </Typography>
            <Typography variant="p" > £ {itemData.price} </Typography>
            <Typography variant="p" > {itemData.count} </Typography>
            <Button size="small"  variant="contained" >Delete</Button>
        </>
    )
}

export default CartItem