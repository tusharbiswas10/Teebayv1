import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import {
  FormControl,
  TextField,
  Button,
  Typography,
  CircularProgress,
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

// takes a handleLogin prop for handling successful logins.
const LoginForm = ({ handleLogin }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      handleLogin(data.loginUser.token);
      history('/my-products');
    },
  });

// sends a login mutation to the server using the useMutation hook from Apollo Client.
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error.message}</Typography>}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
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
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
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
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            fullWidth
          >
            {loading ? (
              <CircularProgress
                className={classes.loadingSpinner}
                size={24}
              />
            ) : (
              'Login'
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
