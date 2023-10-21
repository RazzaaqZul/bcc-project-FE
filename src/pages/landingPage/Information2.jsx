import React, { useEffect, useState } from "react";
import { img1, img2, img3 } from "../../assets";
import ImgSlider from "./ImgSlider";

const images = [img1, img2, img3];

const Information2 = () => {
  const [currentImage, setCurrentImage] = useState(null);
  // const classChange = useRef(null)
  // console.log(classChange.current)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const heading = () => {
    return `text-dimGreen text-[20px] font-extrabold font-mulish group-hover:text-white duration-300 `;
  };

  const desc = () => {
    return `'font-medium text-[15px] text-neutral70 group-hover:text-white duration-300 leading-[23px] `;
  };

  const groupHover = () => {
    return `bg-veryLightGreen20 rounded-[25px] p-3 hover:bg-gradient-green  group `;
  };

  return (
    <div className="flex justify-center items-center  gap-6 py-16 anime">
      <div className="basis-[60%] px-[90px] flex flex-col justify-center gap-2">
        <div className="font-[650] text-[40px] text-dimGreen font-mulish leading-[45px] animate-fade-in-down">
          <h1>
            Manfaatkan Food Loss, Kurangi
            <br />
            Limbah, Hemat Biaya, dan Lebih Kreatif!
          </h1>
        </div>
        <div className="my-2">
          <h1 className="font-bold text-[15px]  ">
            Dengan memanfaatkan bahan makanan food loss, kita dapat mengurangi
            limbah makanan, menghemat biaya, dan lebih kreatif dalam memasak.
          </h1>
        </div>
        {/* Benefit */}
        <div className="flex flex-col gap-4 ">
          <div className={groupHover()}>
            <h1 className={heading()}>Mengurangi biaya makanan</h1>
            <p className={desc()}>
              Bahan makanan food loss biasanya dapat diperoleh dengan harga yang
              lebih murah, sehingga dapat membantu mengurangi biaya makanan
            </p>
          </div>
          <div className={groupHover()}>
            <h1 className={heading()}>Mengurangi limbah makanan</h1>
            <p className={desc()}>
              Dengan menggunakan bahan makanan food loss, kita dapat mengurangi
              jumlah limbah makanan yang dihasilkan, sehingga dapat membantu
              mengurangi dampk negatifnya pada lingkungan
            </p>
          </div>
          <div className={groupHover()}>
            <h1 className={heading()}>Mendukung keberlanjutan makanan</h1>
            <p className={desc()}>
              Penggunaan bahan makanan food loss dapat membantu mendukung
              keberlanjutan pangan,karena kita tidak membuang bahan makanan yang
              sebenarnya masih bisa dimanfaatkan
            </p>
          </div>
        </div>
      </div>
      <div className="basis-[40%]">
        {/* <img src={currentImage} className={fade?'animate-fade-in-down':'animate-fade-in-down'}></img> */}
        <ImgSlider></ImgSlider>
      </div>
    </div>
  );
};

export default Information2;
