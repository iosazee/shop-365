import { useState, useEffect } from 'react'
import ContactUs from './components/ContactUs';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <section className="App">
      <Routes>
          <Route path='/contact' element={ <ContactUs /> } />
      </Routes>

    </section>
  );
}

export default App;
