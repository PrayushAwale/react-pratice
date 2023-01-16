import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TabContents from "./TabContents";

const Tab = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://course-api.com/react-tabs-project";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, [url]);
  if (loading) {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  return (
    <>
      <Center h={"100vh"} bg={"#fcf0e4"}>
        <Box w={"50rem"}>
          <TabContents data={data} />
        </Box>
      </Center>
    </>
  );
};

export default Tab;
