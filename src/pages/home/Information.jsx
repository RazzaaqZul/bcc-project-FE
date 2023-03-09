import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../api/dummy'
import { continueButton } from '../../assets'
import { Card } from '../../components'



const Information = () => {
    const context = useContext(ProductContext)
    const randomData = context.productList.filter((idNumber) =>{
        return idNumber.id < 4
    })
    
  return (
    <div className='bg-dimGreen py-[40px] flex flex-col justify-center items-center px-[90px] gap-11'>
      <div className=' text-justify text-white font-inter font-semibold text-[19px]'>
        <p>Easy Meal adalah sebuah marketplace online yang menyediakan bahan makanan yang tergolong food loss atau makanan yang biasanya dibuang karena tidak memenuhi standar pasar. Dalam upaya mengurangi jumlah limbah makanan yang terbuang, Easy Meal membeli bahan makanan tersebut langsung dari para petani dan produsen lokal dengan harga yang lebih murah. Bahan makanan tersebut kemudian diolah dan dikemas dengan rapi sehingga dapat bertahan lebih lama. Melalui platform online yang mudah digunakan, konsumen dapat memilih bahan makanan yang diinginkan dan langsung memesannya. Selain memberikan solusi untuk mengurangi food loss, Easy Meal juga membantu para petani dan produsen lokal untuk meningkatkan penghasilannya.</p>  
      </div>

  
     
      <div className='bg-white rounded-2xl w-full py-7 px-28 flex flex-col justify-start gap-4'>
        <h1 className='text-[40px] font-mulish font-[670] '>Produk Kami</h1>
        <ul className='flex flex-row items-center gap-5 max-md:overflow-x-auto' > 
        {randomData.map((item, i)=>(
                <li key={`product-random-id-${i}`} ><Card product={item}/></li>
        ))}
        <li><img src={continueButton} class="cursor-pointer"/></li>

        </ul>
      </div>
    </div>
  )
}

export default Information
