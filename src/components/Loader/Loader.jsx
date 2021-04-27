import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
import { Title } from "../Typography";

const Loader = ({ loading, children = null }) => {
  return loading ? (
    <Center p={5}>
      <Spinner mr={2} color="gray.500" />
      <Title secondary>Loading</Title>
    </Center>
  ) : (
    children
  );
};

export default Loader;
