import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation(
    $updateUserId: ID!
    $username: String
    $email: String
    $password: String
  ) {
    updateUser(
      id: $updateUserId
      username: $username
      email: $email
      password: $password
    ) {
      id
      username
      email
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`;