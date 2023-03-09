import React from 'react'
import { ProductProvider } from '../../api/dummy'
import { Navbar, Hero, Information2, Footer } from '../../components'
import { Information1 } from '../../components/Information1'
import Information from './Information'

const Home = () => {
  return (
  
      <ProductProvider>
        <Navbar></Navbar>
        <Hero></Hero>
        <Information></Information>
       <Information2></Information2>
       <Footer></Footer>
      </ProductProvider>
   
  )
}

export default Home
