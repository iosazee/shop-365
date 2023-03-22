import React, {useState, useEffect} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useParams, Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';



const ProductDetail = ({addItemToCart}) => {

    const [selectedProduct, setSelectedProduct] = useState(null)
    let {id} = useParams()


    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(resp => resp.json())
            .then(resp => {
                // console.log(resp)
                setSelectedProduct(resp)
            })
            .catch((error) => console.error(error))
    }

    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<StarIcon key={i} style={{color:"yellow"}} />);
            } else {
                stars.push(<StarBorderIcon key={i} style={{color:"yellow"}} />);
            }
        }
        return stars;
    };


    return (
        <Container sx={{flexGrow:1, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card elevation={0} sx={{background: "transparent"}}>
                {
                    selectedProduct ? (
                        <Card variant="outlined" sx={{ padding: "20px 5px" }} >
                            <Grid container>  
                                <Grid item xs={12} sm={6}>                        
                                    <LazyLoad height={350} offset={70} >
                                        <CardMedia
                                            sx={{ height: "100%", objectFit: "contain" }}
                                            component="img"
                                            image={selectedProduct.image}
                                            title={selectedProduct.title}
                                        />
                                    </LazyLoad>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {selectedProduct.title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {selectedProduct.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {selectedProduct.description}
                                        </Typography>
                                        <Typography variant="body2" style={{backgroundColor:"#394150", color:"#fff", borderRadius: "8px"}} component="div" my={2} > <Typography>Rating:</Typography>
                                            {selectedProduct.rating && getRatingStars(selectedProduct.rating.rate)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                                        <Button variant="contained" size="small" onClick={() => addItemToCart(selectedProduct)} data-testid="add-to-cart" >Add to Cart</Button>
                                        <Link to="/cart" style={{ textDecoration: "none" }} ><Button variant="contained" size="small" >View Cart</Button></Link>
                                        <Link to="/" style={{ textDecoration: "none" }} ><Button variant="outlined"size="small" >Go back</Button></Link>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    ) : (
                        <Typography>Loading...</Typography>
                    )
                }
            </Card>
        </Container>
    );
}

export default ProductDetail;