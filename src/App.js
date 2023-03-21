import { useState, useEffect } from 'react'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Faq from './components/Faq';
import FeaturedProduct from './components/FeaturedProduct';
import { supabase } from './supabaseClient';
import './App.css';


function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchSubmiited, setSearchSubmission] = useState(false)
  const [error, setError] = useState(null)


  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
    if (e.target.value === "") {
      setSearchSubmission(false)
    }
  }


  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()

        if (error) {
          setError('Could not fetch products')
          setProducts(null)
          console.log(error)
        }

        if (data) {
          setError(null)
          setProducts(data)
          console.log(data)
        }
    }

    fetchProducts()
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
  }, [])


  const menProducts = products.filter(product => product.category === "men's clothing");
  const womenProducts = products.filter(product => product.category === "women's clothing");
  const electronicProducts = products.filter(product => product.category === "electronics");
  const jeweleryProducts = products.filter(product => product.category === "jewelery");

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


  const searchProducts = products.filter((el) => {
    return searchQuery !== "" && isSearchSubmiited
      ? el.title.toLowerCase().includes(searchQuery.toLowerCase()) ? el : null
      : null
  })


  return (
    <section className='App'>
      <NavBar
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
        setSearchSubmission={setSearchSubmission}
      />
      <Routes>
        <Route exact path='/' element={<> <FeaturedProduct products={products} /> <Products products={products} /> </>} />
        <Route path='/products/:id' element={<ProductDetail addItemToCart={addItemToCart} />} />
        <Route path='/cart'
          element={<Cart cartItems={cartItems}
            deleteCartItem={deleteCartItem}
            deleteAllCartItems={deleteAllCartItems}
          />}
        />
        <Route path='/products/search' element={<Products products={searchProducts} />} />
        <Route path='/products/mens' element={<Products products={menProducts} />} />
        <Route path='/products/womens' element={<Products products={womenProducts} />} />
        <Route path='/products/electronics' element={<Products products={electronicProducts} />} />
        <Route path='/products/jewelery' element={<Products products={jeweleryProducts} />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App;