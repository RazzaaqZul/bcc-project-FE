import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {img1, img2, img3, imgInformation3 } from '../../assets'
import ButtonAll from '../../components/ButtonAll';
import ImgSlider from './ImgSlider';


const Information3 = () => {
  

const images = [img1,img2,img3]
  const [currentImage, setCurrentImage] = useState(null);
  // const classChange = useRef(null)
  // console.log(classChange.current)
 
  
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentImage(images[Math.floor(Math.random() * images.length)])
    },2000)
   
    return () => clearInterval(intervalId)
  },[])

  const heading = () => {
    return `text-dimGreen text-[20px] font-extrabold font-mulish group-hover:text-white duration-300 `
  }

  const desc = () => { 
    return `'font-medium text-[15px] text-neutral70 group-hover:text-white duration-300 leading-[23px] `
  }

  const groupHover = () => {
    return `bg-veryLightGreen20 rounded-[25px] p-3 hover:bg-gradient-green  group `
  }


  return (
    <div className='bg-green30 flex flex-row-reverse justify-center items-center  gap-6 py-16 anime'>
      <div className='basis-[50%] px-[90px] flex flex-col justify-center gap-2'>
        <div className='font-[650] text-[40px] text-dimGreen font-mulish leading-[45px] animate-fade-in-down'>
            <h1 >Jual Imperfect Foodmu di Easy Meal, Beri Makanan Berkualitas untuk Semua!</h1>
        </div>
        <div className='my-2'>
            <h1 className='font-bold text-[15px] text-green80 font-mulish '>
            Jual makanan imperfect di Easy Meal untuk makanan berkualitas dan kurangi limbah.
            </h1>
        </div>
        <div>
            <ButtonAll><Link to='/comingsoon'>MASUK SEBAGAI PENJUAL</Link></ButtonAll>
        </div>
      </div>
      <div className='basis-[50%] flex justify-center items-center'>
     
 
        {/* <img src={currentImage} className={fade?'animate-fade-in-down':'animate-fade-in-down'}></img> */}
        <img src={imgInformation3} alt="gambar-pedagang" className='w-[600px] h-[400px]'></img>
      </div>
    </div>
  )
}


export default Information3