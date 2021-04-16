import React, { Fragment } from "react";
import Fail from "../HandleFail";
import ListItem from "../ListItem";
import Loader from "../Loader";

import { Box, Flex } from "@chakra-ui/layout";
import { Waypoint } from "react-waypoint";

import { useQuery } from "@apollo/client";
import { ALL_PEOPLE } from "../../gql/Queries";

import styles from "./Sidebar.module.css";
import { useHistory } from "react-router";

const distribution = { base: 0, md: 250, lg: 300 };

const Sidebar = (props) => {
  const { children, ...rest } = props;
  const { push } = useHistory();

  const { data, error, loading, fetchMore } = useQuery(ALL_PEOPLE, {
    variables: { first: 5 },
  });

  return (
    <Flex {...rest}>
      <Box className={styles.sidebar} w={distribution}>
        <Fail error={error}>
          {Array.isArray(data?.allPeople?.people) &&
            data?.allPeople?.people.map((person, index) => {
              return (
                <Fragment key={person.id}>
                  <ListItem
                    key={person.id}
                    name={person.name}
                    description={person.name}
                    onClick={() => {
                      push(`/detail/${person.id}`);
                    }}
                  />

                  {index + 1 === data?.allPeople?.people.length && (
                    <Waypoint
                      onEnter={() => {
                        const endCursor = data?.allPeople?.pageInfo?.endCursor;
                        if (endCursor && fetchMore) {
                          fetchMore({
                            variables: { first: 5, after: endCursor },
                            updateQuery: (prev, { fetchMoreResult }) => {
                              fetchMoreResult.allPeople.people = [
                                ...prev.allPeople.people,
                                ...fetchMoreResult.allPeople.people,
                              ];
                              return fetchMoreResult;
                            },
                          });
                        }
                      }}
                    />
                  )}
                </Fragment>
              );
            })}
          <Loader loading={loading} />
        </Fail>
      </Box>
      <Box className={styles.sidebar_content_wrapper}>
        <Box p={5} ml={distribution} className={styles.sidebar_content}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Sidebar;
