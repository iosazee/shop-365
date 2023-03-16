import { useState, useEffect } from 'react'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  console.log(products)

  return (
    <section className='App'>
      <Routes>
          <Route path='/' element={ <Products products={products} />} />
          <Route path='/contact' element={ <ContactUs /> } />
          <Route path='/products/:id'  element={ <ProductDetail /> } />
      </Routes>
    </section>
  )
}

export default App;