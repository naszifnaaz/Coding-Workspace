import { useState, useEffect } from "react";
import axios from "axios";
import { ProductDesc } from "../components/ProductDesc";

export const Jewellery = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch("http://localhost:8080/jewellery");
    data = await data.json();
    console.log(data);
    setData(data);
  }

  function showDetails(el) {
    setItem(el);
    setShow(true);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          margin: "5rem",
        }}
      >
        {!show ? (
          data.map((el) => {
            return (
              <div key={el.id} onClick={() => showDetails(el)}>
                <img src={el.image} style={{ width: "400px" }} />
                <p>{el.title}</p>
                <p>{el.category}</p>
                <p>{el.price}</p>
              </div>
            );
          })
        ) : (
          <ProductDesc el={item} />
        )}
      </div>
    </div>
  );
};
