import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

 

  return (
    <Card sx={{boxShadow: 'none', border: '1px solid #ccc'}}>
      <CardMedia
        sx={{ height: 500 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography align="center" component="p" sx={{ minHeight: 70 }}>
            {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/cart" ><Button sx={{ width: '50%'}} variant='outlined' size='small' startIcon={<AddShoppingCartOutlinedIcon />}> £{product.price.toFixed(2)}</Button> </Link>
        <Link to={`/products/${product.id}`} style={{width:"50%", textDecoration:"none"}} >
          <Button sx={{width:"160px"}} variant='outlined'
            color='success' size='small'>Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard
