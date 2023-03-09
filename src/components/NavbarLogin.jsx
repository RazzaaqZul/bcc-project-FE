import React, { useState } from 'react'
import { aLogo, aLogoGreen, greenLogo, shoopingCart } from '../assets'
import Search from './Search'

const NavbarLogin = () => {

const [isSpin, setIsSpin] = useState(false)
const [onHover, setHover] = useState(false)

  return (
    <section>
        <div className='flex flex-row justify-between items-center bg-neutral20 font-mulish font-bold px-[90px] py-4 text-[20px] mb-12'>
            <div>
                <ul className='text-green80 flex flex-row items-center justify-center gap-6'>
                    <ul className='flex flex-row gap-2 items-center justify-center mr-6'>
                        <li><img src={aLogoGreen} alt='' className={`w-[40px] hover:animate-spin hover:duration-300`}/></li>
                        <li>Easy Meal</li>
                    </ul>
                    <li>Tentang Kami</li>
                    <li>Transaksi</li>
                </ul>
            </div>

            <div className=''>
                <ul className='text-green80 flex flex-row items-center justify-center gap-6'>
                    <li><Search></Search></li>
                        <ul className='text-[15px] flex flex-row justify-center items-center gap-2'>
                            <li><img src={shoopingCart} alt='' className='w-[20px]'></img></li>
                            <li>Keranjang</li>
                        </ul>
                </ul>
            </div>
            
        </div>
    </section>
  )
}

export default NavbarLogin
