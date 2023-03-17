import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../api/AuthContext'
import { ProductContext } from '../api/dummy'
import { aLogo, aLogoGreen, defaultProfil, fotoProfil, greenLogo, riwayatlogo, shoopingCart } from '../assets'
import Search from './Search'

const NavbarLogin = ({image}) => {

const { setAuth, auth } = useContext(AuthContext)
const context = useContext(ProductContext)
const [isSpin, setIsSpin] = useState(false)
const [onHover, setHover] = useState(false)
console.log(auth)




  return (
    <section>
        <div className='flex flex-row justify-between items-center bg-neutral10 font-mulish font-bold px-[90px] py-4 text-[20px]'>
            <div>
                <ul className='text-green80 flex flex-row items-center justify-center gap-6 '>
                    <ul className='flex flex-row gap-2 items-center justify-center mr-6'>
                        <li><img src={aLogoGreen} alt='' className={`w-[40px] hover:animate-spin hover:duration-300`}/></li>
                        <li className={`hover:text-green40 duration-500`}><Link to='/product-list'>Easy Meal</Link></li>
                    </ul>
                    <li className={`hover:text-green40 duration-500`}><Link to='/login_landingPage'>Tentang Kami</Link></li>
                 
                </ul>
            </div>

            <div>
            <Search></Search>
            </div>

            <div className=''>
                <ul className='text-green80 flex flex-row items-center justify-center gap-8'>
                       
                        <ul className='text-[15px] flex flex-row justify-center items-center gap-2'>
                            <li><Link to='/cart' className=' font-extrabold text-[17px] text-red-400 mr-[-7px]  '>{context.cart.length}</Link></li>
                            <li><img src={shoopingCart} alt='' className='w-[20px]'></img></li>
                            <li className={`hover:text-green40 duration-500`}><Link to='/cart'>Keranjang</Link></li>
                        </ul>
                        <ul className='text-[15px] flex flex-row justify-center items-center gap-2'>
                            <li><img src={riwayatlogo} alt='' className='w-[20px]'></img></li>
                            <li className={`hover:text-green40 duration-500`}><Link to='/riwayat'>Riwayat</Link></li>
                        </ul>

                        <ul className='text-[15px] flex flex-row justify-center items-center gap-2'>
                            <li><Link to='/profile'><img src={context.preview ? context.preview : defaultProfil  } alt='' className='w-[50px] h-[50px] rounded-[50%]'></img></Link></li>
                        </ul>
                        
                </ul>
              
            </div>
            
        </div>
    </section>
  )
}

export default NavbarLogin
