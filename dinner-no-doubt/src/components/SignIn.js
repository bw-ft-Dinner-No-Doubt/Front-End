import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

const LogIn = ({ values, errors, touched }) => {
 
    return (
       
       <div className="form-container">
           
          <Form className="form">
             <h1>SIGN IN</h1>
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="email" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="password" placeholder="password" />
             <button type="submit">SUBMIT</button>

             
           
           

          </Form>
      </div>
    );
 };
 
 const FormikLogIn = withFormik({
    mapPropsToValues({email, password }) {
       return {
          email: email || "", 
          password: password || ""
       }
    },
 
    validationSchema: Yup.object().shape({
       email: Yup.string().required("EMAIL REQUIRED!"),
       password: Yup.string().required("PASSWORD REQUIRED!"),
    }),
 
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
       axios.post('https://dinner-no-doubt.herokuapp.com/api/auth/login', values)
          .then(response => {
             console.log(response);
             resetForm();
             setSubmitting(false);
          })
          .catch(error => {
             console.log(error);
          })
    }
 
 })(LogIn);
 
 export default FormikLogIn;