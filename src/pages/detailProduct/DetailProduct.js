import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthProvider } from '../../api/AuthContext'
import { ProductContext, ProductProvider } from '../../api/dummy'
import { Footer } from '../../components'
import NavbarLogin from '../../components/NavbarLogin'
import SelectedProduct from './SelectedProduct'

const DetailProduct = () => {
    const { id } = useParams();
   
  return (
    <div>
       <>

       <AuthProvider>
    <NavbarLogin></NavbarLogin>
    </AuthProvider>


   
        <div className='px-[200px]'>
          <SelectedProduct id={id}/>
        </div>
          <Footer></Footer>

     
       </>
       

     
    </div>
    
  )
}

export default DetailProduct
