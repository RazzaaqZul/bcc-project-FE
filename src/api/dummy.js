import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "./axios";
import axios from "./axios";

export const ProductContext = createContext({})


export function ProductProvider({children}){
    const [selectedId, setSelectedId] = useState('')
    const [count, setCount] = useState([])
    const [totalPayment, setTotalPayment] = useState(0)
    const [price, setPrice] = useState('')
    const [dataDariAPi, setDataDariAPi] = useState([])
    const [cart, setCart] = useState([])
    const [idCart, setIdCart] = useState(1)
    const [kalkulasi, setKalkulasi] = useState()
    const [hargaTotal, setHargaTotal] = useState(0)
    const [search, setSearch] = useState('')
    
    const [typePayment, setTypePayment] = useState(false)
    const [productList, setProductList] = useState([])
    const [dataToko, setDataToko] = useState([])
    const [preview, setPreview] = useState('')
    useEffect(()=>{
        
        // Ambil data Product dari Backend

        const getData = async ()=>{

            try {
                const token = localStorage.getItem("Authorization");
            
                let config = {
                    headers: {
                        Authorization : `Bearer ${token}`
                    }
                }
                const response = await axios.get("/api/v1/user/market/products", config )

                const products = response?.data?.data
                if ( products) {
                    setProductList(products)
                    console.log(productList)
                }
                console.log(productList)
                console.log(productList[0].Category.Name)


            } catch (err) {
                console.log(err)
            }
        }
        getData()

    },[])



    const productContextValue = {
        productList,
        count,
        selectedId,
        dataToko,
        setCount,
        setSelectedId,
        price,
        setPrice,
        cart,
        setCart,
        idCart,
        setIdCart,
        totalPayment,
        setTotalPayment,
        kalkulasi,
        setKalkulasi,
        preview,
        setPreview,
        hargaTotal,
        setHargaTotal,
        typePayment,
        setTypePayment,
        search,
        setSearch
    }

    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    )






}
