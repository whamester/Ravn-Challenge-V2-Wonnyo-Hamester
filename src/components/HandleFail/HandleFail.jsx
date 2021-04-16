import { Center } from "@chakra-ui/layout";
import React from "react";
import { Title } from "../Typography";

const HandleFail = ({ error, children }) => {
  return error != null || error !== undefined ? (
    <Center p={5}>
      <Title color="red.500">Fail to Load Data</Title>
    </Center>
  ) : (
    children
  );
};

export default HandleFail;
