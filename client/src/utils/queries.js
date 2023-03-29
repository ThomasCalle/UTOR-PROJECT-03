import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Users {
    users {
      id
      username
      email
      events {
        id
        title
        cost
        description
        location
      }
    }
  }
`;

//64244c32bd45ee13c232578e
export const GET_ONE_USER = gql`
query User($userId: ID!) {
  user(id: $userId) {
    id
    username
    email
    events {
      id
      title
      description
      cost
      location
    }
  }
}
`;

export const GET_ALL_EVENTS = gql`
query Events {
  events {
    id
    title
    description
    cost
    location
  }
}
`;

export const GET_ONE_EVENT = gql`
query Event($eventId: ID!) {
  event(id: $eventId) {
    id
    title
    description
    location
    cost
  }
}
`;
