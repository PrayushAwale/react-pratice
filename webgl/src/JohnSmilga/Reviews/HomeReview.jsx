import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Reviews from "./Reviews";

const HomeReview = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      h={"100vh"}
      bgImage={
        "url('https://cdn.pixabay.com/photo/2021/03/26/09/32/bear-6125372_1280.jpg')"
      }
      bgPos={"center"}
      bgSize={"cover"}
    >
      <Box
        p={"0.8rem 2.5rem"}
        bg={"white"}
        borderRadius={"1rem"}
        boxShadow={" 0px 6px 28px -9px rgba(0,0,0,0.75)"}
        sx={{
          "-webkit-box-shadow": "0px 6px 28px -9px rgba(0,0,0,0.75)",
          "-moz-box-shadow": "0px 6px 28px -9px rgba(0,0,0,0.75)",
        }}
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
