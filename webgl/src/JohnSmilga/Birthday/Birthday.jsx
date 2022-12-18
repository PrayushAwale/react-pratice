import { datas } from "./List";
import Create from "./Create";
import { Button } from "@mantine/core";
import { useState } from "react";
const Birthday = () => {
  const [data, setData] = useState(datas);
  return (
    <div>
      <h1>{data.length} People birthday</h1>
      <Create data={data} />
      <Button onClick={() => setData([])}>CLick To CLear</Button>
    </div>
  );
};

export default Birthday;
