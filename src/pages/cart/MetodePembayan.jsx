import React, { useContext, useState } from "react";
import { ProductContext } from "../../api/dummy";

const MetodePembayan = () => {
  const [isOnlinePayment, setOnlinePayment] = useState(false);
  const [isOfflinePayment, setOfflinePayment] = useState(false);

  const context = useContext(ProductContext);

  const handleOnlinePayment = (e) => {
    console.log("dibayar secara online");
    setOnlinePayment(true);
    context.setTypePayment(true);
    setOfflinePayment(false);
  };

  const handleOfflinePayment = (e) => {
    console.log("dibayar secara offline");
    setOnlinePayment(false);
    setOfflinePayment(true);
    context.setTypePayment(false);
  };

  return (
    <section className="flex flex-col font-mulish">
      <h1 className="text-[20px] font-bold">Metode Pembayaran</h1>
      <div className="bg-green10 font-extrabold flex flex-row justify-center item-center py-10 ">
        <label className="inline-flex items-center  gap-28">
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded-full "
              checked={isOnlinePayment}
              onChange={(e) => {
                handleOnlinePayment(e);
              }}
            ></input>
            <span className="ml-2 text-gray-700">Pembayaran Online</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 rounded-full "
              checked={isOfflinePayment}
              onChange={(e) => {
                handleOfflinePayment(e);
              }}
            ></input>
            <span className="ml-2 text-gray-700">Pembayaran Offline</span>
          </div>
        </label>
      </div>
    </section>
  );
};

export default MetodePembayan;
