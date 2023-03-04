import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section>
      <div className='grid grid-cols-4 gap-5 bg-dimGreen h-[300px] text-white '>
        {footerLinks.map((item)=>(
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
    </section>
  )
}

export default Footer
