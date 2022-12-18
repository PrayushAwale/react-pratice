import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

const ListMaker = ({ name, age, para, deleteList, id }) => {
  const [isRead, setIsRead] = useState(false);
  return (
    <>
      <Box bg={"grey"} p={"1rem"} borderRadius={"1rem"} mb={"1rem"}>
        <h1>
          {name} == {age}
        </h1>
        <p>
          {isRead ? para : `${para.substring(0, 100)}...`}{" "}
          <button onClick={() => setIsRead(!isRead)}>
            {isRead ? "redless" : "redmore"}
          </button>
        </p>
        <Button cursor={"pointer"} onClick={() => deleteList(id)}>
          Not INterested
        </Button>
      </Box>
    </>
  );
};

export default ListMaker;
