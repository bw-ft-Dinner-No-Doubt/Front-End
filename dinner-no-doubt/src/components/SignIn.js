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
<<<<<<< HEAD
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
=======
           
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
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
    );
 };
 
 const FormikOnboardingForm = withFormik({
<<<<<<< HEAD
    mapPropsToValues({ userName, email, password }) {
       return {
          userName: userName || "",
          email: email || "", 
          password: password || ""
=======
    mapPropsToValues({ email, password }) {
       return {
          email: email || "", 
          password: password || "",
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
       }
    },
 
    validationSchema: Yup.object().shape({
<<<<<<< HEAD
       userName: Yup.string().required("USERNAME REQUIRED!"),
       email: Yup.string().required("EMAIL REQUIRED!"),
=======
       email: Yup.string()
          .required("EMAIL REQUIRED!")
          .notOneOf(['waffle@syrup.com'], "EMAIL TAKEN!"),
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
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