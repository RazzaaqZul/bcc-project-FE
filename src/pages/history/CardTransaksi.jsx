import React, { useContext, useState } from 'react'
import { ProductContext } from '../../api/dummy'
import { brokoli,location } from '../../assets'
import ACardTransaksi from './ACardTransaksi'
import CurrencyFormat from 'react-currency-format'

const CardTransaksi = ({cart}) => {
    const context = useContext(ProductContext)
    const [color, setColor] = useState(false)
    const [status, setStatus] = useState(false)
    const [id, setId] = useState('')

    const elim = cart.CreatedAt.substring(0,10)



    
  return (
    <section className='flex flex-col font-mulish mb-8 border-[1px] border-black rounded-3xl p-4  '>
        <div className='flex flex-row justify-between mb-2'>
        <ul className=' basis-[80%] flex flex-row  gap-6 items-center text-[15px]'>
            <li className='font-bold'>{elim}</li>
            <li className={`${cart.status.Status === "Berlangsung" &&'bg-warning'} ${cart.status.Status === "Berhasil" &&'bg-postive'} ${cart.status.Status === "Tidak Berhasil" &&'bg-negative'} rounded-3xl p-2 w-[150px] flex font-bold text-white items-center justify-center`}>{cart.status.Status}</li>
            <li className='font-bold'>Id: {cart.payment_code}</li>
        </ul>
        <div className='basis-[20%] h-fit flex flex-row border-[1px] p-2 ml-14 border-green80 rounded-3xl justify-center gap-2'>
                <img src={location} alt='' className='w-[20px]'></img>
                <button className=' text-[15px] font-extrabold tracking-widest'>LIHAT LOKASI</button>
        </div>

        </div>
        <div className='flex-col flex gap-3'>
        {cart.payment_product.map((item,i) => (
            <ACardTransaksi key={i} foto={item.product.product_image} category={item.product.category.Name} name={item.product.name} price={item.product.price} count={item.quantity}></ACardTransaksi>
            
        ))} 
        </div>
        <div className='flex flex-row justify-end py-3 mt-4 items-center border-t-2 font-extrabold text-[20px] border-green80'>
        <CurrencyFormat
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={'Rp'}
                displayType={'text'}
                value={JSON.stringify(cart.total_price)}/>
               
            
        </div>
    </section>
  )
}

export default CardTransaksi
