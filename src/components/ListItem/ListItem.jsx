import React, { Fragment } from "react";
import { Text, Title } from "../Typography";
import { Box, Flex } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/layout";

import style from "./ListItem.module.css";

const ListItem = ({ name, description, ...rest }) => {
  return (
    <Fragment>
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
      <Divider />
    </Fragment>
  );
};

export default ListItem;
