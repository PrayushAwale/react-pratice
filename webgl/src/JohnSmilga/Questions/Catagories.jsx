import React from "react";
import { Button, color } from "@chakra-ui/react";
import { useState } from "react";
const Catagories = ({ data, filterList }) => {
  const [isActive, setIsActive] = useState(null);
  const handleSelect = (item) => {
    setIsActive(item);
  };
  return (
    <>
      {data.map((item, index) => {
        return (
          <Button
            key={index}
            mr={"1rem"}
            p={"0.5rem 1rem"}
            cursor={"pointer"}
            borderRadius={"1rem"}
            bg={isActive === item ? "#5e2a0c" : "transparent"}
            color={isActive == item ? "white" : "#5e2a0c"}
            borderColor={"#5e2a0c"}
            onClick={() => {
              filterList(item);
              handleSelect(item);
            }}
            fontSize={"1rem"}
            _hover={{ bg: "#5e2a0c", color: "#fcf0e4" }}
          >
            {item}
          </Button>
        );
      })}
    </>
  );
};

export default Catagories;
