import React from "react";
import { Box } from "@chakra-ui/layout";

import styles from "./Header.module.css";
const Header = () => {
  return (
    <Box className={styles.header} backgroundColor="black">
      Ravn Star Wars Registry
    </Box>
  );
};

export default Header;
