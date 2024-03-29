import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/new_arrivals' element={<ShopCategory banner={men_banner} category='new_arrival'/>}></Route>
          <Route path='/merch' element={<ShopCategory banner={women_banner} category='merch'/>}></Route>
          <Route path='/accessory' element={<ShopCategory banner={kid_banner} category='accessorys'/>}></Route>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
