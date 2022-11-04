import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AddProduct' element={<AddProduct/>}/>
    </Routes>
    
    </>
  );
}

export default App;
