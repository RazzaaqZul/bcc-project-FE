import React from 'react'
import { csLogo, pana } from '../../assets'

const Comingsoon = () => {
  return (
    <section className='flex flex-col gap-10'>
    <div className='bg-green80 px-48 pt-14 flex justify-center items-center w-full  '>
        <img src={pana} className='h-[300px]'></img>
    </div>
    <div className='flex flex-col justify-center items-center font-mulish'>
        <h1 className='font-extrabold text-[34px]'>Akan Datang</h1>
        <p className='text-neutral70 font-bold text-[20px] text-center px-44'>Saat ini, kami sedang bekerja keras pada halaman tersebut. Silakan ikuti akun media sosial kami untuk mendapatkan pembaruan terkait peluncuran halaman ini.</p>
    </div>
    <ul className='flex flex-row justify-center items-center gap-8'>
        <img src={csLogo} className='w-60'></img>
    </ul>



    </section>
  )
}

export default Comingsoon
