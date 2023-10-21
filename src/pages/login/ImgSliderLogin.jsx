import React, { useEffect, useState } from "react";
import { imgLoginRegis, imgLoginRegis2, imgLoginRegis3 } from "../../assets";

const ImgSliderLogin = ({ height }) => {
  // Import Image
  const imageSlides = [
    {
      img: imgLoginRegis,
    },
    {
      img: imgLoginRegis2,
    },
    {
      img: imgLoginRegis3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //     const isFirstSlide = currentIndex === 0
  //     const newIndex = isFirstSlide ? imageSlides.length-1 : currentIndex -1
  //     setCurrentIndex(newIndex)
  // }

  useEffect(() => {
    for (let i = 0; i < imageSlides.length; i++) {
      setTimeout(() => {
        const nextSlide = () => {
          const isLastSlide = currentIndex === imageSlides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        };
        nextSlide();
      }, 5000);
    }
  });

  return (
    <div className={`${height} w-full relative`}>
      {/* Image Here to display */}
      <div
        style={{ backgroundImage: `url(${imageSlides[currentIndex].img})` }}
        className="w-full h-full  bg-center bg-cover duration-500"
      ></div>
    </div>
  );
};

export default ImgSliderLogin;
