import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../api/dummy'
import { brokoli } from '../../assets'
import NavbarLogin from '../../components/NavbarLogin'
import Content from './Content'



const SelectedProduct = ({id}) => {
  const context = useContext(ProductContext)
  const product = context.productList
  const currentId = id
  return (

    <Content response={product} id={currentId}></Content>
  )
}

export default SelectedProduct
