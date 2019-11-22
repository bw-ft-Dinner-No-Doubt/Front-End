import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = ({ values, errors, touched }) => { 
  
 
    return (
       <div className="form-container">
          <Form className="form">
             {touched.username && errors.username && <p className="error">{errors.username}</p>}
             <Field type="text" name="username" placeholder="username" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="password" placeholder="Password" className="form-control rounded-0"/>
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="Email" />
             
             {touched.streetAddress && errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
             <Field type="text" name="streetAddress" placeholder="Street Address" />
             {touched.city && errors.city && <p className="error">{errors.city}</p>}
             <Field type="text" name="city" placeholder="City" />
             {touched.state && errors.state && <p className="error">{errors.state}</p>}
             <Field type="text" name="state" placeholder="State" />
             {touched.zipcode && errors.zipcode && <p className="error">{errors.zipcode}</p>}
             <Field type="text" name="zipcode" placeholder="Zip Code" />

             <Field className="options" name="foodPref" as="select">
             <option value="spicy">Spicy</option>
             <option value="vegan">Vegan</option>
             <option value="vegetarian">Vegetarian</option>
             <option value="wheelchair">Wheelchair Accessible</option>
             <option value="outdoor">Outdoor Dining</option>
             <option value="femaleOwned">Female Owned</option>
            </Field> 

            <Field className="option" name="platformPref" as="select">
             <option value="doorDash">Door Dash</option>
             <option value="uberEats">Uber Eats</option>
             <option value="grubHub">Grub Hub</option>
            </Field>
            <button type="submit">SUBMIT</button>
          </Form>

          
       </div>
    );
 };
 
 const FormikSignUp = withFormik({
    mapPropsToValues({ username, password, email, streetAddress, city, state, zipcode, foodPref, platformPref }) {
       return {
          foodPref: foodPref,
          platformPref: platformPref,
          username: username || "", 
          password: password || "",
          email: email || "",
          streetAddress: streetAddress || "",
          city: city || "",
          state: state || "",
          zipcode: zipcode || "",
       }
    },
 
    validationSchema: Yup.object().shape({
       username: Yup.string().required("USERNAME REQUIRED!"),
       password: Yup.string().required("PASSWORD REQUIRED!"),
       email: Yup.string().required("EMAIL REQUIRED!"),
       streetAddress: Yup.string().required("ADDRESS REQUIRED!"),
       city: Yup.string().required("CITY REQUIRED!"),
       state: Yup.string().required("STATE REQUIRED!"),
       zipcode: Yup.number().required("ZIP CODE REQUIRED!")
    }),
 
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
       axios.post('https://dinner-no-doubt.herokuapp.com/api/auth/register', values)
          .then(response => {
             console.log(response);
             resetForm();
          })
          .catch(error => {
             console.log(error.response);
          })
    }
 
 })(SignUp);
 
 export default FormikSignUp;