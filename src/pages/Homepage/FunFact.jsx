import React, { useEffect, useState } from "react";
import { funfact } from "../../constants";
import styles from "../../style";

const FunFact = () => {
  const [currentCircle, setCurrentCircle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    console.log(slideIndex + "akibat gotoSlie");
    setCurrentIndex(slideIndex);
    setCurrentCircle(true);
  };

  // const prevSlide = () => {
  //     const isFirstSlide = currentIndex === 0
  //     const newIndex = isFirstSlide ? funfact.length-1 : currentIndex -1
  //     setCurrentIndex(newIndex)
  // }
  const nextSlide = () => {
    const isLastSlide = currentIndex === funfact.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentCircle(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 15000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section>
      <div
        className={`max-sm:h-[550px] h-[370px] mt-12 relative flex flex-col  bg-white rounded-2xl shadow-[0_40px_70px_-20px_rgba(0,0,0,0.4)]  w-full`}
      >
        {/* Image Here to display */}
        <div
          style={{ backgroundImage: `url(${funfact[currentIndex].image})` }}
          className="w-full h-60 bg-center bg-cover duration-700 rounded-t-2xl "
        ></div>

        <div className="h-[80px] font-extrabold pt-4 mb-5 px-20 text-[19px]">
          {funfact[currentIndex].desc}
        </div>

        <div className="flex flex-row justify-center items-center gap-6">
          {funfact.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer "
            >
              <div
                className={`${styles.buttonCircleOnClick} hover:bg-dimGreen `}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
