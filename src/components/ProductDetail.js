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
import { supabase } from '../supabaseClient';



const ProductDetail = ({addItemToCart}) => {

    const [selectedProduct, setSelectedProduct] = useState(null)
    let {id} = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const {data, error} = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .limit(1)

            if (error) {
                console.error("Error fetching product", error.message)
            }

            if (data) {
                // console.error(null)
                setSelectedProduct(data)
                // console.log(data)
            }
        }

        fetchProduct()
    }, [id])


    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<StarIcon key={i} style={{ color: "yellow" }} />);
            } else {
                stars.push(<StarBorderIcon key={i} style={{ color: "yellow" }} />);
            }
        }
        return stars;
    };


    return (
        <Container sx={{flexGrow:1, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card elevation={0} sx={{background: "transparent", my:3}}>
                {
                    selectedProduct ? (
                        <Card sx={{padding: "20px 5px" }} >
                            <Grid container> 
                                <Grid item xs={12} sm={6}>
                                    <LazyLoad height={350} offset={70} >
                                        <CardMedia
                                            sx={{ height: "100%", objectFit: "contain" }}
                                            component="img"
                                            image={selectedProduct[0].image}
                                            title={selectedProduct[0].title}
                                        />
                                    </LazyLoad>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {selectedProduct[0].title}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {selectedProduct[0].price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {selectedProduct[0].description}
                                        </Typography>
                                        <Typography variant="body2" style={{backgroundColor:"#394150", color:"#fff", borderRadius: "8px"}} component="div" my={2} > <Typography>Rating:</Typography>
                                            {selectedProduct && getRatingStars(selectedProduct[0].rating)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                                        <Button variant="contained" size="small" onClick={() => addItemToCart(selectedProduct[0])} data-testid="add-to-cart" color='inherit' sx={{mr:12 }} >Add to Cart</Button>
                                        <Link to="/cart" style={{ textDecoration: "none", color: 'inherit' }} ><Button variant="contained" size="small" color='inherit'>View Cart</Button></Link>
                                    </CardActions>
                                </Grid>
                            </Grid>
                        </Card>
                    ) : (
                        <Typography>Loading...</Typography>
                    )
                }
                <Link to="/" style={{ textDecoration: "none", color:'black'}} >
                    <Button variant="contained" size="medium" color='error' sx={{ mt: 3 }}>Go back</Button>
                </Link>
            </Card>
        </Container>
    );
}

export default ProductDetail;

