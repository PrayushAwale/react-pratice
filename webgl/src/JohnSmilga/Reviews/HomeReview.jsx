import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Reviews from "./Reviews";

const HomeReview = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      h={"100vh"}
      background={
        "linear-gradient(180deg, rgba(252,240,228,1) 0%, rgba(252,240,228,1) 0.5%, rgba(255,255,255,0) 17%, rgba(255,255,255,0) 100%), url('https://cdn.pixabay.com/photo/2021/03/26/09/32/bear-6125372_1280.jpg')"
      }
      bgPos={"center"}
      bgSize={"cover"}
      overflow={"hidden"}
    >
      <Box
        p={"0.8rem 2.5rem"}
        bg={"white"}
        borderRadius={"1rem"}
        boxShadow={" 0px 6px 28px -9px rgba(0,0,0,0.75)"}
        textAlign={"center"}
        maxW={"40rem"}
        color={"#5e2a0c"}
      >
        <h1>Our Reviews</h1>

        <Reviews />
      </Box>
    </Flex>
  );
};

export default HomeReview;
