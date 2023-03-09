import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
      <button className='bg-white font-inter tracking-widest rounded-[25px] text-dimGreen px-[16px] py-[8px] font-semibold text-[14px] '><Link to={'/login'}>LOGIN/SIGNUP</Link></button>
    </div>
  )
}

export default Button
