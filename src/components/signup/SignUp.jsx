import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Field, Form } from "react-final-form";
import { Redirect } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import SignUpStyles from "./styles/SignUpStyles";

const SignUp = (props) => {
  const classes = SignUpStyles();

  const onSubmit = (values) => {
    props.signup(values);
  };

  if (props.isRegistered) return <Redirect to="/signin" />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
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

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field name="firstName">
                    {(props) => (
                      <TextField
                        autoComplete="fname"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="lastName">
                    {(props) => (
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        autoComplete="lname"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="email">
                    {(props) => (
                      <TextField
                        variant="outlined"
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
                </Grid>
                <Grid item xs={12}>
                  <Field name="password" type="email">
                    {(props) => (
                      <TextField
                        variant="outlined"
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
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={submitting || pristine}
              >
                Sign Up
              </Button>
            </form>
          )}
        />
      </div>
    </Container>
  );
};

export default SignUp;
