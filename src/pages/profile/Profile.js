import React, { useState } from 'react'
import { Footer } from '../../components'

import { brokoli, fotoProfil } from '../../assets'
import NavbarLogin from '../../components/NavbarLogin'
import FormEditProfile from './FormEditProfile'
import HeaderProfile from './HeaderProfile'
import { Link } from 'react-router-dom'
import { AuthProvider } from '../../api/AuthContext'

const Profile = () => {

  
    const [show, setShow] = useState(true)
    const [onHere, setOnHere] = useState(false)

    //toggle the Modal Display State
 const handleBtnClick = (e) => {
    setShow((prev) => !prev);
    console.log(show)
  };
   

  return (
    <> 
    
    <AuthProvider>
      <NavbarLogin ></NavbarLogin>
      </AuthProvider>
    <div className='flex flex-col px-[90px]'>
      <HeaderProfile background={brokoli} fotoprofil={fotoProfil}></HeaderProfile>
      <div className='flex flex-row w-full py-10 gap-10'>
    
            <ul className='flex flex-col gap-6 basis-[20%]'>
            <li className={`hover:bg-neutral20 border-[1px] duration-300 flex justify-center items-center tracking-wider border-neutral70 p-3 font-bold ${onHere ? "bg-white": "bg-neutral20"}`} onClick={()=>{
                setOnHere(false)
            }}>EDIT PROFIL</li>
            <li className={`hover:bg-neutral20 border-[1px] duration-300 flex justify-center items-center tracking-wider  border-neutral70 p-3 font-bold ${onHere ? "bg-neutral20 ": "bg-white"}`} onClick={()=>{
                setOnHere(true)
            }}>UBAH KATA SANDI</li>
            </ul>
            
            <div className='basis-[80%]'>
            <FormEditProfile onHere={onHere}></FormEditProfile>
            </div>
        </div >
       

        {show ? <>
            <div className='flex justify-end items-end py-6'>
            <button className="bg-negative text-[15px] font-bold font-mulish text-white rounded-[20px] tracking-wider flex flex-row items-center justify-center py-3 px-5 hover:scale-110 absolute  hover:bg-red-300 duration-200 cursor-pointer  " onClick={(e)=>handleBtnClick(e)}>LOGOUT</button>
        </div>
        
        </> : <>
        <div className='flex justify-end items-end py-6'>
            <button className="bg-negative text-[15px] font-bold font-mulish text-white rounded-[20px] tracking-wider flex flex-row items-center justify-center py-3 px-5 hover:px-6 hover:py-4 absolute  hover:bg-red-300 duration-200 cursor-pointer " onClick={(e)=>handleBtnClick(e)}>LOGOUT</button>
        </div>

        <div className='flex justify-center items-center fixed px-[420px] max-resgrid:px-[300px] max-resgrid:grid-cols-3'> 

            <div className='basis-[100%]  shadow-2xl bg-green10 rounded-2xl flex flex-col justify-center w-[500px] h-[400px] items-center font-mulish gap-5 duration-500'>
                <div className='font-extrabold text-[20px]'>Yakin Anda Ingin Keluar?</div>
                <div className='flex flex-row gap-2'>
                <button className='bg-negative text-[20px] font-bold font-mulish text-white rounded-3xl flex flex-row items-center justify-center p-3  w-[100px] hover:bg-red-300 duration-200' onClick={(e)=>handleBtnClick(e)}><Link to='/login'>Keluar</Link></button>
                <button className='border-negative rounded-3xl w-[100px] border-[1px] text-negative ' onClick={(e)=>handleBtnClick(e)}>Batal</button>
                </div>
            </div>
        </div>
        </>}
      </div>


      <Footer></Footer>
    </>
  )
}

export default Profile
