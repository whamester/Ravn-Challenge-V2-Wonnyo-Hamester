import { Flex } from "@chakra-ui/layout";
import style from "./Feature.module.css";
import React from "react";
import { Title } from "../../Typography";

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
