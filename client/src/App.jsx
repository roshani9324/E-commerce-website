 import React, { useContext } from 'react'
 import AppContext from './context/AppContext'
import ShowProduct from './components/product/ShowProduct'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductDetail from './components/product/ProductDetail'
import Navbar from './components/Navbar'
import SearchProduct from './components/product/SearchProduct'
import Register from './components/user/Register'


const  App =()=> {
 // const {data}=useContext(AppContext)
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App 