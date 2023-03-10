import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import axios from '../../api/axios';
import ButtonAll from '../../components/ButtonAll';
import styles from '../../style';
import { aLogoWhite, eyeClose, eyeOpen, google } from '../../assets'


// Dimulai dari lower atau upper
// 4-24 characters
const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// REQUIRED : satu lower case, satu upper case, satu digits, satu special char 
// 8-24 Characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// end point untuk Backend
const REGISTER_URL = '/register'

const FormRegisterPembeli = () => {
  const errRef = useRef()
  
//   Data User Register
  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')

// State untuk password Field
const [password, setPassword] = useState('')
const [validPassword, setValidPassword] = useState(false)
const [passwordFocus, setPasswordFocus] = useState(false)

// State untuk macth password Field
const [matchPassword, setMatchPassword] = useState('')
const [validMatch, setValidMatch] = useState(false)
const [matchFocus, setMatchFocus] = useState(false)

// State untuk error message dan success
const [errMessage, setErrMessage] = useState('')
const [success, setSuccess] = useState(false)

// Validasi username ketika username di inputkan
const [validUserName, setValidUserName] = useState(false)
useEffect(()=>{
    const result = USERNAME_REGEX.test(username)
    // console.log(result)
    // console.log(username)
    setValidUserName(result)
},[username])

// Validasi password ketika password di inputkan
useEffect(()=>{
    const result = PWD_REGEX.test(password)
    // console.log(result)
    // console.log(password)
    setValidPassword(result)

    // password disandingkan dengan matchPassword
    const match = password === matchPassword
    
    setValidMatch(match)
}, [password,matchPassword])

// Hapus Error Message 
useEffect(()=>{
    setErrMessage('')
},[fname, email,username,password,matchPassword, address, contact])

// state userFocus
const [userFocus, setUserFocus] = useState(false)

// handleSubmit & Post API 
const handleSubmit = async (e) =>{
    e.preventDefault()

    setLoading(true)

    setTimeout(()=>{
        setLoading(false)
    }, 2000)


    try{
        const response = await axios.post(
            REGISTER_URL, JSON.stringify({fname, email, username, gender, password, address, contact}),
            {
                headers: {'Content-Type':'application/json'},
                withCredentials: true
            }
        )
        console.log(response.data)
        console.log(response.accessToken)
        console.log(JSON.stringify(response))
        setSuccess(true)
    } catch (err){
        if(!err?.response) {
            setErrMessage('Duh belum connect ke BE nich')
        } else if (err.response?.status === 409){
            setErrMessage('Username Taken')
        } else {
            setErrMessage('Registration Failed')
        }
        errRef.current.focus()
    }
}
// Password Hide or Show 

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
    <section>
        <h1>SUCCESS!</h1>
        <p>Sign In</p>
    </section>
   ) : (

    <section >
        <div className='flex flex-col justify-center font-mulish gap-3'>
          <div>
            <h1 className='text-dimGreen text-[35px] font-bold'>Daftar sebagai Pembeli</h1>
            <p className='font-extrabold text-[18px]'>Daftarkan akun Anda untuk mengakses semua fitur dalam aplikasi</p>
        </div>

        <p ref={errRef} className={errMessage ? 'errmsg' : "offscreen"} aria-live="assertive">{errMessage}</p> 

        {/* FORM SUBMIT */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 font-bold'>
            {/* FULL NAME (1) */}
            <div>
            <label htmlFor='fullname'>
                Nama Lengkap* 
            </label>
            <input 
                type='text'
                id='fullname'
                autoComplete='off'
                onChange={(e) => setFname(e.target.value)}
                required
                value={fname}
                className={`${styles.input}`}
            />
            </div>

            {/* EMAIL (2) */}
            <div className='flex flex-col'>
                <label htmlFor="email">
                    Email*
                </label>
                <input 
                    type='email'
                    id='email'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`${styles.input}`}
                />
            </div>
            {/* USERNAME (3) */}
            <div>
                <label htmlFor='username'>
                    Username:
                    <span className={`${validUserName ? "valid" : "hidden"}`}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validUserName || !username ? 'hidden' : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <input
                    type='text'
                    id='username'
                    autoComplete='off'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    aria-invalid={validUserName ? 'false' : 'true'}
                    aria-describedby = 'uidnote'
                    onFocus={()=>setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    className={`${styles.input}`}
                />
                {/* Intruksi Pengisian Username */}
                <p id='uidnote' className={userFocus && username && !validPassword ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/><br/>
                    4 to 24 characters. <br/>
                    Must begin with a letter. <br/>
                    Letters, numbers, underscores, hypghens allowed.

                </p>
            </div>

            {/* PASSWORD (4) */}
            <div>
                <label >
                    Kata Sandi* 
                    <span className={validPassword ? 'valid' : 'hidden'}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validPassword || !password ? "hidden" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <div className='relative'>
                    <input
                        type={type}
                        id='password'
                        onChange={(e) =>setPassword(e.target.value)}
                        required
                        aria-invalid={validPassword ? 'false' : 'true'}
                        aria-describedby="passwordNote"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        className={`${styles.input}`}
                    />
                     <div className='absolute top-1 right-3'>
                        <div onClick={hidePassword}>{eyes()}</div>
                     </div>
                </div>
                <p id='passwordNote' className={passwordFocus && !validPassword ? 'instructions' : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/><br/>
                    9 to 24 characters. <br/>
                    Must include uppercase and lowercase letters, a number and a special character. <br/>
                    Allowed special characters:
                    <span aria-label="exclamation mark">
                        !
                    </span>
                    <span aria-label="at symbol">
                        @
                    </span>
                    <span aria-label="hashtag">
                        #
                    </span>
                    <span aria-label="dollar sign">
                        $
                    </span>
                    <span aria-label="percent">
                        %
                    </span>
                </p>
            </div>
            {/* CONFIRM PASSWORD (5) */}
            <div>
                <label htmlFor='confirm_password'>
                    Konfirmasi Kata Sandi

                    <span className={validMatch && matchPassword ? 'valid': "hidden"}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                    <span className={validMatch || !matchPassword ? "hidden" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </span>
                </label>
                <div className='relative'>
                    <input 
                        type={type}
                        id="confirm_password"
                        onChange={(e) => { setMatchPassword(e.target.value)}}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby = "confirmNote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        className={`${styles.input}`}
                    />
                     <div className='absolute top-1 right-3 '>
                        <div onClick={hidePassword}>{eyes()}</div>
                     </div>
                </div>
                <p id="confirmNote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    Must match the first password input field
                </p>
            </div>
            
            {/* Address (6) */}
            <div>
                <label htmlFor='Address'>
                    Address: 
                </label>
                <input 
                     type='text'
                     id='Address'
                     autoComplete='off'
                     onChange={(e) => setAddress(e.target.value)}
                     required
                     value={address}
                     className={`${styles.input}`}
                 />
            </div>

            {/* Gender */}
            <div className='flex flex-col'>
                <label htmlFor='Address'>
                   Gender*
                </label>
                <select name="gender" className={`${styles.input}`}>
                    <option value={gender} onClick={()=>{
                        setGender("Laki-Laki")
                    }}>Laki-Laki</option>
                    <option value={gender} onClick={()=>{
                        setGender("Perempuan")
                        console.log(gender)
                    }}>
                        Perempuan
                    </option>
                </select>
            </div>

            {/* Contact */}
            <div>
                <label htmlFor='Contact'>
                    Nomor Telepon*
                </label>
                <input 
                     type='number'
                     id='Contact'
                     autoComplete='off'
                     onChange={(e) => setContact(e.target.value)}
                     required
                     value={contact}
                     className={`${styles.input}`}
                 />
            </div>

            <div className='pt-4 font-normal text-justify text-gray-400 text-[14px]'>
                <p>Dengan mengklik Daftar, Anda setuju dengan Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami. Anda mungkin menerima pemberitahuan SMS dari kami dan dapat memilih keluar kapan saja.</p>
            </div>

            <div className='flex flex-col gap-2'>
                {/* <ButtonAll disabled={!validUserName || !validMatch || !validPassword ? true :false}>
                    MASUK
                </ButtonAll> */}

                <ButtonAll >{loading ? <img src={aLogoWhite} className='animate-spin w-6 mx-auto'alt='logo-white'/>: `DAFTAR`}</ButtonAll>
                
                <p className='font-bold flex justify-center items-center'>atau</p>
                    
                <button className='text-black border-2 border-dimGreen  tracking-widest bg-white font-[700] text-[13px] py-[8px] px-[12px] w-full rounded-3xl flex flex-row gap-3 items-center justify-center '><img src={google} className='w-[20px]' alt='logo-google'/>MASUK MENGGUNAKAN GOOGLE</button>
              
            </div>

        </form>


            <p className='py-5 font-semibold text-[15px] flex justify-center '>Sudah punya akun? <a className='font-bold text-dimGreen underline' href='/'>Masuk</a></p>

        </div>
    </section>

   )}
   
   
   </>
  )
}

export default FormRegisterPembeli
