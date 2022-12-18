import React from "react";
import AppHome from "./AppHome";
import datass from "./Data";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";

const AppMain = () => {
  const [datas, setDatas] = useState([]);

  const fetching = () => {
    setDatas([...datass]);
  };
  useEffect(() => {
    fetching();
  }, []);

  const url = "https://course-api.netlify.app/api/react-tours-project";
  const filterOut = (id) => {
    setDatas(datas.filter((data) => data.id !== id));
  };
  return (
    <div>
      {datas.length === 0 && (
        <div>
          <div>The List has been Cleared!!</div>
          <Button onClick={fetching}>Refresh</Button>
        </div>
      )}
      {datas.map((data) => {
        return <AppHome key={data.id} {...data} filterOut={filterOut} />;
      })}
    </div>
  );
};

export default AppMain;
