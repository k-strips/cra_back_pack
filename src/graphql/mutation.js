import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) {
      token
      user {
        id
        firstName
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Signup($input: SignupInput) {
    signup(input: $input) {
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
