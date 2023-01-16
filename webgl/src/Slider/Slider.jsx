import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
const Slider = () => {
  const [typeWord, setTypeWord] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={typeWord}
          onChange={(e) => {
            if (typeWord.length < 10) setTypeWord(e.target.value);
          }}
        />
        <p>{10 - typeWord.length}</p>
      </form>
    </div>
  );
};

export default Slider;
