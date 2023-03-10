import { createContext, useEffect, useState } from "react";
import axios from "./axios";


export const DataProductContext = createContext({})

export function DataProductProvider ({children}){
    const [product, setProduct] = useState([])


    useEffect(()=>{
        const fetchProduct = async() => {
            try {
                const response = await axios.get('/seller/login')
                console.log(response)
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

    const dataProductContextValue = {
        product
    }
    return (
        <DataProductContext.Provider value={dataProductContextValue}>
            {children}
        </DataProductContext.Provider>
    )
}