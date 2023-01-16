import { Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => { useEffect(() => {
    setTimeout(() => {
      removeAlert(false, "", "");
    }, 2000);
  }, [list]);
  return (
    <>
      <Text
        as="p"
        bg={type}
        borderRadius={"0.5rem"}
        textAlign={"center"}
        color={"white"}
        m={"0.5rem 0"}
      >
        {msg}
      </Text>
    </>
  );
};

export default Alert;
