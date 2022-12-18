import React from "react";

import ContextPartner from "./ContextPartner";

const Context = () => {
  const ContestContext = React.createContext();
  return (
    <ContestContext.Provider value="hello World">
      <h1>Hello</h1>
      <ContextPartner />
    </ContestContext.Provider>
  );
};

export default Context;
