import React from 'react'
import '../index.css'

const ButtonAll = ({children}) => {
  return (
    <div>
      <button className='text-white tracking-widest bg-gradient-green font-[550] text-[13px] py-[8px] px-[12px] w-full rounded-3xl'>
        {children}
      </button>
    </div>
  )
}

export default ButtonAll
