import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_QUERY } from '../graphql/queries';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

/* The useQuery hook is used to fetch data from the GraphQL API using the GET_PRODUCTS_QUERY query defined in a separate file called queries.js. 
The loading and error states are handled using conditional rendering of Typography components. 
If the data is successfully fetched, the component checks if the length of the myProducts array is greater than 0 and displays a list of products using the List component. 
Each product is displayed as a ListItem with its name as the primary text and edit/delete actions as IconButtons on the right side using the ListItemSecondaryAction component.*/
const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error.message}</Typography>;
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        My Products
      </Typography>
      {data && data.myProducts.length > 0 ? (
        <List>
          {data.myProducts.map((product) => (
            <ListItem key={product.id}>
              <ListItemText primary={product.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>You have not added any products yet.</Typography>
      )}
    </div>
  );
};

export default ProductList;
