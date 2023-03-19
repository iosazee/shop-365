import { useState, useEffect } from 'react'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import NavBar from './components/NavBar';


function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // useEffect(() => {
  //   console.log(products)
  // }, [products])


  const addItemToCart = (itemToAdd) => {

    const itemIsInCart = cartItems.find((item) => item.id === itemToAdd.id)

    if (itemIsInCart) {
      itemIsInCart.count += 1

      const newCartItems = cartItems.map((item) => item.id === itemToAdd.id ? itemIsInCart : item)

      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems))
      setCartItems(newCartItems)
    } else {
      const newCartItems = [
        ...cartItems,
        { ...itemToAdd, count: 1 }
      ]
      setCartItems(newCartItems)
      window.localStorage.setItem("cartItems", JSON.stringify(newCartItems))
    }

  }

  const deleteCartItem = (itemToDelete) => {

    const newCartItems = cartItems.filter(cartItem => cartItem.id !== itemToDelete.id)
    setCartItems(newCartItems)
    window.localStorage.setItem("cartItems", JSON.stringify(newCartItems))
  }


  const deleteAllCartItems = () => {
    setCartItems([])
    window.localStorage.removeItem("cartItems")
  }


  return (
    <section className='App'>
      <NavBar/>
      <Routes>
        <Route exact  path='/' element={<Products products={products} />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/products/:id' element={<ProductDetail addItemToCart={addItemToCart} />} />
        <Route path='/cart'
          element={<Cart cartItems={cartItems}
            deleteCartItem={deleteCartItem}
            deleteAllCartItems={deleteAllCartItems}
          />}
         />
         <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </section>
  )
}

export default App;