import React, { useContext } from 'react'
import { ProductContext } from '../../api/dummy'
import { Card } from '../../components'

const Catalog = () => {
  const context = useContext(ProductContext)
  const data = context.productList

 
  return (
   <section>
    <ul className='grid grid-cols-4 gap-y-12 ' > 
        {data.map((item, i)=>(
                <li key={i} className='m-auto' ><Card product={item}/></li>
        ))}
    </ul>
   </section>
  )
}

export default Catalog
