import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    username
    email
  }
}
`;