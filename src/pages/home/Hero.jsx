import React, { useEffect, useState } from 'react'
import { brokoli, heroLandingPage, leafBackground } from '../../assets'
import ButtonAll from '../../components/ButtonAll'
import { Link } from 'react-router-dom'



const Hero = () => {
  
    
  return (
    <section className="bg-leaf-pattern min-w-full min-h-screen flex justify-center items-center">
        <div className='px-[90px]  flex flex-row items-center w-full max-md:flex-wrap  '>
            <div className='bg-white font-inter rounded-2xl border-2 flex flex-col justify-center gap-4 place-items-start border-veryLightGreen p-9 basis-[50%] '>
                <h2 className='text-dimGreen font-bold font-mulish text-[40px] leading-[50px]'>Food Loss Bukan Sampah,<br/>Tetapi Sumber Keberlanjutan</h2>
                <p className='font-inter font-[650] text-[14px]'>Menerapkan hemat makanan dengan mengurangi food waste dapat membantu melindungi lingkungan dari dampak negatif limbah makanan.</p>
                <div className=' '>
                <ButtonAll><Link to={'/product-list'}>MULAI</Link></ButtonAll>
                </div>
            </div>
                <div className='bg-gradientWhiteLR from-indigo-500 flex justify-center items-center basis-[50%] min-h-screen min-w-fit'>

            <img src={heroLandingPage} className='w-[350px]'></img>
                </div>

               
        
        </div>
        </section>
      
   
  )
}

export default Hero
