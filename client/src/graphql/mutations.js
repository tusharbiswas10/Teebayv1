import { gql } from '@apollo/client';

/* Each mutation has a unique GraphQL operation name and signature, with input variables and return types specified.
 These mutations can be used to interact with a GraphQL API using the Apollo client.*/

// creates a new user with the specified firstName, lastName, email, and password values.
export const SIGNUP_MUTATION = gql`
  mutation SignupUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
// logs in a user with the specified email and password values and returns a token for authentication.
export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;
// creates a new product with the specified name, description, price, image, and seller values.
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
// updates an existing product with the specified id and new name, description, price, image, and seller values.
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
// deletes an existing product with the specified id
export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
