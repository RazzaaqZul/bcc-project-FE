import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../api/dummy'
import CardPesanan from './CardPesanan'

import styles from '../../style'
import Loading from '../../components/Loading'
import TotalPayment from './TotalPayment'
import { Link, Navigate } from 'react-router-dom'
import axios from '../../api/axios'
import AuthContext from '../../api/AuthContext'

const Pesanan = () => {
  const context = useContext(ProductContext)
  const { setAuth, auth } = useContext(AuthContext)
  const [updated,setUpdated] = useState(false)
  const [updatedCart, setUpdatedCart] = useState([])
  const [prices, setPrices] = useState(0)
  const [donePayment, setDonePayment] = useState(false)
  

  const [link, setLink] = useState('')
  const [fname, setFname] = useState(auth.fname)
  const [email, setEmail] = useState(auth.email)
  const [address, setAddress] = useState(auth.address)
  const [contact, setContact] = useState(auth.contact)
  const [dataUser, setDataUser] = useState({})


 
  useEffect (()=>{
    setTimeout(()=>{
      setUpdated(true)
      console.log(updated)
    },1000)

    setUpdated(false)
    setUpdatedCart(context.cart)
    
    console.log(updated)
    console.log(context.cart)

  }, [context.cart.length])

useEffect (() => {
  setDataUser({

    fname,
    email,
    contact,
    address,
    city:"Malang"

  })
  console.log(dataUser)


},[])
 


  const handlePayment = async ()=>{


    if (context.typePayment === true) {

      try {

        console.log("fix pembayaran Online"  + context.typePayment)
    
        console.log(dataUser)
         
      const token = localStorage.getItem("Authorization");
      console.log("mulai masuk")
      let config = {
        headers: {
          Authorization : `Bearer ${token}`
        }

    }
  
    const response = await axios.post(`/api/v1/user/market/payment/online`, dataUser,config)
    
    console.log(response)
    console.log(response.data.data)
    const linknya = response.data.data
    setLink(linknya)
    console.log(link)
    console.log("ini link" + link)
    
    if(linknya){

      window.open(linknya)
      setDonePayment(true)
    }

    

      } catch (err) {
        console.log(err)
      }


      
      context.setCart([])
      context.setHargaTotal(0)
      
    

  
        

    } else if( context.typePayment === false) {
      try {
        

  console.log("fix pembayaran Offline"  + context.typePayment)
        const token = localStorage.getItem("Authorization");
        let config = {
          headers: {
              Authorization : `Bearer ${token}`,
              'Content-Type':'application/json'
          }
      }
        const response = await axios.post('/api/v1/user/market/payment/offline', dataUser, config)
        setDonePayment(true)
        
      } catch (err){
        console.log(err)
      }


      context.setCart([])
      context.setHargaTotal(0)
    }
  }

  return (
    <>
    <h1 className='text-[20px] font-bold font-mulish'>
    Pesanan
</h1>
    <section className='bg-green10 flex flex-col gap-1 h-[500px] py-3 px-2 '>
      <div className='flex flex-col  gap-3 overflow-y-auto h-96 '>
    
        { context.cart  && updated &&
          updatedCart.map((item, i)=>(
          <div key={i}>
            <CardPesanan product={item}></CardPesanan>
          </div> 
        ))
        }
        { !updated && <>
        <div className='flex flex-row justify-center items-center pt-36'>
          <Loading></Loading>
        </div>
        </>}
      

      
       
     
      </div>
      <div className='flex flex-row justify-between items-centerfont-extrabold border-t-2 py-4 border-neutral70 font-mulish'>
        <h1 className='text-[15px] text-neutral70 font-bold'>Total</h1>
       <TotalPayment></TotalPayment>
      </div>
      <button className={`${styles.button}`} onClick={(e)=> {
        handlePayment(e)
        
      }} >{donePayment ? <Navigate to='/riwayat'></Navigate> : ''}KONFIRMASI PESANAN</button>
      <div className="font-sans">
  
    </div>

    </section>
    </>
  )
}

export default Pesanan
