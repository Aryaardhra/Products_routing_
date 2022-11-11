import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import LogIn from './components/login/LogIn'
import ProductsList from './components/product/ProductsList'
import SignUp from './components/signup/SignUp'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Product from './components/product/product'
import'./App.css';

export default function App() {
  return (
    <>
    
    < div className="App">
    <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route  path="/home" element={<Home />} />
        <Route  exact path="/product/:id" element={<Product />} />
        <Route exact path="/ProductsList" element={<ProductsList />} />
        <Route  exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  );
}

