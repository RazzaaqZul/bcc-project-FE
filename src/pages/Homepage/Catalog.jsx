import React, { useContext, useEffect, useState } from "react";
import axios from "../../api/axios";
import { ProductContext } from "../../api/dummy";
import { DataProductContext } from "../../api/product";
import { search } from "../../assets";
import { Card } from "../../components";

const Catalog = ({ filter, search }) => {
  const context = useContext(ProductContext);
  const productContext = useContext(DataProductContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(context.productList);
    console.log(data);

    // console.log(productContext.product)

    if (filter === 1) {
      const handleFilterSayur = async () => {
        try {
          const token = localStorage.getItem("Authorization");

          let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await axios.get(
            `/api/v1/user/market/products/filter/${filter}`,
            config
          );

          console.log(response?.data?.data);
          setData(response?.data?.data);
        } catch (err) {
          console.log(err);
        }
      };
      handleFilterSayur();
    } else if (filter === 2) {
      const handleFilterSayur = async () => {
        try {
          const token = localStorage.getItem("Authorization");

          let config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await axios.get(
            `/api/v1/user/market/products/filter/${filter}`,
            config
          );

          console.log(response?.data?.data);
          setData(response?.data?.data);
        } catch (err) {
          console.log(err);
        }
      };
      handleFilterSayur();
    }
  }, [, filter]);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const token = localStorage.getItem("Authorization");

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        console.log("ini yang dicari:" + search);
        const response = await axios.get(
          `/api/v1/user/market/search?q=${search}`,
          config
        );

        console.log(response?.data?.data);
        setData(response?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleSearch();
  }, [search]);

  return (
    <section>
      {data && (
        <ul className="grid grid-cols-4 gap-y-12 max-resgrid:grid-cols-3  ">
          {data.map((item, i) => (
            <li key={i} className="m-auto">
              <Card product={item} />
            </li>
          ))}
        </ul>
      )}

      {!data && <div className="h-[400px]"></div>}
    </section>
  );
};

export default Catalog;
