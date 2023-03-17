import React, { useContext } from 'react'
import { ProductContext, ProductProvider } from '../../api/dummy'
import { Navbar, Hero, Information2, Footer } from '../../components'
import Information from './Information'
import Information3 from './Information3'


const Home = () => {
  const context = useContext(ProductContext)
  console.log(context.productList)
  return (
  
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Information></Information>
   <Information2></Information2>
    <Information3></Information3>
    

   <Footer></Footer>
    </>
   
  )
}

export default Home
