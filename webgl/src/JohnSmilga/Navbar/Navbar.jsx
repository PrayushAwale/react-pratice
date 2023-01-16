import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { links, social } from "./data";
import Options from "./Options";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [navIsActive, setNavIsActive] = useState(false);

  const alterNav = () => {
    setNavIsActive(!navIsActive);
  };
  return (
    <Box position={"relative"}>
      <Flex
        bg={"#fcf0e4"}
        justify={"space-between"}
        padding={"2rem"}
        align={"center"}
      >
        <Text as={"h2"} fontSize={"2rem"}>
          <Text as={"span"} color={"teal"}>
            I
          </Text>
          cream
        </Text>
        <Flex align={"center"} gap={"1rem"}>
          <Text as={"h2"} cursor={"pointer"}>
            Home
          </Text>
          <Text as={"h2"} cursor={"pointer"}>
            About
          </Text>
          <Text as={"h2"} cursor={"pointer"}>
            Contact
          </Text>
        </Flex>
        <RxHamburgerMenu
          size={"1.4rem"}
          cursor={"pointer"}
          onClick={alterNav}
        />
      </Flex>
      <Flex
        bg={"white"}
        align={"center"}
        justify={"center"}
        position={"absolute"}
        top={navIsActive ? 0 : -250}
        left={0}
        width={"100%"}
        transition={"0.5s all ease-in-out"}
        borderRadius={"0 0 1rem 1rem"}
        boxShadow={" 0px 6px 28px -9px rgba(0,0,0,0.2)"}
        p={"2rem "}
        zIndex={10}
      >
        <Options links={links} social={social} alterNav={alterNav} />
      </Flex>
    </Box>
  );
};

export default Navbar;
