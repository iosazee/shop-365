import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Navbar from './components/Navbar';
import Products from './components/Products';
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  console.log(products)

  return (
    <div className='App'>
      <Navbar />
      <Container maxWidth={'lg'} sx={{my: 4}}>
        <Products products={products} />
      </Container>
    </div>
  )
}

export default App;
