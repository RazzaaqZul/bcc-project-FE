import React from "react";
import { greenLogo } from "../../assets";
import ImgSliderLogin from "../login/ImgSliderLogin";
import RegisterSellerForm from "./RegisterSellerForm";

const RegisterSeller = () => {
  return (
    <section>
      <div className="flex justify-center items-center ">
        <div className="basis-1/2">
          <ImgSliderLogin height="h-[140vh]"></ImgSliderLogin>
        </div>
        <div className="basis-1/2 px-40 max-md:px-[20px] ">
          <div className="flex justify-center flex-col gap-4">
            <div>
              <img src={greenLogo} className="w-[150px]" alt="" />
            </div>
            <div>
              <RegisterSellerForm></RegisterSellerForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterSeller;
