import React from "react";
import { Box } from "@chakra-ui/layout";

import styles from "./Header.module.css";
import { Title } from "../Typography";
import { Flex } from "@chakra-ui/layout";
const Header = () => {
  return (
    <Flex
      className={styles.header}
      backgroundColor="black"
      align="center"
      pl={5}
    >
      <Title color="white"> Ravn Star Wars Registry</Title>
    </Flex>
  );
};

export default Header;
