import React from "react";
import { greenLogo } from "../../assets";
import FormLogin from "./FormLogin";
import ImgSliderLogin from "./ImgSliderLogin";

const Login = () => {
  return (
    <section>
      <div className="flex justify-center items-center ">
        <div className="basis-1/2">
          <ImgSliderLogin height="h-[100vh]"></ImgSliderLogin>
        </div>
        <div className="basis-1/2 px-44 max-md:px-[20px] ">
          <div className="flex justify-center flex-col gap-4">
            <div>
              <img src={greenLogo} className="w-[150px]" alt="" />
            </div>
            <div>
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
