import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../api/dummy'
import { brokoli } from '../../assets'
import CurrencyFormat from 'react-currency-format'
import ProductList from '../Homepage/ProductList'
import Loading from '../../components/Loading'
import Kalkulasi from './Kalkulasi'
import axios from '../../api/axios'
import { config } from '@fortawesome/fontawesome-svg-core'

const CardPesanan = ({product}) => {

const context = useContext(ProductContext)
const [idPost , setIdPost] = useState(product.id)
const [category, setCategory] = useState('')
const [nameOfProduct, setNameOfProduct] = useState('')
const [priceOfProduct, setPriceOfProduct] = useState(0)
const [totalPrice, setTotalPrice] = useState(0)
const [amount,setAmount] = useState({count:product.amount, satuan:'ikat'})
const counts = amount.count
const satuans = amount.satuan
const [isDelete, setIsDelete] = useState(false)
const [updated, setUpdated] = useState(false)
const [idCartOld, setIdCartOld] = useState('')
// State untuk Edit
const [editItem, setEditItem] = useState([])


useEffect(()=>{

    setTimeout(()=>{
        setUpdated(false)
    },1000)
    setUpdated(true)

    if ( product ) {
   
        console.log(product)
        setTotalPrice(product.price * counts)
        setCategory(product.category)
        setNameOfProduct(product.name)
        setPriceOfProduct(product.price)
        
       
    }
    if ( counts < 1) {
 
        setIsDelete(true)

    }
    console.log(context.cart)
},[isDelete,counts])

// Harga Total yang Harus dibayar
useEffect(()=>{
    if( context.cart.length === 1){
        context.setHargaTotal(totalPrice)
    }
    
},[totalPrice])

useEffect(()=>{
  
    if (context.cart.length > 1){
        context.setHargaTotal( product.price * counts + context.hargaTotal)
    } 
},[context.cart.length])

// HANDLE DELETE

const handleDelete = async (e) => {
    e.preventDefault()
    const filterGetArrayTodo = context.cart.filter((item)=>{
        return item.idCart !== product.idCart
    })
    context.setCart (filterGetArrayTodo)
    console.log("Data Delete")
    console.log(context.cart)

    try {
        const token = localStorage.getItem("Authorization");
        
        let config = {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }

        const response = await axios.delete(`/api/v1/user/market/cart?Product_ID=${idPost}`,config)
        console.log("data data di database di delete")
    } catch(err) {
        console.log(err)
    }
}


const handleEdit = async (e) => {
    e.preventDefault()
    // context.setCount(counts)
        setEditItem(product)
        console.log('INI DIA YANG DICARI WARGA2')
        console.log(product)
        if(editItem.id){
            const updateItem = {
                ...editItem,
                // idCart: idCartOld,
                amount: counts,
                price: priceOfProduct,
                totalprice: priceOfProduct*counts
    
            }
            
            const indexEditTodo = context.cart.findIndex((editId) =>{
                return editId.idCart === editItem.idCart
            })
            // console.log(indexEditTodo)
            // Masukkan state sebelumnya pada state utama ke dalam variabel
            const updatedItem = [...context.cart]
            // Menggunakan vaiabel sebelunya, ganti index ke-n pada State sebenarnya
            updatedItem[indexEditTodo]= updateItem
            // Update Cart (State Utama)
            context.setCart(updatedItem)
         


            // DI TRANSFER KE BACKEND
           setIdPost(product.id) 
            console.log("id: " +  idPost)
            console.log("counts: " +  counts)

          
            try {
                const token = localStorage.getItem("Authorization");
               
            
                let config = {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                }
                const response = await axios.post(`/api/v1/user/market/cart?product_id=${idPost}`
                ,
                 {
                    Quantity: counts
                },  config )

             

                
                
                    

            } catch {
                console.log("Ini data yang diedit")
                    
            }




        }
}


  return (
   <section>
    {category && !updated && <>
    <div className='flex flex-row items-center gap-8 bg-green10 p-5 font-mulish'>   
        <img src={product.product_image} alt='item-dibeli' className='basis-[20%] p-2 w-[20px] h-[100px] bg-neutral20'/> 

        <div className='basis-[45%]'>
            <h3 className='text-[15px] text-neutral70 font-medium'>{category}</h3>
            <h1 className='text-[18px] font-extrabold'>{nameOfProduct}</h1>
            <h1 className='text-[18px] font-bold'>
              <CurrencyFormat
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={'Rp'}
                displayType={'text'}
                value={JSON.stringify(`${totalPrice}`)}/>
            </h1>
        </div>

        <div className='basis-[35%]'>
            <Kalkulasi handleDelete={handleDelete} handleEdit={handleEdit} counts={counts} totalPrice={totalPrice} priceOfProduct={priceOfProduct} satuans={satuans} setAmount={setAmount}></Kalkulasi>
        </div>

        
    </div>
    
    </>}
    { category && updated && <>
    <h1 className='py-[46px] flex flex-row justify-center items-center'><Loading></Loading></h1>
    </>

    }
   </section>
  )
}

export default CardPesanan
