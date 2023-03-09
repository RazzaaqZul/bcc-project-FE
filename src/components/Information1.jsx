import React, { useEffect, useState } from 'react'
import Card from './Card'
// axios
// import axiost
import api from '../api/posts';

export const Information1 = () => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const fetchProduct = async () =>{
            try {
                const response = await api.get('/posts')
                setProduct(response.data)
            } catch (err){
                if ( err.response) {
                    // not in the 200 response range
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
    
                } else {
                    console.log('Error : ${err.message}')
                }
            }
        }
        fetchProduct()
    },[])

    console.log(product)

  return (
    <div className='bg-dimGreen py-[40px]'>
      <div className='mx-[120px] mb-[20px] pt-7 text-justify text-white font-inter font-[550]'>
        <p>Easy Meal adalah sebuah marketplace online yang menyediakan bahan makanan yang tergolong food loss atau makanan yang biasanya dibuang karena tidak memenuhi standar pasar. Dalam upaya mengurangi jumlah limbah makanan yang terbuang, Easy Meal membeli bahan makanan tersebut langsung dari para petani dan produsen lokal dengan harga yang lebih murah. Bahan makanan tersebut kemudian diolah dan dikemas dengan rapi sehingga dapat bertahan lebih lama. Melalui platform online yang mudah digunakan, konsumen dapat memilih bahan makanan yang diinginkan dan langsung memesannya. Selain memberikan solusi untuk mengurangi food loss, Easy Meal juga membantu para petani dan produsen lokal untuk meningkatkan penghasilannya.</p>  
      </div>
     
      <div className=' mx-[120px] bg-white rounded-2xl p-10 '>
        <h1 className='text-[40px] mb-[10px] font-inter font-bold '>Produk Kami</h1>
        <ul className='flex flex-row gap-8 overflow-x-scroll'> 
        {product.map((item)=>(
            <li key={item.id} ><Card product={item}/></li>
        ))}
    

        </ul>
      </div>
    </div>
  
  )
    }

// export default Information1
