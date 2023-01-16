import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { RxCross1 } from "react-icons/rx";
const Options = ({ links, alterNav }) => {
  return (
    <Box>
      <RxCross1
        style={{ position: "absolute", right: "8px", top: "8px" }}
        cursor={"pointer"}
        size={"1.4rem"}
        onClick={alterNav}
      />
      <Flex
        gap={"1rem"}
        direction={"column"}
        justify={"center"}
        alignContent={"center"}
      >
        {links.map((items) => {
          return <div>{items.text}</div>;
        })}
      </Flex>
    </Box>
  );
};

export default Options;
