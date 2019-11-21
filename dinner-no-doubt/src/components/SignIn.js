import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnboardingForm = ({ values, errors, touched, status, setFieldValue }) => {
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
       if (status) setUsers([...users, status]);
    }, [status])
 
    console.log(values);
 
    return (
       <div className="form-container">
          <Form className="form">
             {touched.userName && errors.userName && <p className="error">{errors.userName}</p>}
             <Field type="text" name="userName" placeholder="User Name" />
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="Email" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="password" placeholder="Password" />


             
             <button type="submit">SUBMIT</button>
          </Form>
       </div>
    );
 };
 
 const FormikOnboardingForm = withFormik({
    mapPropsToValues({ userName, email, password }) {
       return {
          userName: userName || "",
          email: email || "", 
          password: password || ""
       }
    },
 
    validationSchema: Yup.object().shape({
       userName: Yup.string().required("USERNAME REQUIRED!"),
       email: Yup.string().required("EMAIL REQUIRED!"),
       password: Yup.string().required("PASSWORD REQUIRED!"),
    }),
 
    handleSubmit(values, { setStatus, resetForm }) {
       axios.post('https://reqres.in/api/users', values)
          .then(response => {
             console.log(response);
             setStatus(response.data);
             resetForm();
          })
          .catch(error => {
             console.log(error);
          })
    }
 
 })(OnboardingForm);
 
 export default FormikOnboardingForm;