import { gql } from "@apollo/client";

export const ALL_PEOPLE = gql`
  query ALL_PEOPLE($last: Int, $first: Int) {
    allPeople(last: $last, first: $first) {
      people {
        id
        name
      }
    }
  }
`;
