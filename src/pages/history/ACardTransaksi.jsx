import React from 'react'
import CurrencyFormat from 'react-currency-format'

const ACardTransaksi = ({foto, category, name, price, count}) => {

  return (
    <div className='flex flex-row items-center w-full gap-5'>
        <div className='basis-[10%] justify-center'>
        <img src={foto} className='bg-neutral20 w-[150px] p-4' alt='gambar-product'></img>
        </div>
        <div className='basis-[80%]  items-center '>
            <ul className='flex flex-col justify-end '>
            <li className='text-neutral70 text-[20px] font-bold'>{category}</li>
            <li className='text-[24px] font-extrabold'>{name}</li>
            <li className='font-bold'> <CurrencyFormat
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={'Rp'}
                displayType={'text'}
                value={JSON.stringify(price*count)}/></li>
            </ul>
        </div>
        <div className='basis-[10%] items-center justify-end font-bold'>
            {count}x
        </div>
      
    </div>

  )
}

export default ACardTransaksi
