import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../api/dummy";
import { continueButton } from "../../assets";
import { Card } from "../../components";
import ImgSlider from "./ImgSlider";
import ProdSlider from "./ProdSlider";

const Information = () => {
  const context = useContext(ProductContext);

  // console.log(context.dataDariAPI)
  const randomData = context.productList.filter((idNumber) => {
    return idNumber.id < 4;
  });
  return (
    <div className="bg-dimGreen py-[40px] flex flex-row-reverse justify-center items-center px-[90px] gap-11">
      <div className=" flex flex-col basis-1/2 text-justify  text-white font-mulish font-semibold gap-7">
        <h1 className="text-[40px]">Tentang Kami</h1>
        <p className="text-[19px]">
          {" "}
          Easy Meal adalah platform e-commerce yang menghubungkan penjual bahan
          makanan food waste dengan pembeli untuk mengurangi limbah makanan.
          Bahan makanan dibeli langsung dari petani dan produsen lokal dengan
          harga murah, diolah, dan dikemas agar bertahan lebih lama. Konsumen
          dapat memesan bahan makanan melalui platform yang mudah digunakan.
          Easy Meal membantu meningkatkan penghasilan para petani dan produsen
          lokal dengan memperluas pasar mereka melalui platform online ini.
        </p>
      </div>

      <div className="basis-1/2 bg-white rounded-2xl w-full py-7  justify-center items-center flex flex-col  gap-4">
        <h1 className="text-[40px] font-mulish font-[670] ">Produk Kami</h1>
        <ul className="flex flex-row items-center gap-5 max-md:overflow-y-auto">
          <ProdSlider></ProdSlider>
        </ul>
      </div>
    </div>
  );
};

export default Information;
