import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams, Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ProductDetail = ({addItemToCart}) => {

    const [selectedProduct, setSelectedProduct] = useState({})
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
    }


    return (
        <Card sx={{ maxWidth: 345, margin:"40px auto", padding:"20px 5px" }} >
            <LazyLoad height={140} offset={70} >
                <CardMedia
                    sx={{ height: 140, objectFit:"contain" }}
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
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addItemToCart(selectedProduct)} >Add to Cart</Button>
                <Link to="/cart" style={{textDecoration:"none"}} ><Button size="small" >View Cart</Button></Link>
                <Link to="/" style={{textDecoration:"none"}} ><Button size="small" >Go back</Button></Link>
            </CardActions>
        </Card>
    );
}

export default ProductDetail