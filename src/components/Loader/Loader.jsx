import { SpinnerIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/layout";
import React from "react";
import { Title } from "../Typography";

const Loader = ({ loading }) => {
  return loading ? (
    <Center>
      <SpinnerIcon mr={2} color="gray.500" />
      <Title secondary>Loading</Title>
    </Center>
  ) : null;
};

export default Loader;
