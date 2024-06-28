
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Product } from './Pages/Product';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { ShopCategory } from './Pages/ShopCategory';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import men_banner from "./components/assets/banner_mens.png"
import women_banner from "./components/assets/banner_women.png"
import kids_banner from "./components/assets/banner_kids.png"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory banner= {men_banner} category="men"/>}/>
          <Route path="/women" element={<ShopCategory banner = {women_banner} category = "women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category = "kids"/>}/>
          <Route path = "/product" element = {<Product />} >
            <Route path = ":productId" element = {<Product/>}/>
          </Route>
          <Route path = "/cart" element = {<Cart />}/>
          <Route path = "/login" element = {<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
