import { Input } from 'postcss';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { aLogoGreen, brokoli } from '../../assets'
import ButtonAll from '../../components/ButtonAll';

const Content = ({response, id}) => {

    const [amount,setAmount] = useState({count:1, satuan:'ikat'})
    const counts = amount.count
    const satuans = amount.satuan
    const post = response.find(post => (post.id).toString() === id);
 


  return (
    
    <section className='flex flex-row justify-center items-center gap-20 font-mulish'>
        {post && 
       <>
        <div className='basis-1/2 w-full bg-green20 p-16 flex justify-center items-center '>
            <img src={brokoli} alt=''></img>
        </div>
        
        <div className='basis-1/2 flex-col justify-center '>
            <h3 className='text-[30px] text-neutral70 font-bold'>{post .category}</h3>
            <h1 className='text-[40px] text-black font-[740]'>{post .name}</h1>
            <div>
                <ul className='flex flex-row items-center gap-10 text-[15px]'>
                    <li className=' text-neutral70 font-bold basis-1/4 '>Berat Satuan</li>
                    <li className=' text-black basis-1/4 font-semibold
                    '>500 gram/ikat</li>
                    <li className='basis-1/2'/>
                </ul>
                <ul className='flex flex-row items-center gap-10 text-[15px] '>
                    <li className=' text-neutral70 font-bold basis-1/4'>Lokasi</li>
                    <li className=' text-black basis-1/4 font-semibold
                    '>Dapoer Qoe</li>
                    <button className='basis-1/2 flex justify-end items-end'>Lihat Lokasi</button>
                </ul>
            </div>
            <h1 className='text-[20px] font-[750] text-black'>
            <CurrencyFormat
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'Rp'}
              displayType={'text'}
              value={JSON.stringify(post.price*counts)}/></h1>

            <div className='flex flex-row justify-center items-center gap-6 bg-green20 rounded-3xl max-w-[150px]'>
                <button onClick={()=>{
                    setAmount((prevState) => { 
                        return { ...prevState, count: prevState.count - 1}
                    })
                
                }} className='flex justify-center items-center basis-1/4 rounded-l-3xl text-green80 font-extrabold'>-</button>
                <div className='flex justify-center item-center gap-2 font-bold'>
                    <span >{counts}</span>
                    <span>{satuans}</span>
                </div>
                <button onClick={()=>{
                    setAmount((prevState) => { 
                        return { ...prevState, count: prevState.count + 1}
                    })
                
                }} className='flex justify-center items-center basis-1/4  rounded-r-3xl text-green80 font-extrabold'>+</button>
            </div>
            <p className='text-justify'>{post .description}</p>
            <ButtonAll>TAMBAHKAN KE KERANJANG</ButtonAll>
        </div>
        </>
 }
 {!post  && <>
         <img src={aLogoGreen} alt='' className={`w-[40px] justify-center flex items-center animate-spin duration-300`}/>
 </>
     }

    </section>
  )
}

export default Content
