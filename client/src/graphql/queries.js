import { gql } from "@apollo/client";

// fetches all products from the API and returns their id, name, description, price, and image values.
export const GET_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      description
      price
      image
    }
  }
`;
