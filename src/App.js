
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Men from './Pages/Men';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assetss/banner_mens.png'
import women_banner from './Components/Assetss/banner_women.png'
import kid_banner from './Components/Assetss/banner_kids.png'
import Login from './Pages/Login';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route exact path='/' element={<Shop/>} />
    <Route exact path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
    <Route exact path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
    <Route exact path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
    <Route exact path='/product' element={<Product/>}>
    <Route exact path=':ProductId' element={<Product/>} />
    </Route>
    <Route exact path='/cart'  element={<Cart/>} />
    <Route exact path='/login'  element={<Login/>} />
    <Route exact path='/singup'  element={<LoginSignup/>} />


    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
