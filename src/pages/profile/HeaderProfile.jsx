import React, { useContext } from 'react'
import AuthContext from '../../api/AuthContext'
import { ProductContext } from '../../api/dummy'
import { brokoli, defaultProfil, fotoProfil, img1, img2 } from '../../assets'

const HeaderProfile = ({priview}) => {
    const { setAuth, auth } = useContext(AuthContext)
    const context = useContext(ProductContext)

  return (
    <>
    
    <div className='w-full font-extrabold font-mulish'>    
        <img alt='background' src={img1} className=' w-full object-cover  rounded-t-3xl bg-red-400 h-[250px]'></img>      
    </div>
    <div className='flex flex-row gap-4  font-mulish px-[90px]'>
        <img src={context.preview ? context.preview : defaultProfil} className="rounded-[50%] w-[200px] h-[200px] border-8 border-white bg-white mt-[-40px]"></img>
        <div className=''>
            <h1 className='font-extrabold text-[30px] mt-3'>Detail Profile</h1>
            <h1 className='font-extrabold text-neutral70 text-[25px]'>Perbarui Foto dan Data</h1>
        </div>
    </div>
    
    </>
  )
}

export default HeaderProfile
