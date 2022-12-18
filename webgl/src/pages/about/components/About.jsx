import React from "react";
import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
  },
  box: {
    height: "100%",
    width: "100%",
    zIndex: "999",
    position: "relative",
  },
}));

const About = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div id="wrapper" className={classes.box}>
        <img
          src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2020/10/d2d45a301a0c1dff346be17416bb622e.jpg"
          alt=""
        />
      </div>
      <ul>
        <li>
          <a href="#">To google</a>
        </li>
        <li>
          <a href="#">To google</a>
        </li>
        <li>
          <a href="#">To google</a>
        </li>
        <li>
          <a href="#">To google</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
