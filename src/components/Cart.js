import React, {useState} from "react";
import { Card, Typography, CardActions, Button, Modal, Box, Container, Grid } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CartItem from "./CartItem";
import { useNavigate, Link } from "react-router-dom";





const Cart = ({cartItems, deleteCartItem, deleteAllCartItems}) => {

    const [isPopUpOpen, setPopUpOpen] = useState(false)
    const navigate = useNavigate()


    const handlePopUp = () => setPopUpOpen(!isPopUpOpen)


    const calcTotalPrice = () => {
      let totalItemCost = 0

      for( let i = 0; i < cartItems.length; i++){
        totalItemCost += cartItems[i].price * cartItems[i].count
      }
      return totalItemCost.toFixed(2)
    }


    const confirmPurchase = () => {
      //hides modal
      handlePopUp()
      //removes all items in cart
      deleteAllCartItems()
      //redirects user back to homepage
      navigate("/")
    }


  return (

    <Container sx={{flexGrow:1, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Container>
        <Typography variant="h3" style={{marginTop:30, textDecoration: "underline #ff0000 solid", fontFamily: "Pacifico"}}>Cart</Typography>
        {
          isPopUpOpen && (
            <Modal open={isPopUpOpen} onClose={handlePopUp} >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}} >
                  Thank you for your order
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Your Order Summary: {cartItems.map(item => {
                    return <Typography key={item.id} sx={{my:1}} >
                      {item.title}
                    </Typography>
                  })}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight:600 }}>
                  Total amount is £{calcTotalPrice()}
                </Typography>
                <Button onClick={confirmPurchase} sx={{textAlign:"center"}} variant="contained" >Confirm Purchase</Button>
              </Box>
            </Modal>
          )
        }

        <Card sx={cardStyle}>
          {
            cartItems && cartItems.length > 0 ?
              cartItems.map((item) => (
                <CartItem
                  itemData={item}
                  key={item.id}
                  deleteCartItem={deleteCartItem}
                />
              )) : (
                <Typography></Typography>
              )
          }
          {
            cartItems && cartItems.length > 0 &&
            <>
              <Grid container>
                <Grid item xs={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  Total: {calcTotalPrice()}
                </Grid>
                <Grid item xs={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <CardActions>
                    <Button
                      size="medium"
                      sx={checkoutbtnStyle}
                      onClick={handlePopUp}
                      variant="contained"
                      color='inherit'
                    >
                      checkout
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </>
          }
          {
            cartItems && cartItems.length === 0 &&
            <CardActions sx={{display: 'flex', justifyContent: "center"}}>
              <Typography>Your cart is empty!</Typography>
              <RemoveShoppingCartIcon />
            </CardActions>
          }
        </Card>
        <Link to="/" style={{ textDecoration: "none", color:'black'}} >
          <Button variant="contained" size="medium" color='error' sx={{ mb: 3 }}>Go back</Button>
        </Link>
      </Container>
    </Container>
  )
}

export default Cart;


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}


const cardStyle = {
  display: "grid",
  alignItems: "center",
  textAlign: "center",
  gap: {lg:"30px", md: "20px", xs:"5px"},
  maxWidth: {lg:"800px", md: "600px", xs:"400px"},
  padding: "40px",
  margin: " 25px auto",
  borderBottom: "2px solid #D9D9D9"
}


const checkoutbtnStyle = {
  textTransform: "none"
}

