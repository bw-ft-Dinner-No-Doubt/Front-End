import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

<<<<<<< HEAD
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
=======
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
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
    );
 };
 
 const FormikOnboardingForm = withFormik({
<<<<<<< HEAD
    mapPropsToValues({ userName, email, password, address, city, state, zipcode }) {
       return {
          userName: userName || "",
=======
    mapPropsToValues({ username, email, password, address, city, state, zipcode }) {
       return {
          username: username || "",
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
          email: email || "", 
          password: password || "",
          address: address || "",
          city: city || "",
          state: state || "",
<<<<<<< HEAD
          zipcode: zipcode || "",
=======
          zipcode: zipcode || ""
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
       }
    },
 
    validationSchema: Yup.object().shape({
<<<<<<< HEAD
       userName: Yup.string().required("USERNAME REQUIRED!"),
=======
       username: Yup.string().required("USERNAME REQUIRED!"),
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
       email: Yup.string()
          .required("EMAIL REQUIRED!"),
       password: Yup.string().required("PASSWORD REQUIRED!"),
       address: Yup.string().required("ADDRESS REQUIRED!"),
       city: Yup.string().required("CITY REQUIRED!"),
       state: Yup.string().required("STATE REQUIRED!"),
<<<<<<< HEAD
       zipcode: Yup.number().required("ZIP CODE REQUIRED!")
=======
       zipcode: Yup.string().required("ZIP REQUIRED!"),
    
    
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
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
 
<<<<<<< HEAD
 })(OnboardingForm);
=======
 })(OnboardingFormTwo);
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
 
 export default FormikOnboardingForm;