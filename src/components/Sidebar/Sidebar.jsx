import React, { Fragment, useState } from "react";
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
const loading_step = 5;

const Sidebar = (props) => {
  const { children, ...rest } = props;
  const { push } = useHistory();
  const [isLoadingMore, setLoadingMore] = useState(false);
  const { data, error, loading, fetchMore } = useQuery(ALL_PEOPLE, {
    variables: { first: loading_step },
  });

  const handleWaypoint = (allPeopleData, fetchMorePeople, step) => {
    const endCursor = allPeopleData?.allPeople?.pageInfo?.endCursor;
    if (endCursor && fetchMorePeople) {
      setLoadingMore(true);
      fetchMorePeople({
        variables: { first: step, after: endCursor },
        updateQuery: (prev, { fetchMoreResult }) => {
          setLoadingMore(false);
          if (!fetchMoreResult) {
            return prev;
          }
          fetchMoreResult.allPeople.people = [
            ...prev.allPeople.people,
            ...fetchMoreResult.allPeople.people,
          ];
          return fetchMoreResult;
        },
      });
    }
  };

  const goToDetail = (person) => {
    push(`/detail/${person.id}`);
  };

  const getPersonDescription = (person) => {
    return `${person?.species?.name || "Human"}  from ${
      person?.homeworld?.name || ""
    }`;
  };

  return (
    <Flex {...rest}>
      <Box className={styles.sidebar} w={distribution}>
        <Fail error={error}>
          {Array.isArray(data?.allPeople?.people) &&
            data?.allPeople?.people.map((person, index) => {
              return (
                <Fragment key={index}>
                  <ListItem
                    name={person.name}
                    description={getPersonDescription(person)}
                    onClick={() => goToDetail(person)}
                  />

                  {index + 1 === data?.allPeople?.people.length && (
                    <Waypoint
                      onEnter={() =>
                        handleWaypoint(data, fetchMore, loading_step)
                      }
                    />
                  )}
                </Fragment>
              );
            })}
          <Loader loading={loading || isLoadingMore} />
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
