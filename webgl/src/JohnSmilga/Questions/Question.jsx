import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import React from "react";

const Question = ({ data }) => {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={"1fr 1fr"}>
        {data.map(({ img, id, title, category, price, desc }) => {
          return (
            <Flex m={"1rem"} key={id}>
              <Image
                src={img}
                alt={"nope"}
                w={"20rem"}
                h={"15rem"}
                objectPosition={"center"}
                objectFit={"cover"}
                borderRadius={"1rem 0 0 1rem"}
                boxShadow={" 0px 6px 28px -9px rgba(0,0,0,0.75)"}
                // border={"black 0.3rem solid"}
              />
              <Box
                p={"1rem"}
                bg={"white"}
                borderRadius={"0 1rem 1rem 0"}
                boxShadow={" 0px 6px 28px -9px rgba(0,0,0,0.75)"}
                w={"22rem"}
              >
                <Heading color="#5e2a0c">{title}</Heading>
                <Heading as="h4" color={"teal"}>
                  ${price}
                </Heading>
                <p>{desc}</p>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </>
  );
};

export default Question;
