import React from 'react'
import Navbar from '../navbar/Navbar';

export default function Header({showParam}){
  
  return (
    <>
    <div className="header bg-info">
        <div className= "container-fluid ">
            <div className=" row g-0 ">
            <div className="  col-md-6">
            <span style={{fontSize:'37px'}}>PRODUCTS</span>
            </div>
                <div className="  active col-md-6 " >
                  {showParam && <Navbar/>}
                </div>
           </div>
        </div>
     </div>
    </>
  );
}
