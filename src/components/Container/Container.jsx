import { Box } from "@chakra-ui/layout";
import React from "react";

const Container = ({ children, ...rest }) => {
  return (
    <Box padding={10} {...rest}>
      {children}
    </Box>
  );
};

export default Container;
