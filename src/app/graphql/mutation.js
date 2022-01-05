import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        firstName
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Signup(
    $firstName: String!
    $lastName: String!
    $middleName: String
    $email: String!
    $userName: String
    $password: String!
  ) {
    signup(
      input: {
        firstName: $firstName
        lastName: $lastName
        middleName: $middleName
        email: $email
        userName: $userName
        password: $password
      }
    ) {
      token
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      id
      firstName
      lastName
      middleName
      userName
      address {
        email
        phone
        mobile
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($input: DeleteUserInput) {
    deleteUser(input: $input) {
      firstName
      lastName
    }
  }
`;
