import React, { Fragment } from "react";
import Container from "../../Container";
import HandleFail from "../../HandleFail";
import Feature from "../Feature";
import Loader from "../../Loader";
import { Divider } from "@chakra-ui/layout";
import { Title } from "../../Typography";
import { capitalize } from "lodash";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { PERSON_BY_ID } from "../../../gql/Queries";

const Detail = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(PERSON_BY_ID, {
    variables: { personId: id },
  });

  return (
    <Container>
      <Loader loading={loading} />
      <HandleFail error={error}>
        <Title p={4}>General Information</Title>
        {
          <Fragment>
            <Feature
              title="Eye Color"
              value={capitalize(data?.person?.eyeColor)}
            />
            <Divider />
            <Feature
              title="Hair Color"
              value={capitalize(data?.person?.hairColor)}
            />
            <Divider />
            <Feature
              title="Skin Color"
              value={capitalize(data?.person?.skinColor)}
            />
            <Divider />
            <Feature title="Birth Year" value={data?.person?.birthYear} />
            <Divider />

            <Title p={4}>Vehicles</Title>

            <Fragment>
              {Array.isArray(data?.person?.ships?.starships) &&
                data?.person?.ships?.starships.map(({ name }, index) => (
                  <Fragment key={index}>
                    <Feature title={name} />
                    <Divider />
                  </Fragment>
                ))}
            </Fragment>
            <Divider />
          </Fragment>
        }
      </HandleFail>
    </Container>
  );
};

export default Detail;
