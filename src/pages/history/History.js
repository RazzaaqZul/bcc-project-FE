import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from 'react-daisyui'
import { AuthProvider } from '../../api/AuthContext'
import axios from '../../api/axios'
import { ProductContext } from '../../api/dummy'
import { Footer } from '../../components'
import NavbarLogin from '../../components/NavbarLogin'
import Search from '../../components/Search'
import CardTransaksi from './CardTransaksi'

const History = () => {

    const context = useContext(ProductContext)
    const [cart, setCart] = useState([])
    const [filter, setFilter] = useState(0)

    useEffect(()=>{
        // setCart( context.cart)
        // // console.log(cart)
    },[])



    useEffect(()=> {
        if( filter === 0) {

            const getItem = async () => {
                try {
                    const token = localStorage.getItem("Authorization");
                    
                    let config = {
                        headers: {
                            Authorization : `Bearer ${token}`
                        }
                    }
                    const response = await axios.get("/api/v1/user/market/history", config )
                    
                    console.log(response?.data?.data)
                    setCart(response?.data?.data)
                   
                    console.log("Ini data yang diambil")
                    console.log(cart)
                } catch (err) {
                    console.log(err)
                }
         
            }
            getItem()
        } if ( filter === 1 ) {
            const getItem1 = async () => {
                try {
                    const token = localStorage.getItem("Authorization");
                    
                    let config = {
                        headers: {
                            Authorization : `Bearer ${token}`
                        }
                    }
                    const response = await axios.get("/api/v1/user/market/history/filter/1", config )
                    
                    console.log(response?.data?.data)
                    setCart(response?.data?.data)
                   
                    console.log("Ini data yang diambil")
                    console.log(cart)
                } catch (err) {
                    console.log(err)
                }
         
            }
            getItem1()
        } else if  ( filter === 2 ) {
            const getItem2 = async () => {
                try {
                    const token = localStorage.getItem("Authorization");
                    
                    let config = {
                        headers: {
                            Authorization : `Bearer ${token}`
                        }
                    }
                    const response = await axios.get("/api/v1/user/market/history/filter/2", config )
                    
                    console.log(response?.data?.data)
                    setCart(response?.data?.data)
                   
                    console.log("Ini data yang diambil")
                    console.log(cart)
                } catch (err) {
                    console.log(err)
                }
         
            }
            getItem2()
        } else if ( filter === 3) {
            const getItem1 = async () => {
                try {
                    const token = localStorage.getItem("Authorization");
                    
                    let config = {
                        headers: {
                            Authorization : `Bearer ${token}`
                        }
                    }
                    const response = await axios.get("/api/v1/user/market/history/filter/3", config )
                    
                    console.log(response?.data?.data)
                    setCart(response?.data?.data)
                   
                    console.log("Ini data yang diambil")
                    console.log(cart)
                } catch (err) {
                    console.log(err)
                }
         
            }
            getItem1()
        }
        
    },[,filter])


  return ( <>

    <AuthProvider>
    <NavbarLogin></NavbarLogin>
    </AuthProvider>
    <div className='font-mulish min-h-[800px] bg-green10 px-[90px] gap-8 flex flex-col '>
        <h1 className='text-[30px] font-extrabold'>Daftar Transaksi</h1>
       <div className='flex flex-row gap-14 items-center'>
        <div className=''>
        <h1 className='font-bold text-[16px] '>Daftar Transaksi</h1>
        </div>
        <ul className='flex flex-row justify-start items-center gap-2 '>
            
            <li className={`${filter===0 && 'text-white bg-green90'} bg-green20 hover:text-white text-green80 hover:bg-green90 p-2 rounded-3xl duration-500`} onClick={()=>{
                setFilter(0)
            }}>Semua</li>
            <li className={`${filter===1 && 'text-white bg-green90'} bg-green20 hover:text-white text-green80 hover:bg-green90 p-2 rounded-3xl duration-500`} onClick={()=>{
                setFilter(1)
            }} >Berlangsung</li>
            <li className={`${filter===2 && 'text-white bg-green90'} bg-green20 hover:text-white text-green80 hover:bg-green90 p-2 rounded-3xl duration-500`} onClick={()=>{
                setFilter(2)
            }}>Berhasil</li>
            <li className={`${filter===3 && 'text-white bg-green90'} bg-green20 hover:text-white text-green80 hover:bg-green90 p-2 rounded-3xl duration-500`} onClick={()=>{
                setFilter(3)
            }}>Tidak Berhasil</li>
        </ul>
       </div>

        <div>
       
        
            {cart.reverse().map((item,i) => (
                <CardTransaksi  key={i} cart={item}></CardTransaksi>
            )
       
       )} 
        
     
     
            

             
        </div>
    </div>
        <Footer></Footer>

    
  </>
  )
}

export default History
