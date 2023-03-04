import React, { useEffect, useState } from 'react'
import { brokoli } from '../assets'
import ButtonAll from './ButtonAll'

const Card = ({product}) => {
   
console.log(product.title)

  return (
    <div className='bg-white flex flex-col w-[300px] gap-2'>
        <div className='bg-slate-200 flex justify-center items-center'>
            <img src={brokoli} className="h-20px w-[250px] p-[30px]"></img>
        </div>
        <div className='flex justify-between items-center '>
            <div className='text-gray-500 text-[20px]'>
               {product.body}
            </div>
            <div className='font-semibold text-[29px]'>
               {product.datetime}
            </div>
        </div>
        <div className='text-dimGreen font-semibold text-[29px]' >
            <p>{product.title}</p>
        </div>
        <div className='flex justify-center items-center'>
        <ButtonAll>TAMBAHKAN KE KERANJANG</ButtonAll>
        </div>
      
    </div>
  )
}

export default Card
