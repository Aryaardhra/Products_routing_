import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import FilterSection from './FilterSection';

export default function CategorizedProduct() {

  const [products, setProducts]=useState([]);
 // const [category, setCategory] = useState("laptops");
 // console.log(category);

  useEffect(()=>{
      fetch("https://dummyjson.com/products")
      .then((response)=> response.json())
      .then((data)=> {
          console.log(data.products);
          setProducts(data.products);
          //setLoading(false);
  });
}, []); 
//debugger
const filterItem = (categoryItem) => {
  const updatedItems = products.filter((currItem)=> {
    return currItem.category === categoryItem;
  });
  console.log(updatedItems);
  setProducts(updatedItems);
 };

  return (
    <>
    < Header showParam/>
    <div className=" container">
        <div className=" row">
            <div className=" col-md-3 p-4 ">
              <button type="button" className="btn btn-outline-secondary m-4"
              onClick={()=> filterItem("smartphones")}>
               Smartphones </button><br/>
              <button type="button" className="btn btn-outline-secondary m-4"
              onClick={()=> filterItem("laptops")}>
               Laptops </button><br/>
              <button type="button" className="btn btn-outline-secondary m-4"
              onClick={()=> filterItem("fragrances")}>
              Fragrances </button><br/>
              <button type="button" className="btn btn-outline-secondary m-4"
              onClick={()=>filterItem("skincare")}>
               Skincare </button><br/>
              <button type="button" className="btn btn-outline-secondary m-4"
              onClick={()=> filterItem("groceries")}>
               Groceries </button><br/>
              <button type="button" className="btn btn-outline-secondary m-4"
              onClick={()=> filterItem("home-decoration")} >
               Home Decortion </button><br/> 
            </div>
           
            <div className= " col-md-9">
              <FilterSection
              products = {products}
              //category = {category}
              />
            </div>
        </div>
    </div>
    </>
  )
}