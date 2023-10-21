import { Input } from "postcss";
import React, { useContext, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Navigate } from "react-router-dom";
import axios from "../../api/axios";
import { ProductContext } from "../../api/dummy";
import { aLogoGreen, brokoli } from "../../assets";
import ButtonAll from "../../components/ButtonAll";
import styles from "../../style";
import ShopDetailCard from "./ShopDetailCard";

const Content = ({ products, id }) => {
  const context = useContext(ProductContext);
  const product = context.productList;
  console.log(products);
  const post = products.find((post) => post.ID === parseInt(id));
  console.log(post);
  const [totalPrice, setTotalPrice] = useState("");
  const [isCheckOut, setIsCheckOut] = useState(false);
  // Kalkulasi
  const [amount, setAmount] = useState({ count: 1, satuan: "ikat" });
  const counts = amount.count;
  const satuans = amount.satuan;
  console.log(products);

  const handleSubmit = async () => {
    // total Price

    console.log(totalPrice);
    context.setCount(counts);
    setIsCheckOut(true);
    // Transfer Data Cart

    context.setCart([
      ...context.cart,
      {
        id: post.ID,
        idCart: context.idCart,
        name: post.name,
        category: post.category.Name,
        price: post.price,
        totalprice: totalPrice,
        amount: counts,
        product_image: post.product_image,
      },
    ]);
    // Going to Cart Page
    setIsCheckOut(true);
    context.setIdCart((prev) => prev + 1);

    try {
      const token = localStorage.getItem("Authorization");

      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `/api/v1/user/market/cart?product_id=${post.ID}`,
        {
          Quantity: counts,
        },
        config
      );
    } catch {
      console.log("Ini data yang diedit");
    }
  };

  useEffect(() => {
    if (context.price) {
      context.setPrice(post.price * counts);
      setTotalPrice(post.price * counts);
    }
  }, [counts]);

  return (
    <section className="flex flex-row gap-28 font-mulish">
      {post && (
        <>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="basis-1/2 flex  justify-center h-[500px]  ">
            <img
              src={post.product_image}
              alt="foto-product"
              className="w-[500px] rounded-3xl h-[500px] "
            ></img>
          </div>

          <div className="basis-1/2 flex-col justify-center ">
            <h3 className="text-[30px] text-neutral70 font-bold">
              {post.category.Name}
            </h3>
            <h1 className="text-[40px] text-black font-[740]">{post.name}</h1>
            <div>
              <ul className="flex flex-row items-center gap-10 text-[15px] py-3">
                <li className=" text-neutral70 font-bold basis-1/4 ">
                  Berat Satuan
                </li>
                <li
                  className=" text-black basis-1/4 font-semibold
                    "
                >
                  {post.mass} gram
                </li>
                <li className="basis-1/2" />
              </ul>
            </div>
            <h1 className="text-[20px] font-[750] text-black py-5">
              <CurrencyFormat
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp"}
                displayType={"text"}
                value={JSON.stringify(post.price * counts)}
              />
            </h1>

            <div className="flex flex-row justify-center items-center gap-6 bg-green20 rounded-3xl max-w-[150px] h-10 ">
              <button
                onClick={() => {
                  setAmount((prevState) => {
                    return { ...prevState, count: prevState.count - 1 };
                  });
                }}
                className="hover:bg-green40 h-10 duration-500 ease-in-out flex justify-center items-center basis-1/4 rounded-l-3xl text-green80 font-extrabold"
              >
                -
              </button>
              <div className="flex justify-center item-center gap-2 font-bold">
                <span>{counts}</span>
                <span>{satuans}</span>
              </div>
              <button
                onClick={() => {
                  setAmount((prevState) => {
                    return { ...prevState, count: prevState.count + 1 };
                  });
                }}
                className=" hover:bg-green40 h-10 duration-500 ease-in-out  flex justify-center items-center basis-1/4  rounded-r-3xl text-green80 font-extrabold"
              >
                +
              </button>
            </div>
            <div className="py-7">
              <ShopDetailCard product={post} />
            </div>
            <p className="text-justify text-[15px]">{post.description}</p>
            <div className="py-8">
              <button onClick={handleSubmit} className={`${styles.button}`}>
                TAMBAHKAN KE KERANJANG
              </button>

              {isCheckOut ? <Navigate to="/cart"></Navigate> : ""}
            </div>
          </div>
          {/* </form> */}
        </>
      )}
      {!post && (
        <>
          <img
            src={aLogoGreen}
            alt=""
            className={`w-[40px] justify-center flex items-center animate-spin duration-300`}
          />
        </>
      )}
    </section>
  );
};

export default Content;
