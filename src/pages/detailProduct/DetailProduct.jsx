import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext, ProductProvider } from '../../api/dummy'
import { Footer } from '../../components'
import NavbarLogin from '../../components/NavbarLogin'
import SelectedProduct from './SelectedProduct'

const DetailProduct = () => {
    const { id } = useParams();
   
  return (
    <div>
        <ProductProvider>
        <NavbarLogin></NavbarLogin>
        <div className='px-[200px]'>
          <SelectedProduct id={id}/>
        </div>
          </ProductProvider>
          <Footer></Footer>

      
    </div>
  )
}

export default DetailProduct
