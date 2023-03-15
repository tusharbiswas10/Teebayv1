import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {  SIGNUP_MUTATION } from '../graphql/mutations';
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

// function to create a Material-UI styles object for the component.
const useStyles = makeStyles((theme) => ({
  form: {
    margin: 'auto',
    maxWidth: 400,
    marginTop: theme.spacing(4),
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    height: 48,
  },
  loadingSpinner: {
    color: theme.palette.primary.main,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}));

//calls the signupUser function from useMutation to send a GraphQL mutation to the server. 
// The function passes the form values as variables in the mutation.
const SignupForm = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const history = useNavigate();

  const [signupUser, { loading, error }] = useMutation( SIGNUP_MUTATION, {
    onCompleted: () => {
      history('/');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    signupUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Signup
      </Typography>
      {error && <Typography color="error">{error.message}</Typography>}
      <Grid container spacing={2}>
        
        <FormControl margin="normal" fullWidth>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </FormControl>
        
        
      <FormControl margin="normal" fullWidth>
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </FormControl>
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
      <FormControl margin="normal" fullWidth>
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="address"
          name="address"
          label="Address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
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
        Signup
      </Button>
      </Grid>
    </form>
  );
};

export default SignupForm;
