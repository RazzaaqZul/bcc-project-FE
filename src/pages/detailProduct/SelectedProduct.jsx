import React, { useContext } from 'react'
import { ProductContext } from '../../api/dummy'
import Content from './Content'



const SelectedProduct = ({id}) => {
  const context = useContext(ProductContext)
  const product = context.productList
  console.log(id)
  return (

      <Content products={product} id={id}></Content>

  )
}

export default SelectedProduct
