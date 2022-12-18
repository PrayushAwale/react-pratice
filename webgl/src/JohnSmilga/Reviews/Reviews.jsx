import React from "react";
import { useState } from "react";
import people from "./Data";
import { Image, Flex } from "@chakra-ui/react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, profile, job, para } = people[index];
  const leftSlide = () => {
    if (index === 0) {
      return;
    }
    setIndex((prev) => {
      return (prev = prev - 1);
    });
  };
  const rightSlide = () => {
    if (index === 4) {
      return;
    }
    setIndex((prev) => {
      return (prev = prev + 1);
    });
  };
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <AiFillLeftCircle
        size={"10rem"}
        cursor={"pointer"}
        onClick={leftSlide}
        display={index === 0 ? "none" : "block"}
      />
      <div>
        <Image
          src={profile}
          alt={name}
          borderRadius={"50%"}
          maxW={"11rem"}
          objectPosition={"center"}
          objectFit={"cover"}
        />
        <h4>{name}</h4>
        <p style={{ color: "#e26731" }}>{job}</p>
        <p>{para}</p>
      </div>

      <AiFillRightCircle
        size={"10rem"}
        cursor={"pointer"}
        onClick={rightSlide}
        display={index === 4 ? "none" : "block"}
      />
    </Flex>
  );
};

export default Reviews;
