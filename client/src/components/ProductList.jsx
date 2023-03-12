import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_PRODUCTS } from '../graphql/queries';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_MY_PRODUCTS);

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
