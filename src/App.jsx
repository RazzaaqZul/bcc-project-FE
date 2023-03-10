import React from 'react';
import './index.css';
import './style'
import styles from './style';

import { Navbar, Hero, Footer, Button, Information2} from './components';
import Home from './pages/home/Home';
import ImgSlider from './pages/home/ImgSlider';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
// import ProductList from './pages/Homepage/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailProduct from './pages/detailProduct/DetailProduct';
import Cart from './pages/cart/cart';
const LazyAbout = React.lazy(() => import('./pages/Homepage/ProductList'))

function App() {
  return ( 
     
    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route 
          exact path='/product-list' 
          element={
            <React.Suspense fallback='Loading'>
              <LazyAbout/>
            </React.Suspense>}/>
        <Route path='/detail-product/:id' element={<DetailProduct/>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
      </Routes>
    </Router>

  // // <Home></Home>
  // // <Login></Login>
  // // <Register/>
  // <ProductList/>
  // // <ImgSlider></ImgSlider>
  );
}

export default App;
