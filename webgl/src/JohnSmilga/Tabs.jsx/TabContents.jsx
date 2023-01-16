import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const TabContents = ({ data }) => {
  const [infos, SetInfos] = useState(data);
  const [index, SetIndex] = useState(0);
  return (
    <>
      <Flex gap={"1rem"}>
        <div>
          {data.map((e, ind) => {
            return (
              <Button
                key={e.id}
                padding={"1rem"}
                m={"0.5rem"}
                bg={"transparent"}
                borderBottom={"2px solid grey"}
                borderTop={"none"}
                borderRight={"none"}
                borderLeft={"none"}
                border={index === ind && "2px solid grey"}
                borderRadius="5px"
                width={"5rem"}
                cursor={"pointer"}
                _hover={{ border: "2px solid grey", borderRadius: "5px" }}
                onClick={() => SetIndex(ind)}
              >
                {e.company}
              </Button>
            );
          })}
        </div>
        <div>
          <h1>{infos[index].title}</h1>
          <h4>{infos[index].company}</h4>
          <p>{infos[index].dates}</p>
          {infos[index].duties.map((e, index) => {
            return (
              <Flex justify={"center"} align={"center"} key={index}>
                <IoIosArrowForward size="3rem" />
                <Text m={"1rem"}>{e}</Text>
              </Flex>
            );
          })}
        </div>
      </Flex>
    </>
  );
};

export default TabContents;
