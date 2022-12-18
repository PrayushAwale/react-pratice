import React from "react";
import { createStyles } from "@mantine/core";
import styled from "@emotion/styled";
import protrait from "../../../assets/protrait.jpg";

const SM = createStyles((theme) => ({
  box: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
  },
  color: {
    height: "100%",
  },
}));

const StyledAnimated = styled.canvas`
  width: 100%;
  height: 100%;
  filter: blur(1rem);
  transform: rotate(0deg) scale(2) translateY(0%);
  --gradient-color-1: #000000;
  --gradient-color-2: #e24b0c;
  --gradient-color-3: #1c3163;
  --gradient-color-4: #6c93ac;
  --gradient-speed: 0.000019999999999999998;
`;
const Header = () => {
  const { classes } = SM();
  return (
    <div>
      <img src={protrait} alt="" />
    </div>
  );
};

export default Header;
