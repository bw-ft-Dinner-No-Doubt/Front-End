import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import {AxiosWithAuth} from "./utilities/AxiosWithAuth";
import Dashboard from '../user/Dashboard';

const OnboardingForm = ({ values, errors, touched, status, setFieldValue }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) setUsers([...users, status]);
  }, [status]);

  console.log(values);

  return (
    <div className="form-container">
      <Form className="form">
        <h1>SIGN IN</h1>
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field type="text" name="username" placeholder="User Name" />
        
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="password" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="text" name="email" placeholder="email" />

        <button type="submit">submit</button>
      </Form>
    </div>
  );
};

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || "",
      password: password || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("USERNAME REQUIRED!"),
    email: Yup.string().required("EMAIL REQUIRED!"),
    password: Yup.string().required("PASSWORD REQUIRED!")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
   AxiosWithAuth()
      .post("api/auth/login", values)
      .then(res => {
         console.log(res)
         localStorage.setItem('token', res.data.token);
         // values.history.push('/protected');
        
 
      })
      .catch(error => {
        console.log(error);
      });
      
  }
})(OnboardingForm);

export default FormikOnboardingForm;
