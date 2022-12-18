import React from "react";
import { useContext } from "react";
const ContextPartner = () => {
  const data = useContext(ContestContext);
  console.log(data);
  return <div>ContextPartner</div>;
};

export default ContextPartner;
