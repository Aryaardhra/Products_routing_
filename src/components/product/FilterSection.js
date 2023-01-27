import React from 'react'
import { Link } from 'react-router-dom';
import './ProductsList.css'

export default function FilterSection( props ) {

  return (
    <>
  <div className="container-fluid my-4 ">
   <div className="row align-items-center gy-5  ">
          
        {props.products.map((prod)=>(
          <div className="col-md-4" key={prod.id}>
             
            <div className="card " >
           
            <img src={prod.images[0]}
             className="card-img-top p-5 " 
             height="200" width="200" 
             style={{height: "20em"}}
             alt="..."/>
                
                <div className="card-body" >
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">rating : {prod.rating}</p>
                  <p className="card-text">price : {prod.price}</p>
                  <button type="button" className="Primary">
                  <Link to= {`/Product/${prod.id}`}>Details</Link></button>
                </div>
             
             </div>
          </div>
        ))}
     </div>
   </div>
    </>
  );
}