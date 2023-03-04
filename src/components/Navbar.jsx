import React from 'react'
import { logo } from '../assets'
import Button from './Button'

import { navLinks } from '../constants'


const Navbar = () => {
  return (
    <nav className="w-full flex py-[37px] sm:px-[120px] justify-between items-center navbar bg-dimGreen h-[70px] ">
        <ul className='flex  '>
            <img src={logo} alt="FoodLoss" className='sm:w-[150px] h-[48px]'/>
        </ul>
        <ul className={`list-none flex  gap-[65px] text-white cursor-pointer `}>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`py-[10px] text-[16px] font-bold ${index === 0 ? 'ml-[0]' : 'mr-[]'} hover:text-gray-400`}>
                    {nav.title}
                </li>
            ))}
            <li><Button/></li>
        </ul>
        
        
    </nav>

    
      )
}

export default Navbar
