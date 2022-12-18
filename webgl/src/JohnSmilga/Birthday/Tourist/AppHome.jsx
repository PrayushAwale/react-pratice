import React from "react";
import { Box, Button } from "@mantine/core";
import { useState } from "react";

const AppHome = ({ name, age, para, id, filterOut }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          background: "black",
          color: "white",
          marginBottom: "1rem",
          width: "20rem",
          borderRadius: "1rem",
        }}
      >
        <div>
          {name} | {age}
        </div>
        <p>
          {readMore ? para : `${para.substring(0, 100)}...`}{" "}
          <Button
            size="sm"
            onClick={() => setReadMore((prev) => (prev ? false : true))}
          >
            {readMore ? "Show Less" : "Read More"}
          </Button>{" "}
        </p>
        <Button onClick={() => filterOut(id)}>Not Interested</Button>
      </Box>
    </>
  );
};

export default AppHome;
