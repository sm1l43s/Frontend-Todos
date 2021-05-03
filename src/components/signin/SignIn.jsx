import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Form, Field } from "react-final-form";
import { Box } from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import SignInStyles from "./styles/SignInStyles";

export const SignIn = (props) => {
  const classes = SignInStyles();

  const onSubmit = async (values) => {
    props.signin(values);
  };

  if (props.isAuth) return <Redirect to="/dashboard/profile" />;

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        {props.isFetching && (
          <Box m={1} className={classes.root}>
            <Preloader />
          </Box>
        )}

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              {props.isError && (
                <Box m={1} className={classes.root}>
                  <Alert severity="error">{props.errorMessages}</Alert>
                </Box>
              )}

              <Field name="email">
                {(props) => (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    autoComplete="email"
                  />
                )}
              </Field>
              <Field name="password">
                {(props) => (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                )}
              </Field>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={submitting || pristine}
              >
                Sign in
              </Button>

              <Box mt={2}>
                <NavLink to="/signup">
                  <Typography variant="subtitle1">
                    Don't have an account? Sign Up
                  </Typography>
                </NavLink>
              </Box>
            </form>
          )}
        />
      </div>
    </Container>
  );
};
