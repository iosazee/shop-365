import React, {useState} from "react";
import { Card, Typography, CardActions, Button, Modal, Box } from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

    <section>
      {
        isPopUpOpen && (
          <Modal open={isPopUpOpen} onClose={handlePopUp} >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Thank you for your order
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Total amount is {calcTotalPrice()}
              </Typography>
              <Button onClick={confirmPurchase} >Confirm Purchase</Button>
            </Box>
          </Modal>
        )
      }

      <Card sx={cardStyle}>
        <Typography component="p">Item</Typography>
        <Typography component="div" />
        <Typography component="p">Price</Typography>
        <Typography component="p">Quantity</Typography>
        <Typography component="p">Remove</Typography>
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
            Total: {calcTotalPrice()}
            <CardActions>
              <Button
                size="small"
                sx={checkoutbtnStyle}
                onClick={handlePopUp}
                variant="contained"
              >
                checkout
              </Button>
            </CardActions>
          </>
        }
        {
          cartItems && cartItems.length === 0 &&
          <CardActions>
            <Typography>Your cart is empty!</Typography>
            <RemoveShoppingCartIcon />
            <Link to="/" >
              <ArrowBackIcon
                style={{ marginLeft: "100px", marginTop: "100px" }}
              />
            </Link>
          </CardActions>
        }
      </Card>

    </section>
  )
}

export default Cart


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
  gridTemplateColumns: {lg: "120px 120px auto auto auto", xs: "65px 65px auto auto auto"},
  alignItems: "center",
  textAlign: "center",
  gap: {lg:"30px", md: "20px", xs:"5px"},
  maxWidth: {lg:"800px", md: "600px", xs:"400px"},
  padding: "40px",
  margin: "100px auto",
  borderBottom: "2px solid #D9D9D9",
  backgroundColor: "aquamarine"
}


const checkoutbtnStyle = {
  textTransform: "none"
}

