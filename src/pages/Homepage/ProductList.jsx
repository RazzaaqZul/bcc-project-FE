import React from 'react'
import { ProductProvider } from '../../api/dummy'
import { Footer } from '../../components'
import NavbarLogin from '../../components/NavbarLogin'
import styles from '../../style'
import Catalog from './Catalog'
import FunFact from './FunFact'

const ProductList = () => {
  return (
    <ProductProvider>
      <NavbarLogin></NavbarLogin>
      <div className=' font-mulish flex flex-col justify-center gap-8'>
      <div className='px-[90px]'>
      <FunFact></FunFact>
      <h1 className="text-[35px] text-green90 font-extrabold py-5">Untuk Anda</h1>
      <Catalog></Catalog>
      </div>
      <Footer></Footer>
      </div>
    
  </ProductProvider>

  )
}

export default ProductList
