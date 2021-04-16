import { Box, Flex } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import style from "./ListItem.module.css";
import React from "react";
import { Text, Title } from "../Typography";

const ListItem = ({ name, description, ...rest }) => {
  return (
    <Flex
      {...rest}
      justifyContent="space-between"
      align="center"
      className={style.list_item}
    >
      <Box>
        <Title>{name}</Title>
        <Text secondary>{description}</Text>
      </Box>
      <ChevronRightIcon className={style.list_item_arrow} />
    </Flex>
  );
};

export default ListItem;
