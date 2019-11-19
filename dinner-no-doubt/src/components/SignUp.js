import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnboardingFormTwo = ({ values, errors, touched, status, setFieldValue }) => {
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
       if (status) setUsers([...users, status]);
    }, [status])
 
    console.log(values);
 
    return (
       <div className="form-container">
           
          <Form className="form">
          <h1>SIGN UP</h1>
          {touched.username && errors.username && <p className="error">{errors.username}</p>}
             <Field type="username" name="username" placeholder="username" />
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="email" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="create password" placeholder="create password" />
             {touched.address && errors.address && <p className="error">{errors.address}</p>}
             <Field type="address" name="address" placeholder="street address" />
             {touched.city && errors.city && <p className="error">{errors.city}</p>}
             <Field type="city" name="city" placeholder="city" />
             {touched.state && errors.state && <p className="error">{errors.state}</p>}
             <Field type="state" name="state" placeholder="state" />
             {touched.zipcode && errors.zipcode && <p className="error">{errors.zipcode}</p>}
             <Field type="zip code" name="zip code" placeholder="zip code" />
             
          
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
    mapPropsToValues({ username, email, password, address, city, state, zipcode }) {
       return {
          username: username || "",
          email: email || "", 
          password: password || "",
          address: address || "",
          city: city || "",
          state: state || "",
          zipcode: zipcode || ""
       }
    },
 
    validationSchema: Yup.object().shape({
       username: Yup.string().required("USERNAME REQUIRED!"),
       email: Yup.string()
          .required("EMAIL REQUIRED!"),
       password: Yup.string().required("PASSWORD REQUIRED!"),
       address: Yup.string().required("ADDRESS REQUIRED!"),
       city: Yup.string().required("CITY REQUIRED!"),
       state: Yup.string().required("STATE REQUIRED!"),
       zipcode: Yup.string().required("ZIP REQUIRED!"),
    
    
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
 
 })(OnboardingFormTwo);
 
 export default FormikOnboardingForm;