import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import { FormControl, TextField, Button, Typography } from '@material-ui/core';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate ();

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      handleLogin(data.loginUser.token);
      history('/my-products');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error.message}</Typography>}
      <FormControl margin="normal" fullWidth>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
