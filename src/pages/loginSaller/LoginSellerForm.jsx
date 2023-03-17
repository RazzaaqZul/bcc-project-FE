import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../../api/AuthContext'
import ButtonAll from '../../components/ButtonAll'
import axios from '../../api/axios'
import {aLogoWhite, eyeClose, eyeOpen, google } from '../../assets'
import { Link, Navigate } from 'react-router-dom'
import styles from '../../style'
import ProductList from '../Homepage/ProductList'
import { data } from 'autoprefixer'
import axiosInstance from '../../api/axios'

const LoginSellerForm = () => {
 // set Auth
 const { setAuth } = useContext(AuthContext)

 // for set the focus
 // const userRef = useRef()
 const errRef = useRef()
 // const emailRef = useRef()
 // const buttRef = useRef()
 // state username and password
 const [usernameOrEmail, setUsernameOrEmail] = useState('')
 const [password, setPassword] = useState('')


 // error message
 const [errMsg, setErrMsg] = useState('');
 const [forms, setForms] = useState({
     email: '',
     password: ''
 })
 const [success, setSuccess] = useState(false);

 // useEffect(()=>{
 //     userRef.current.focus()
 // }, [])

 // useEffect(()=>{
 //     emailRef.current.focus() 
 // }, [])

 // delete error massage 
 useEffect(()=>{
     setErrMsg('')
 }, [usernameOrEmail, password])

 // handleSubmit 
 const handleSubmit = async (e) => {
     e.preventDefault()
      // If we work with backEnd We need to integrate axios and some global state for our auth which is you should probaly store your authentication

         setLoading(true)

         setTimeout(()=>{
             setLoading(false)
         }, 2000)

      try {
         const response = await axiosInstance.post("/api/v1/user/login",JSON.stringify({username: usernameOrEmail, password}),
        
         {
             // headers: { 'Content-Type': 'application/json'},
             // withCredentials: true
         })
         
         // console.log(response.data) 
         // console.log(response?.data.data)
         // get is the acces token, we want store it with the other user informatiion
         const accessToken = response?.data.data;
         localStorage.setItem('Authorization', accessToken)
         // role
         const roles = response?.data?.roles;
         // store all these information inside our auth object and that's saved in the global context
         // setAuth({
         //     usernameOrEmail,
         //     password,
         //     accessToken
         // })
         setPassword('')
         setUsernameOrEmail('')
         setSuccess(true)
      } catch (err) {
         console.log(err)
         setErrMsg(err)
         // if(!err?.response){
         //     setErrMsg(err.message)
         //     console.log(err.message)
         // } else if ( err.response?.status === 400) {
         //     setErrMsg('Missing Username or Password')
         // } else if ( err.response?.status === 401){
         //     setErrMsg('Unauthorized')
         // } else {
         //     setErrMsg('Login Failed')
            
         // }
         // after we get an error, we need set the focus on that error display so screen reader can read that information. Thats where we had that ARIA-LIVE attribute and we set it to "assertive" so it announced immedietly
         errRef.current.focus()

      }
 }

const [type,setType] = useState("password")

const hidePassword=()=>{
     if(type === "password"){
         setType("text")
     } else {
         setType("password")
     }
}

const eyes=() =>{
 if(type === "password"){
     return <img src={eyeClose} alt='eyes-close'/>
  
 } else {
     return <img src={eyeOpen} alt='eyes-open'/>
 }
}

const [loading, setLoading]= useState(false)



return (
 <>
 {success ? (

     <Navigate to="/homepage/seller"></Navigate>

 ) : (

 <div className='flex flex-col justify-center w-full font-mulish gap-5'>
     <div>
         <h1 className='text-dimGreen text-[35px] font-bold'>Masuk sebagai Penjual</h1>
         <p className='font-extrabold text-[18px]'>Silakan masukkan detail anda</p>
     </div>

     <p ref={errRef} className={errMsg ? 'errmsg' : "offscreen"} aria-live="assertive">{errMsg}</p>  

     <div>
         <form onSubmit={handleSubmit} className='flex flex-col justify-start gap-6'>
         <div className='flex flex-col'>
             <label htmlFor='usernameOrEmail' className='font-bold'>
                 Email atau Username
             </label>
             <input 
             type="text"
             id="usernameOrEmail"
             // ref={emailRef}
             name='username'
             autoComplete='off'
             onChange={(e)=> setUsernameOrEmail(e.target.value)}
             value={usernameOrEmail}
             required
             className={`${styles.input}`}
             />
      
         {/*  */}
        


             
             <label htmlFor='password' className='font-bold'>Password</label>
             <div className='relative'>
             <input 
             type = {type}
             id = 'password'
             onChange={(e)=> setPassword(e.target.value)}
             name="password"
             value = {password}
             required
             className= {`${styles.input}`}
             />
         <div className='absolute top-1 right-3'>

         {/* eyes */}
         <div onClick={hidePassword}>{eyes()}</div>
         </div>
         </div>
         </div>
         <div className='flex flex-col gap-2 '>
             <div>
             <ButtonAll >{loading ? <img src={aLogoWhite} alt='white-logo' className='animate-spin w-6 mx-auto'/>: `Masuk`}</ButtonAll>


             

             </div>
             <p className='font-bold flex justify-center items-center'>atau</p>
            <button className='text-black border-2 border-dimGreen  tracking-widest bg-white font-[700] text-[13px] py-[8px] px-[12px] w-full rounded-3xl flex flex-row gap-3 items-center justify-center '><img src={google} className='w-[20px]' alt='google-logo'/>MASUK MENGGUNAKAN GOOGLE</button>
         </div>
         </form>

        

         <p className='py-5 font-semibold text-[15px] flex justify-center '>Belum buat akun? <Link to={'/register/seller'}>Daftar</Link></p>

     </div>

   
 </div>
 )}
</>
)
}


export default LoginSellerForm
