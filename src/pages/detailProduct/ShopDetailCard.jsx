import React from 'react'
import { brokoli, location, logoToko1 } from '../../assets'

const ShopDetailCard = ({product}) => {
  return (
    <div className='bg-white shadow-[0_40px_70px_-20px_rgba(0,0,0,0.4)] py-3'>
        <div className='flex flex-row gap-4 items-center justify-center px-3 text-green80'>
            <div className='basis-[15%] flex justify-center'>
                <img src={logoToko1} className='rounded-[500%] bg-sky-300 w-[60px]' alt=''></img>
            </div>
            <div className=' basis-[40%] flex flex-col gap-2'>
                <h1 className='text-[15px] font-extrabold'>{product.seller.shop}</h1>
                <div className='flex flex-row text-[13px]'>
                    <p className='basis-1/2 font-medium '>Produk</p>
                    <p className='basis-1/2 font-extrabold'>{product.stock}</p>
                </div>
                <div className='flex flex-row text-[13px]'>
                    <p className='basis-1/2 font-medium '>Bergabung</p>
                    <p className='basis-1/2 font-extrabold'>1 bulan yang lalu</p>
                </div>
            </div>
            <div className='basis-[45%] h-fit  flex flex-row border-[1px] p-2 ml-14 border-green80 rounded-3xl justify-center gap-2'>
                <img src={location} alt='' className='w-[20px]'></img>
                <button className=' text-[15px] font-extrabold tracking-widest'>LIHAT LOKASI</button>
            </div>

        </div>
      
    </div>
  )
}

export default ShopDetailCard
