import { Grid } from '@mui/material'
import ProductCard from "./ProductCard"

const Products = ({products}) => {
  return (
    <Grid container spacing={3}>
        {products.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={6} lg={4}>
                <ProductCard product={product} />
            </Grid>
        ))}        
    </Grid>
  )
}

export default Products
