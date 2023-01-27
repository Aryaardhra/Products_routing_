import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import LogIn from './components/login/LogIn'
import SignUp from './components/signup/SignUp'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Product from './components/product/product'
import'./App.css';
import CategorizedProducts from './components/product/CategorizedProducts'

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
        <Route  path="/CategorizedProducts" element={<CategorizedProducts />} />
        <Route  exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  );
}

