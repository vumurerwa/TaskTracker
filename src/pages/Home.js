import React from "react";
import { useState } from 'react';
import iPhone6 from '../image/iPhone6.PNG'
import iPhone7 from '../image/iPhone7.PNG';
import iPhone8 from '../image/iPhone8.PNG';
const Home = () => {
    const [product, setProduct] = useState({image:"",name:"",price:""});
    const [products, setProducts] = useState([ {
      image: iPhone6,
      name: "iPhone6",
      price: "150$"
    },
    {
      image: iPhone7,
      name: "iPhone7",
      price: "250$"
    },
    {
      image: iPhone8,
      name: "iPhone8",
      price: "400$"
    }]);
  
    const changeProduct = (e)=>{
      setProduct({...product,[e.target.name]:e.target.value})
  
    }
  
    const addProduct=()=>{
      setProducts([...products,product])
      setProduct({image:"",name:"",price:""})
    }
    return(
        <>
        <h1>Home</h1>
        <div className="container mt-5">
      <div className="row">
        <div className="col col-6">
        <ul className="list-group" >
          {
            products.map(function(product,index){
              return( <li key={index} className="list-group-item">
              <div><img src={product.image} style={{ height: '6rem'}}/></div>
              <div>{product.name}</div>
              <div>{product.price}</div>
            </li>)
            })
          }
 

 
</ul>

        </div>

   
    <div className="col col-6">
          <div className="mb-3">
               <label className="form-label">Product</label>
               <input value={product.image} onChange={changeProduct} name='image' type="url" className="form-control" placeholder="Product image"/>
          </div> 
          <div className="mb-3">
               <label className="form-label">Name</label>
               <input value={product.name} onChange={changeProduct} name='name' type="text" className="form-control" placeholder="Product name"/>
         </div>
         <div className="mb-3">
              <label className="form-label">Price</label>
              <input value={product.price} onChange={changeProduct} name='price' type="text" className="form-control" placeholder="Product price"/>
         </div>
        <div className="mb4">
             <button onClick={addProduct} className='btn btn-warning'>Add Product</button>
        </div>
 


     </div>
      </div>

    </div>
        </>
    )
}


export default Home