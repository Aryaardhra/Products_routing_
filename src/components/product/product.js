import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../product/ProductImg.css";

export default function Product() {

    const {id}= useParams();
    const initialState ={
      images: [""],
      title: "",
      description: "",
      rating: "",
      brand:"",
      price: null,
    };

    const [products, setProducts]= useState(initialState);

    useEffect(()=>{
      fetchDetails();
    }, [id]);

    const fetchDetails= async()=>{
      const response= await axios.get(`https://dummyjson.com/products/${id}` );
      console.log(response);
      setProducts(response.data);
    };
  return (
    <>
    <div className="main">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-md-6 ">
          <img src={products.images[0]} className=" img-fluid p-4 " alt="..." />
          </div>
            <div className=" col-md-6 p-4"> 
            <h5 className="card-title">Title: {products.title}</h5>
            <br/>
             <p className="card-text" ><b>Description:</b> {products.description}</p>
             <p className="card-text">
                <b>Price:</b>{products.price}
             </p>
             <p className="card-text" ><b>Rating:</b> {products.rating}</p>
             <p className="card-text" ><b>Brand:</b> {products.brand}</p>
             
          </div>
        </div>
      </div> 
      </div>
    </>
  );
}
