import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Box, Flex } from "@chakra-ui/react";
const FoodLists = ({ list, deleteItem, editItems }) => {
  return (
    <>
      {list.map((items) => {
        return (
          <div key={items.key}>
            <Flex justify={"space-between"} mt={" 0.8rem"}>
              <h4>{items.name}</h4>
              <div>
                <FiEdit2
                  style={{ marginRight: "0.5rem" }}
                  cursor={"pointer"}
                  onClick={() => editItems(items.key)}
                />
                <MdOutlineDeleteOutline
                  cursor={"pointer"}
                  color={"red"}
                  onClick={() => deleteItem(items.key)}
                />
              </div>
            </Flex>
            <Box h={"0.5px"} bg={"gray"} w={"100%"} mt={"0.3rem"}></Box>
          </div>
        );
      })}
    </>
  );
};

export default FoodLists;
