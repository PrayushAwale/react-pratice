import React from "react";
import { useState } from "react";
import Data from "../Birthday/Tourist/Data";
import ListMaker from "./ListMaker";

const Tourist = () => {
  const [data, setData] = useState(Data);
  console.log(data.length);
  const deleteList = (id) => {
    const newData = data.filter((idd) => {
      return idd.id != id;
    });
    setData(newData);
  };
  const reloadPage = () => {
    setData(Data);
  };
  return (
    <>
      {data.length ? (
        <div>
          {data.map((datas) => {
            return (
              <ListMaker {...datas} key={datas.id} deleteList={deleteList} />
            );
          })}
        </div>
      ) : (
        <div>
          <h1>HELLO</h1>
          <button onClick={reloadPage}>Reload</button>
        </div>
      )}
    </>
  );
};

export default Tourist;
