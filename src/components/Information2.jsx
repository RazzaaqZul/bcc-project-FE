import React, { useState } from 'react'
import { image1 } from '../assets'

const Information2 = () => {

  const heading = () => {
    return `text-dimGreen font-bold font-inter group-hover:text-white duration-300 `
  }

  const desc = () => { 
    return `'font-extralight group-hover:text-white duration-300 `
  }

  const groupHover = () => {
    return `bg-veryLightGreen20 rounded-[25px] p-3 hover:bg-gradient-green  group `
  }
  return (
    <div className='flex justify-center items-center  gap-4 py-16'>
      <div className='mx-[120px]'>
        <div className='font-[550px] text-[32px] text-dimGreen'>
            <h1 >Manfaatkan Food Loss, Kurangi<br/>Limbah, Hemat Biaya, dan Lebih Kreatif!</h1>
        </div>
        <div className='my-2'>
            <h1 className='font-bold '>
            Dengan memanfaatkan bahan makanan food loss, kita dapat mengurangi limbah makanan, menghemat biaya, dan lebih kreatif dalam memasak.
            </h1>
        </div>
        {/* Benefit */}
        <div className='flex flex-col gap-4'>
        <div className={groupHover()}>
         
           <h1 className={heading()}>Mengurangi biaya makanan</h1>
           <p className={desc()}>Bahan makanan food loss biasanya dapat diperoleh dengan harga yang lebih murah, sehingga dapat membantu mengurangi biaya makanan</p>
        </div>
        <div className={groupHover()}>
           <h1 className={heading()} >Mengurangi limbah makanan</h1>
           <p className={desc()}>Dengan menggunakan bahan makanan food loss, kita dapat mengurangi jumlah limbah makanan yang dihasilkan, sehingga dapat membantu mengurangi dampk negatifnya pada lingkungan</p>
        </div>
        <div className={groupHover()}>
           <h1 className={heading()}>Mendukung keberlanjutan makanan</h1>
           <p className={desc()}>Penggunaan bahan makanan food loss dapat membantu mendukung keberlanjutan pangan,karena kita  tidak membuang bahan makanan yang sebenarnya masih bisa dimanfaatkan</p>
        </div>
        </div>
      </div>
      <div>
        <img src={image1} className="w-[1050px] "></img>
      </div>
    </div>
  )
}

export default Information2
