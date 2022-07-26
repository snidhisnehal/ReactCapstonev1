import './App.css';
import '../src/Scss/Library/index.css'
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Pages/Home/home'
import ProductListing from '../src/Pages/ProductListing/productisting'
import Navbar from '../src/Components/Header/navbar'
import Footer from '../src/Components/Footer/mainfooter'
import SubFooter from '../src/Components/Footer/lowerfooter'
import SingleProduct from './Pages/ProductDetails/SinglePrduct';
import CartItems from './Pages/Cart/CartItems';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/product" element={<ProductListing />} /> 
        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route exact path="/cart" element={<CartItems/>} />  
      </Routes> 
     <Footer/>
     <SubFooter/>
    </div>
  );
}

export default App;
