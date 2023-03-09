import { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext({})


export function ProductProvider({children}){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState('')

    
    const [productList, setProductList] = useState([])
    const [dataToko, setDataToko] = useState([])

    useEffect(()=>{
        
        setDataToko([
            {
                idToko: 1,
                location: "https://www.google.com/maps/place/Universitas+Brawijaya/@-7.9526403,112.6143754,15z/data=!4m2!3m1!1s0x0:0xf19b7459bbee5ed5?sa=X&ved=2ahUKEwiv-Z6Roc79AhU7hGMGHTsvAdUQ_BJ6BQiRARAI",
                namaToko: 'Dapoer Qoe',
                produk: 27,
                bergabung: "2 tahun lalu"
            },{
                idToko: 2,
                location: "https://www.google.com/maps/place/Universitas+Brawijaya/@-7.9526403,112.6143754,15z/data=!4m2!3m1!1s0x0:0xf19b7459bbee5ed5?sa=X&ved=2ahUKEwiv-Z6Roc79AhU7hGMGHTsvAdUQ_BJ6BQiRARAI",
                namaToko: "Fresh Harvest Market",
                produk: 123,
                bergabung: "2 tahun lalu"
            },{
                idToko: 3,
                location: "https://www.google.com/maps/place/Universitas+Brawijaya/@-7.9526403,112.6143754,15z/data=!4m2!3m1!1s0x0:0xf19b7459bbee5ed5?sa=X&ved=2ahUKEwiv-Z6Roc79AhU7hGMGHTsvAdUQ_BJ6BQiRARAI",
                namaToko: "Sunshine Produce Co.",
                produk:11,
                bergabung: "2 tahun lalu"
            },{
                idToko: 4,
                location: "https://www.google.com/maps/place/Universitas+Brawijaya/@-7.9526403,112.6143754,15z/data=!4m2!3m1!1s0x0:0xf19b7459bbee5ed5?sa=X&ved=2ahUKEwiv-Z6Roc79AhU7hGMGHTsvAdUQ_BJ6BQiRARAI",
                namaToko: "Garden Delights Emporium",
                produk:200,
                bergabung: "2 tahun lalu"
            },{
                idToko: 5,
                location: "https://www.google.com/maps/place/Universitas+Brawijaya/@-7.9526403,112.6143754,15z/data=!4m2!3m1!1s0x0:0xf19b7459bbee5ed5?sa=X&ved=2ahUKEwiv-Z6Roc79AhU7hGMGHTsvAdUQ_BJ6BQiRARAI",
                namaToko: "Farm to Table Market",
                produk:122,
                bergabung: "2 tahun lalu"
            }








        ])
        

        setProductList([
            {
                id: 1,
                category: "Sayur",
                name: "Bayam",
                price: 1200,
                description: "Sayur bayam adalah jenis sayuran hijau yang sangat baik untuk kesehatan. Dengan daun berbentuk hati yang lembut dan sedikit pahit, bayam mengandung banyak nutrisi seperti vitamin A, vitamin C, vitamin K, folat, zat besi, magnesium, dan kalium. Nutrisi ini membuat bayam bermanfaat untuk menjaga kesehatan mata, tulang, dan sistem pencernaan, serta membantu melindungi tubuh dari kerusakan sel dan radikal bebas. Bayam dapat dimasak dengan berbagai cara, seperti direbus, ditumis, atau dijadikan sebagai bahan salad, dan sering dijadikan bahan utama dalam sup atau masakan sayuran lainnya. Dengan kandungan nutrisi yang tinggi dan khasiat kesehatan yang dimilikinya, sayur bayam merupakan pilihan yang baik untuk dimasukkan ke dalam menu makanan sehari-hari.",
                idtoko: 1,
                namaToko: 'Dapoer Qoe',
            },
            {
                id: 2,
                category: "Buah",
                name: "Mangga",
                price: 20000,
                description: "Bayam dapat dimasak dengan berbagai cara, seperti direbus, ditumis, atau dijadikan sebagai bahan salad, dan sering dijadikan bahan utama dalam sup atau masakan sayuran lainnya. Dengan kandungan nutrisi yang tinggi dan khasiat kesehatan yang dimilikinya, sayur bayam merupakan pilihan yang baik untuk dimasukkan ke dalam menu makanan sehari-hari.",
                idtoko: 2,
                namaToko: "Farm to Table Market",
            },
            {
                id: 3,
                category: "Sayur",
                name: "Tomat",
                price: 10000,
                description: "Tomat merupakan sayuran yang tidak mengandung banyak vitamin dan tidak aman dikonsumsi", 
                idtoko: 1,
                namaToko: 'Dapoer Qoe',
            },
            {
                id: 4,
                category: "Sayur",
                name: "Bayam",
                price: 50000,
                description: "Bayam merupakan sayuran yang tidak mengandung banyak vitamin dan tidak aman dikonsumsi",
                idtoko: 4,
                namaToko: 'Dapoer Qoe',
            },
            {
                id: 5,
                category: "Buah",
                name: "Mangga",
                price: 20.000,
                description: "Mangga arum manis yang rasanya kayak jeruk dan banyak zat besi berbahaya terkandung didalamnya",
                idtoko: 3,
                namaToko: 'Dapoer Qoe',
            },
            {
                id: 6,
                category: "Sayur",
                name: "Tomat",
                price: 10.000,
                description: "Tomat merupakan sayuran yang tidak mengandung banyak vitamin dan tidak aman dikonsumsi",
                idtoko: 5,
                namaToko: 'Dapoer Qoe',
            },
            {
                id: 7,
                category: "Sayur",
                name: "Apel",
                price: 10000,
                description: "Tomat merupakan sayuran yang tidak mengandung banyak vitamin dan tidak aman dikonsumsi",
                idtoko: 2,
                namaToko: 'Dapoer Qoe',
            },
            {
                id: 8,
                category: "Sayur",
                name: "Tomat",
                price: 10.000,
                description: "Tomat merupakan sayuran yang tidak mengandung banyak vitamin dan tidak aman dikonsumsi",
                idtoko: 5,
                namaToko: 'Dapoer Qoe',
            }
        ])
    },[])

    const productContextValue = {
        productList,
        price,
        dataToko
    }

    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    )






}
