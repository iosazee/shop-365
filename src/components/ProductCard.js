import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const ProductCard = ({product}) => {


  return (
    <Card sx={{boxShadow:'black', border: '1px solid #ccc'}}>
      <LazyLoad height={500} offset={200} >
        <CardMedia
          sx={{ height: 500 }}
          image={product.image}
          title={product.title}
        />
      </LazyLoad>
      <CardContent>
        <Typography align="center" component="p" sx={{ minHeight: 70 }}>
            {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/products/${product.id}`}  style={{width:"100%", textDecoration:"none"}} >
          <Button fullWidth={true} variant='outlined' size='medium' sx={{backgroundColor: "#D1D1D1", color:"black", border: 'black solid 1px'}} color='error'>
          £{product.price.toFixed(2)} - Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard
