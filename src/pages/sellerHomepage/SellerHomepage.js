import React from "react";
import { Navbar } from "react-daisyui";
import SellerNavbar from "../../components/SellerNavbar";
import Catalog from "../Homepage/Catalog";
import PesananMasuk from "./PesananMasuk";

const SellerHomepage = () => {
  return (
    <>
      <SellerNavbar></SellerNavbar>
      <div>
        <div className="bg-green60 p-14 px-[90px] font-mulish flex flex-col gap-4">
          <h1 className="font-extrabold text-[32px] text-white">
            Pesanan Masuk
          </h1>

          <div className="">
            <PesananMasuk></PesananMasuk>
            <PesananMasuk></PesananMasuk>
            <PesananMasuk></PesananMasuk>
            <PesananMasuk></PesananMasuk>
          </div>
        </div>

        <div className="px-[90px] py-[20px]">
          <Catalog></Catalog>
        </div>
      </div>
    </>
  );
};

export default SellerHomepage;
