import React from "react";
import { Box } from "@chakra-ui/layout";

const Container = ({ children, ...rest }) => {
  return (
    <Box padding={10} {...rest}>
      {children}
    </Box>
  );
};

export default Container;
