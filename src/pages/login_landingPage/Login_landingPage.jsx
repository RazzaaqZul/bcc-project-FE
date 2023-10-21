import React from "react";
import { Footer, Hero } from "react-daisyui";
import NavbarLogin from "../../components/NavbarLogin";
import Information from "../landingPage/Information";
import Information2 from "../landingPage/Information2";
import Information3 from "../landingPage/Information3";
import HeaderProfile from "../profile/HeaderProfile";
import LoginHero from "./LoginHero";

const Login_landingPage = () => {
  return (
    <div>
      <NavbarLogin></NavbarLogin>
      <LoginHero></LoginHero>
      <Information></Information>
      <Information2></Information2>
      <Information3></Information3>

      <Footer></Footer>
    </div>
  );
};

export default Login_landingPage;
