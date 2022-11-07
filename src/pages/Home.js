import axios from "axios";
import React from "react";


const Home = (props) => {

  
    return(
    
       //<h1>Home</h1>
       <div className="container mt-5">
       <div className="row">
         <div className="col col-6">
         <ul className="list-group" >
           {
             props.products.map(function(product,index){
               return( <li key={index} className="list-group-item">
               <div><img src={product.image} style={{ height: '6rem'}}/></div>
               <div>{product.name}</div>
               <div>{product.price}</div>
             </li>)
             })
           }
  
 
  
 </ul>
 
         </div>
         </div>
         </div>
    )
}


export default Home