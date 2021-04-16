import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Title } from "../../Typography";

import style from "./Feature.module.css";

const Feature = ({ title, value }) => {
  return (
    <Flex justifyContent="space-between">
      <Title secondary className={style.feature_title}>
        {title}
      </Title>
      <Title secondary className={style.feature_value}>
        {value}
      </Title>
    </Flex>
  );
};

export default Feature;
