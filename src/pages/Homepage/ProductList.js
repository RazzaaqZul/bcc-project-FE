import React, { useContext, useEffect, useState } from "react";
import AuthContext, { AuthProvider } from "../../api/AuthContext";
import { ProductContext, ProductProvider } from "../../api/dummy";
import { DataProductProvider } from "../../api/product";
import { Footer } from "../../components";
import NavbarLogin from "../../components/NavbarLogin";
import styles from "../../style";
import Catalog from "./Catalog";
import FunFact from "./FunFact";

const ProductList = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const context = useContext(ProductContext);
  const [filter, setFilter] = useState(0);
  console.log(auth);
  console.log(auth.user_image);
  useEffect(() => {
    context.setPreview(auth.user_image);
    console.log(context.productList);
    console.log(filter);
    console.log(context.search);
  }, [filter]);

  return (
    <>
      <AuthProvider>
        <NavbarLogin></NavbarLogin>
      </AuthProvider>
      <div className=" font-mulish flex flex-col justify-center gap-8">
        <div className="px-[90px]">
          <FunFact></FunFact>
          <h1 className="text-[35px] text-green90 font-extrabold py-5">
            Untuk Anda
          </h1>

          <div className="flex flex-row items-center gap-6 mb-8">
            <a
              href="#all"
              className="font-display max-w-sm text-xl  font-bold leading-tight"
            >
              <span
                id="#all"
                className={`link link-underline link-underline-black text-green40 hover:text-green80 ${
                  filter === 0 ? "text-green80 linkOnHere" : ""
                } `}
                onClick={() => {
                  setFilter(0);
                }}
              >
                {" "}
                All{" "}
              </span>
            </a>

            <a
              href="#sayur"
              className="font-display max-w-sm text-xl  font-bold leading-tight"
            >
              <span
                id="sayur"
                className={`link link-underline link-underline-black text-green40 hover:text-green80 ${
                  filter === 1 ? "text-green80 linkOnHere " : ""
                } `}
                onClick={() => {
                  setFilter(1);
                }}
              >
                {" "}
                Sayur{" "}
              </span>
            </a>

            <a
              href="#buah"
              className="font-display max-w-sm text-xl  font-bold leading-tight"
            >
              <span
                id="buah"
                class={`link link-underline link-underline-black text-green40 hover:text-green80 ${
                  filter === 2 ? "text-green80 linkOnHere " : ""
                } `}
                onClick={() => {
                  setFilter(2);
                }}
              >
                {" "}
                Buah{" "}
              </span>
            </a>
          </div>
          <Catalog filter={filter} search={context.search}></Catalog>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ProductList;
