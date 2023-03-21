import React, {useState, useEffect} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
        <Card  style={{backgroundColor: "#a3b1c699"}} >
            {
                selectedProduct ? (
                    <Card sx={{ maxWidth: 345, margin: "40px auto", padding: "20px 5px" }} >
                        <LazyLoad height={140} offset={70} >
                            <CardMedia
                                sx={{ height: 140, objectFit: "contain" }}
                                component="img"
                                image={selectedProduct.image}
                                title={selectedProduct.title}
                            />
                        </LazyLoad>
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
                        <CardActions>
                            <Button size="small" onClick={() => addItemToCart(selectedProduct)} data-testid="add-to-cart" >Add to Cart</Button>
                            <Link to="/cart" style={{ textDecoration: "none" }} ><Button size="small" >View Cart</Button></Link>
                            <Link to="/" style={{ textDecoration: "none" }} ><Button size="small" >Go back</Button></Link>
                        </CardActions>
                    </Card>
                ) : (
                    <Typography>Loading...</Typography>
                )
            }
        </Card>


    );
}

export default ProductDetail;