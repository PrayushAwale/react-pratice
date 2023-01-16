import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Catagories from "./Catagories";
import Data from "./Data";
import Question from "./Question";
const HomeQuestion = () => {
  const [data, setData] = useState(Data);
  const catagories = [
    "All",
    ...new Set(
      Data.map((item) => {
        return item.category;
      })
    ),
  ];
  const filterList = (category) => {
    if (category === "All") {
      setData(Data);
      return;
    }
    const newList = Data.filter((item) => {
      return item.category === category;
    });
    setData(newList);
  };
  return (
    <>
      <Box minH={"100vh"} bg={"#fcf0e4"} p={"5rem 3rem"}>
        <h1>Menu</h1>
        <Catagories data={catagories} filterList={filterList} />
        <Question data={data} />
      </Box>
    </>
  );
};

export default HomeQuestion;
