import React, { useEffect, useState } from 'react'
import { brokoli, leafBackground } from '../assets'
import ButtonAll from './ButtonAll'




const Hero = () => {
  
    
  return (
    <div className={`bg-leaf-pattern w-full`}>
        <ul className='px-[120px] flex flex-col md:flex-row lg:flex-none justify-center items-center'>
            <li className='bg-white font-inter rounded-2xl border-2  border-veryLightGreen  lg:w-[900px] lg:h-[320px] p-10'>
                <h2 className='text-dimGreen font-[550]  text-[20px] md:text-[30px] lg:text-[40px] lg:leading-[57px] '>Food Loss Bukan Sampah,<br/>Tetapi Sumber Keberlanjutan</h2>
                <p className='text-[16px] font-[650] py-[8px] leading-6'>Menerapkan hemat makanan dengan mengurangi food waste dapat membantu melindungi lingkungan dari dampak negatif limbah makanan.</p>
                <div className='py-4 '>
                <ButtonAll>MULAI</ButtonAll>
               
                </div>
            </li>
            <li>
                <div className='bg-gradientWhiteLR from-indigo-500 h-[679px] w-[550px] flex justify-center items-center '>

            <img src={brokoli} className='w-[350px]'></img>
                </div>

            </li>
        </ul>
      
    </div>
  )
}

export default Hero
