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
          <h1>SIGN IN</h1>
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="email" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="password" placeholder="password" />
             
          
             <button type="submit">submit</button>
          </Form>
          {/* <div className="user-container">
             {users.map(user => {
                return (
                   <div key={user.id} className="user">
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                   </div> */}
                {/* )
             })} */}
          </div>
    //    </div>
    );
 };
 
 const FormikOnboardingForm = withFormik({
    mapPropsToValues({ email, password }) {
       return {
          email: email || "", 
          password: password || "",
       }
    },
 
    validationSchema: Yup.object().shape({
       email: Yup.string()
          .required("EMAIL REQUIRED!")
          .notOneOf(['waffle@syrup.com'], "EMAIL TAKEN!"),
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