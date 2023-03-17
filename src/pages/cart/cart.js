import React, { useContext } from 'react'
import { Footer, Navbar } from '../../components'


import NavbarLogin from '../../components/NavbarLogin'
import Biodata from './Biodata'
import MetodePembayan from './MetodePembayan'
import Pesanan from './Pesanan'

const Cart = () => {

  return (
    <div>
     <NavbarLogin>
     </NavbarLogin>
     <div className='flex flex-row justify-center gap-6 px-[90px]'>
      <div className='basis-1/2'>
        <Biodata></Biodata>
      </div>
      <div className='basis-1/2'>
        <Pesanan></Pesanan>
      </div>
     </div>
     <div className='px-[90px]'>
      <MetodePembayan></MetodePembayan>
     </div>
     <Footer></Footer>
    </div>
  )

}

export default Cart
