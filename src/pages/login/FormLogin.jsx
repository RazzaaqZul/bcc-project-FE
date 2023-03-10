import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../../api/AuthContext'
import ButtonAll from '../../components/ButtonAll'
import axios from '../../api/axios'
import {aLogoWhite, eyeClose, eyeOpen, google } from '../../assets'
import { Link } from 'react-router-dom'
import styles from '../../style'


const LOGIN_URL='/auth'

const FormLogin = () => {
    // set Auth
    const { setAuth } = useContext(AuthContext)

    // for set the focus
    const userRef = useRef()
    const errRef = useRef()
    const emailRef = useRef()
    const buttRef = useRef()
    // state username and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // error message
    const [errMsg, setErrMsg] = useState('');
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
    }, [email, password])

    // handleSubmit 
    const handleSubmit = async (e) => {
        e.preventDefault()
         // If we work with backEnd We need to integrate axios and some global state for our auth which is you should probaly store your authentication
   
            setLoading(true)

            setTimeout(()=>{
                setLoading(false)
            }, 2000)
 
         try {
            const response = await axios.post( LOGIN_URL, JSON.stringify({username, password}),{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            })
            // get is the acces token, we want store it with the other user informatiion
            const accessToken = response?.data?.accessToken;
            // role
            const roles = response?.data?.roles;
            // store all these information inside our auth object and that's saved in the global context
            setAuth({
                username,
                password,
                email,
                roles, 
                accessToken
            })
            setPassword('')
            setEmail('')
            setSuccess(true)
         } catch (err) {
            if(!err?.response){
                setErrMsg('No Server Response')
            } else if ( err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if ( err.response?.status === 401){
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            // after we get an error, we need set the focus on that error display so screen reader can read that information. Thats where we had that ARIA-LIVE attribute and we set it to "assertive" so it announced immedietly
            errRef.current.focus()
         }
    }

  const [type,setType] = useState("password")

   const hidePassword=()=>{
        if(type == "password"){
            setType("text")
        } else {
            setType("password")
        }
   }

   const eyes=() =>{
    if(type == "password"){
        return <img src={eyeClose}/>
     
    } else {
        return <img src={eyeOpen}/>
    }
   }

   const [loading, setLoading]= useState(false)

  

  return (
    <div className='flex flex-col justify-center w-full font-mulish gap-5'>
        <div>
            <h1 className='text-dimGreen text-[35px] font-bold'>Masuk sebagai Pembeli</h1>
            <p className='font-extrabold text-[18px]'>Silakan masukkan detail anda</p>
        </div>

        <p ref={errRef} className={errMsg ? 'errmsg' : "offscreen"} aria-live="assertive">{errMsg}</p>  

        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-start gap-6'>
            <div className='flex flex-col'>
                <label htmlFor='email' className='font-bold'>
                    Email
                </label>
                <input 
                type="email"
                id="email"
                // ref={emailRef}
                autoComplete='off'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                required
                className={`${styles.emailInput}`}
                />
         
            {/*  */}
           


                
                <label htmlFor='password' className='font-bold'>Password</label>
                <div className='relative'>
                <input 
                type = {type}
                id = 'password'
                onChange={(e)=> setPassword(e.target.value)}
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
                <ButtonAll >{loading ? <img src={aLogoWhite} className='animate-spin w-6 mx-auto'/>: `Masuk`}</ButtonAll>


                

                </div>
                <p className='font-bold flex justify-center items-center'>atau</p>
               <button className='text-black border-2 border-dimGreen  tracking-widest bg-white font-[700] text-[13px] py-[8px] px-[12px] w-full rounded-3xl flex flex-row gap-3 items-center justify-center '><img src={google} className='w-[20px]'/>MASUK MENGGUNAKAN GOOGLE</button>
            </div>
            </form>

           

            <p className='py-5 font-semibold text-[15px] flex justify-center '>Belum buat akun?  <a className='font-bold text-dimGreen underline' href=''><Link to={'/register'}>Daftar</Link></a></p>

        </div>

      
    </div>
  )
}

export default FormLogin
