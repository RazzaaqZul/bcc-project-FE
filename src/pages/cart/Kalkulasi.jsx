import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../api/dummy";
import ProductList from "../Homepage/ProductList";

const Kalkulasi = ({
  handleDelete,
  handleEdit,
  counts,
  totalPrice,
  priceOfProduct,
  satuans,
  setAmount,
}) => {
  const context = useContext(ProductContext);
  const [isBegin, setIsBegin] = useState(false);
  useEffect(() => {
    // isBegin
    // // if ( context.length === 1 ){
    //     context.setTotalPayment(totalPrice)
    // }
  }, []);

  const handlePaymentDecrement = () => {
    context.setHargaTotal((prev) => prev - priceOfProduct);
  };

  const handlePaymentIncrement = () => {
    context.setHargaTotal((prev) => prev + priceOfProduct);
  };

  return (
    <form onSubmit={counts == 0 ? handleDelete : handleEdit}>
      <div className="flex flex-row justify-center items-center gap-6 border-2 border-green80 rounded-3xl max-w-[150px] py-2">
        <button
          type="submit"
          onClick={() => {
            setAmount((prevState) => {
              handlePaymentDecrement();

              return { ...prevState, count: prevState.count - 1 };
            });
          }}
          className="flex justify-center items-center basis-1/4 rounded-l-3xl text-green80 font-extrabold"
        >
          -
        </button>
        <div className="flex justify-center item-center gap-2 font-bold">
          <span>{counts}</span>
          <span>x</span>
        </div>
        <button
          type="submit"
          onClick={() => {
            setAmount((prevState) => {
              handlePaymentIncrement();
              return { ...prevState, count: prevState.count + 1 };
            });
          }}
          className="flex justify-center items-center basis-1/4  rounded-r-3xl text-green80 font-extrabold"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default Kalkulasi;
