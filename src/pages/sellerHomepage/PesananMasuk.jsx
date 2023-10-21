import React, { useContext } from "react";
import { ProductContext } from "../../api/dummy";
import { brokoli } from "../../assets";
import CurrencyFormat from "react-currency-format";
const PesananMasuk = () => {
  const context = useContext(ProductContext);
  const lisPesanan = context.cart;

  // Data Dummy:
  const pesanan = [
    {
      order: [
        {
          id: 123456,
          date: "31 Januari 2023",
          img: `${brokoli}`,
          category: "Sayur",
          name: "Bayam",
          count: 1,
          satuan: "ikat",
          price: 1000,
        },
        {
          id: 123456,
          date: "31 Januari 2023",
          img: `${brokoli}`,
          category: "Sayur",
          name: "Bayam",
          count: 1,
          satuan: "ikat",
          price: 1000,
        },
      ],
    },
  ];

  return (
    <div>
      {pesanan.map((pesanans, i) => (
        <div
          key={`footer-link-key-${i}`}
          className=" rounded-3xl bg-green10  h-[300px] items-center gap-5 max-md:overflow-x-auto overflow-x-auto font-mulish p-10"
        >
          {pesanans.order.map((items, i) => (
            <div className="rounded-3xl p-2 flex flex-col  ">
              <div className="flex flex-col pb-10 gap-2">
                <h1 className="font-extrabold">id : {items.id}</h1>
                <h1 className="font-bold">{items.date}</h1>
                <div className="flex flex-row items-center gap-8">
                  <img
                    src={items.img}
                    className="basis-[10%] w-[50px] h-[100px] bg-neutral20"
                  ></img>
                  <ul className="flex flex-col basis-[80%]">
                    <li className="font-bold text-neutral70 text-[18px]">
                      {items.category}
                    </li>
                    <li className="font-extrabold text-[20px]">{items.name}</li>
                    <li className="font-bold text-[20px]">
                      {items.count} {items.satuan}
                    </li>
                  </ul>
                  <h1 className="basis-[20%] flex justify-end font-bold text-[20px]">
                    <CurrencyFormat
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp"}
                      displayType={"text"}
                      value={JSON.stringify(items.price)}
                    />
                  </h1>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-3 flex text-[20px] justify-between border-t-[1px] font-extrabold border-green90 items-center">
            <div>Total :</div>
            <div>
              <CurrencyFormat
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp"}
                displayType={"text"}
                value={JSON.stringify(20000)}
              />
            </div>
          </div>
        </div>
      ))}

      {/* {pesanan.map((item) => (
                {item.order.map((items)=> (
                    <div className='bg-green20 rounded-3xl p-2'>
                        <div className='flex flex-col gap-3'>
                            <h1>id : {items.id}</h1>
                            <h1>{items.date}</h1>
                            <div className='flex flex-row items-center'>
                                <div>
                                    <img src={items.img} className="basis-[20%]"></img>
                                    <ul className='flex flex-col basis-[80%]'>
                                        <li>{items.category}</li>
                                        <li>{items.name}</li>
                                        <li>{items.count} {items.satuan}</li>
                                    </ul>
                                    <h1 className='basis-[20%] flex justify-end'>{items.price}</h1>
                                </div>
                            </div>
                            <div className='mt-3'>
                            <div className='border-t-[1px] border-green90 pt-3 pb-6'>Total : Rp.20000</div>
                            </div>
                        </div>

                    </div>
                    ))}

            ))} */}
    </div>
  );
};

export default PesananMasuk;
