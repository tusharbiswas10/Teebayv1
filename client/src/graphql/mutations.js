import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation SignupUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export const ADD_PRODUCT_MUTATION = gql`
  mutation AddProduct($data: ProductCreateInput!) {
    createProduct(data: $data) {
      id
      name
      description
      price
      image
      seller {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProduct($id: ID!, $data: ProductUpdateInput!) {
    updateProduct(id: $id, data: $data) {
      id
      name
      description
      price
      image
      seller {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
