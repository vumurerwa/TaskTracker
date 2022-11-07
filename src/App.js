import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import { useState } from 'react';
import iPhone6 from './image/iPhone6.PNG'
import iPhone7 from './image/iPhone7.PNG';
import iPhone8 from './image/iPhone8.PNG';

function App() {
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
 

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home products={products}/>}/>
      <Route path='/AddProduct' element={<AddProduct addProduct={addProduct} changeProduct={changeProduct}/>}/>
    </Routes>


   
 
      
    
    </>
  );
}

export default App;
