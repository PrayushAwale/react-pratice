import { Box } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";

const Data = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {products.map((data) => {
        return (
          <Box p={"1rem"} bg={"grey"} borderRadius={"1rem"} mt={"0.5rem"}>
            <h1>{data.title}</h1>
            <img src={data.image} alt="products" width={"100rem"} />
            <p>{data.price}</p>
          </Box>
        );
      })}
    </>
  );
};

export default Data;
