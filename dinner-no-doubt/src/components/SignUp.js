import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const OnboardingForm = ({ values, errors, touched, status, setFieldValue }) => {
    const [user, setUser] = useState([]);
 
  
 
    return (
       <div className="form-container">
          <Form className="form">
             {touched.userName && errors.userName && <p className="error">{errors.userName}</p>}
             <Field type="text" name="userName" placeholder="User Name" />
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="Email" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="password" placeholder="Password" className="form-control rounded-0"/>
             {touched.address && errors.address && <p className="error">{errors.address}</p>}
             <Field type="text" name="address" placeholder="Address" />
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
 
 const FormikOnboardingForm = withFormik({
    mapPropsToValues({ userName, email, password, address, city, state, zipcode }) {
       return {
          userName: userName || "",
          email: email || "", 
          password: password || "",
          address: address || "",
          city: city || "",
          state: state || "",
          zipcode: zipcode || "",
       }
    },
 
    validationSchema: Yup.object().shape({
       userName: Yup.string().required("USERNAME REQUIRED!"),
       email: Yup.string()
          .required("EMAIL REQUIRED!"),
       password: Yup.string().required("PASSWORD REQUIRED!"),
       address: Yup.string().required("ADDRESS REQUIRED!"),
       city: Yup.string().required("CITY REQUIRED!"),
       state: Yup.string().required("STATE REQUIRED!"),
       zipcode: Yup.number().required("ZIP CODE REQUIRED!")
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