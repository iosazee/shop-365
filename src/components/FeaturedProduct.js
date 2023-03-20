import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ products }) => {
  const selectedProduct = products.filter((item) => item.id === 14)[0];
  const image = selectedProduct?.image;
  const title = selectedProduct?.title;
  const id = selectedProduct?.id

  return (
        <Card
         style={{display: "flex", justifyContent: "space-evenly", height: "450px", backgroundColor: "#4a5568"}} >
          <Card >
              <LazyLoad height={400} offset={150} >
                  <CardMedia
                      sx={{ height: 400, width: "100%", margin: "8px" }}
                      image={image}
                      component="img"
                      title={title}
                  />
              </LazyLoad>
          </Card >
          <Card style={{display: "flex", flexDirection:"column", backgroundColor: "#011627", justifyContent:"center"}}>
          <CardContent style={{backgroundColor: "#f0f8ffe7",  }} >
            <Typography style={{ fontSize: 16, margin: "100px 4px", fontWeight: 700 }} gutterBottom >
                {title}
            </Typography>
            </CardContent>
            <CardActions style={{height:"fit-content", alignSelf:"center"}} >
                <Link to={`/products/${id}`} style={{textDecoration:"none" }} >
                    <Button  sx={{width:"460px", backgroundColor: "#e0faff",}} variant='outlined' size="large" >
                        50% Off! Buy Now!!!
                    </Button>
                </Link>
            </CardActions>
          </Card>
        </Card>
  );
};

export default FeaturedProduct;



