import React from "react";
import "./index.css";
import "./style";
import Home from "./pages/landingPage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// import ProductList from './pages/Homepage/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Cart from "./pages/cart/cart";
import { ProductProvider } from "./api/dummy";
import History from "./pages/history/History";
import Profile from "./pages/profile/Profile";
import LoginSeller from "./pages/loginSaller/LoginSeller";
import RegisterSellerForm from "./pages/loginSaller/RegisterSellerForm";
import RegisterSeller from "./pages/loginSaller/RegisterSeller";
import SellerHomepage from "./pages/sellerHomepage/SellerHomepage";
import { AuthProvider } from "./api/AuthContext";
import Loading from "./components/Loading";
import Comingsoon from "./pages/comingsoon/Comingsoon";
import Login_landingPage from "./pages/login_landingPage/Login_landingPage";

const LazyAbout = React.lazy(() => import("./pages/Homepage/ProductList"));

function App() {
  return (
    <Router>
      <ProductProvider>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              exact
              path="/product-list"
              element={
                <React.Suspense fallback="Loading">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/riwayat" element={<History></History>} />
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="/comingsoon" element={<Comingsoon></Comingsoon>} />
            <Route
              path="/login/seller"
              element={<LoginSeller></LoginSeller>}
            ></Route>
            <Route
              path="/register/seller"
              element={<RegisterSeller></RegisterSeller>}
            />
            <Route
              path="/homepage/seller"
              element={<SellerHomepage></SellerHomepage>}
            />
            <Route
              path="/login_landingPage"
              element={<Login_landingPage></Login_landingPage>}
            />
          </Routes>
        </AuthProvider>
      </ProductProvider>
    </Router>

    // // <Home></Home>
    // // <Login></Login>
    // // <Register/>
    // <ProductList/>
    // // <ImgSlider></ImgSlider>
  );
}

export default App;
