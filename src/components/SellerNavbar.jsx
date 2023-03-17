import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { aLogo, aLogoGreen, fotoProfil, greenLogo, riwayatlogo, shoopingCart } from '../assets'
import Search from './Search'


const SellerNavbar = () => {
 
const [isSpin, setIsSpin] = useState(false)
const [onHover, setHover] = useState(false)

  return (
    <section>
        <div className='flex flex-row justify-between items-center bg-neutral10 font-mulish font-bold px-[90px] py-4 text-[20px] mb-12'>
            <div>
                <ul className='text-green80 flex flex-row items-center justify-center gap-6'>
                    <ul className='flex flex-row gap-2 items-center justify-center mr-6'>
                        <li><img src={aLogoGreen} alt='' className={`w-[40px] hover:animate-spin hover:duration-300`}/></li>
                        <li className={`hover:text-green40 duration-500`}><Link to='/product-list'>Easy Meal</Link></li>
                    </ul>
                    <li><Link to='/'>Tentang Kami</Link></li>
                 
                </ul>
            </div>

            <div className=''>
                <ul className='text-green80 flex flex-row items-center justify-center gap-6'>
                    <li><Search></Search></li>
                        <ul className='text-[15px] flex flex-row justify-center items-center gap-2'>
                            <li><Link to='/profile'><img src={fotoProfil} alt='' className='w-[40px] rounded-full'></img></Link></li>
                        </ul>
                        <ul className='text-[15px] flex flex-row justify-center items-center gap-2'>
                            <li><img src={riwayatlogo} alt='' className='w-[20px]'></img></li>
                            <li><Link to='/riwayat'>Riwayat</Link></li>
                        </ul>
                        
                </ul>
              
            </div>
            
        </div>
    </section>
  )
}

export default SellerNavbar
