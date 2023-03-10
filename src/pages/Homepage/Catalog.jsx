import React, { useContext } from 'react'
import { ProductContext } from '../../api/dummy'
import { DataProductContext } from '../../api/product'
import { Card } from '../../components'

const Catalog = () => {
  const context = useContext(ProductContext)
  const productContext = useContext(DataProductContext)
  const data = context.productList
  // console.log(productContext.product)
 
  return (
   <section>
    <ul className='grid grid-cols-4 gap-y-12 max-resgrid:grid-cols-3  ' > 
        {data.map((item, i)=>(
                <li key={i} className='m-auto' ><Card product={item}/></li>
        ))}
    </ul>
   </section>
  )
}

export default Catalog
