import { Grid } from '@mui/material'
import ProductCard from "./ProductCard"
import { Container } from '@mui/material'

const Products = ({products}) => {
  return (
    <Container  maxWidth={'lg'} sx={{my: 4}} >
       <Grid container spacing={3}>
        {products.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={6} lg={4}>
                <ProductCard product={product} />
            </Grid>
        ))}
    </Grid>
    </Container>
   
  )
}

export default Products
