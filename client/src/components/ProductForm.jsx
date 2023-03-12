import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_MUTATION  } from '../graphql/mutations';
import {
  FormControl,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const [addProduct, { loading, error }] = useMutation(ADD_PRODUCT_MUTATION );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    addProduct({ variables: { data: formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Add a Product
      </Typography>
      {error && <Typography color="error">{error.message}</Typography>}
      <FormControl margin="normal" fullWidth>
        <TextField
          id="name"
          name="name"
          label="Product Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="description"
          name="description"
          label="Product Description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="price"
          name="price"
          label="Product Price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="image"
          name="image"
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
            required
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </Button>
      </form>
);
};

export default ProductForm;      