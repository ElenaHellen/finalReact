import React from "react";
import { Link } from 'react-router-dom';
// import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, Button } from "@material-ui/core";

// const loginSchema = Yup.object().shape({
//   email: Yup.string()
//     .trim()
//     .required("Required")
//     .max(120, "Maximum length is 120 characters")
//     .email("Invalid email"),
//   password: Yup.string(),
// });

const Login = ({ initialFormValues, onLogin }) => {
  // console.log(onLogin, "COMPONENT METHOD");
  return (
    <Formik initialValues={initialFormValues} onSubmit={onLogin}>
      <Form autoComplete="off">
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Field color="secondary" name="email" label="Email" type="email" placeholder = "Email" />
          </Grid>
          <Grid item>
            <Field color="secondary" name="password" label="Password" type="password" placeholder = "Password" />
          </Grid>
          <Grid item>
            <Button  variant="contained" color="primary" type="submit">
              Sign In
            </Button>
            </Grid>
            <Link to="./register">Register</Link>
          
        </Grid>
      </Form>
    </Formik>
  );
};

export default Login;
