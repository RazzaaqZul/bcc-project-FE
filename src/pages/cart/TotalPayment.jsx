import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../api/dummy'
import CurrencyFormat from 'react-currency-format'
import Loading from '../../components/Loading'
import Kalkulasi from './Kalkulasi'

const TotalPayment = () => {

    const context = useContext(ProductContext)
    const cart = context.cart
    const payment = context.totalPayment
    const counts = context.count
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
       
        setTimeout(()=>{
            setLoading(true)
         
        },1000)

        console.log(payment)

        // payment.map((item)=>(
        //     setTotalPay((prev) => prev + item)
        // ))
        setLoading(false)
    },[,payment] )

    


  return (
    // <>
    // { loading && 
    
    <>
        <h1 className=' text-[25px] font-extrabold'> <CurrencyFormat
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    prefix={'Rp'}
                    displayType={'text'}
                    value={JSON.stringify( context.hargaTotal)}/></h1>
                    {/* payment */}
        </>
    // }
    // { !loading && <> <Loading></Loading></>}
    // </>
    
         
     
  )
}

export default TotalPayment
