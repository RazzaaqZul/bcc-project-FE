import React from 'react'
import '../index.css'

const ButtonAll = ({children}) => {
  return (
    <div>
      <button className='text-white tracking-widest bg-gradient-green font-[550] text-[16px] py-[16px] px-[20px]  h-[40px] flex justify-center items-center rounded-[25px]'>
        {children}
      </button>
    </div>
  )
}

export default ButtonAll
