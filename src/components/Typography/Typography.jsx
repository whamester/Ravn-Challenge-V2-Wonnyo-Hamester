import { Text as TextChakra } from "@chakra-ui/layout";
import React from "react";

export const Title = ({ children, secondary, ...rest }) => {
  return (
    <TextChakra
      isTruncated
      fontSize="md"
      fontWeight="bold"
      color={secondary ? "gray.500" : "black"}
      {...rest}
    >
      {children}
    </TextChakra>
  );
};

export const Text = ({ children, secondary, ...rest }) => {
  return (
    <TextChakra
      isTruncated
      fontSize="sm"
      color={secondary ? "gray.500" : "black"}
      {...rest}
    >
      {children}
    </TextChakra>
  );
};
