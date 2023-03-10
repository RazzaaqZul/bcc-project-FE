import React, { useState } from 'react'
import styles from '../../style'

const Biodata = () => {

    const [fname, setFname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

  return (
    <section className='flex flex-col font-mulish'>
        <h1 className='text-[20px] font-bold'>
                Biodata
        </h1>
        <div className='bg-green10 font-extrabold px-3 py-6 flex flex-col gap-2'>
            <div className='flex flex-col '>
                <label>Nama Lengkap*</label>
                <input
                    type='text'
                    onChange={(e)=>setFname(e.target.value)}
                    autoComplete='off'
                    value={fname}
                    className={`${styles.input} duration-300 border-green40`}
                />
            </div>
            <div className='flex flex-col'>
                <label>Nomor Telepon</label>
                <input
                    type='text'
                    onChange={(e)=>setContact(e.target.value)}
                    autoComplete='off'
                    value={contact}
                    className={`${styles.input} duration-300 border-green40`}
                />
            </div>
            <div className='flex flex-col'>
                <label>Email*</label>
                <input
                    type='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete='off'
                    value={email}
                    className={`${styles.input} duration-300 border-green40`}
                />
            </div>
            <div className='flex flex-col'>
                <label>Kota</label>
                <input
                    type='text'
                    onChange={(e)=>setCity(e.target.value)}
                    autoComplete='off'
                    value={city}
                    className={`${styles.input} duration-300 border-green40`}
                />
            </div>
            <div className='flex flex-col'>
                <label>Alamat</label>
                <input
                    type='text'
                    onChange={(e)=>setAddress(e.target.value)}
                    autoComplete='off'
                    value={address}
                    className={`${styles.input} duration-300 border-green40`}
                />
            </div>


        </div> 
    </section>
  )
}

export default Biodata
