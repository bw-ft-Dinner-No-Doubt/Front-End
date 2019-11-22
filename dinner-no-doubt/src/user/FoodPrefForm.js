import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import {AxiosWithAuth} from '../components/utilities/AxiosWithAuth';

const OnboardingForm = ({ values, errors, touched, status, setFieldValue }) => {
    const [user, setUser] = useState([]);
 
  
 
    return (
       <div className="form-container">
          <Form className="form">
             {/* {touched.userName && errors.username && <p className="error">{errors.username}</p>}
             <Field type="text" name="userName" placeholder="User Name" />
             {touched.password && errors.password && <p className="error">{errors.password}</p>}
             <Field type="password" name="password" placeholder="Password" className="form-control rounded-0"/>
             {touched.email && errors.email && <p className="error">{errors.email}</p>}
             <Field type="email" name="email" placeholder="Email" />
             
             {touched.streetAddress && errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
             <Field type="text" name="streetAddress" placeholder="Address" />
             {touched.city && errors.city && <p className="error">{errors.city}</p>}
             <Field type="text" name="city" placeholder="City" />
             {touched.state && errors.state && <p className="error">{errors.state}</p>}
             <Field type="text" name="state" placeholder="State" />
             {touched.zipcode && errors.zipcode && <p className="error">{errors.zipcode}</p>}
             <Field type="integer" name="zipcode" placeholder="Zip Code" /> */}

             <Field className="options" type="checkbox" name="spicy" checked={values.foodPref}/>
             
             <Field className="options" type="checkbox" name="vegan" checked={values.foodPref}/>
             <Field className="options" type="checkbox" name="vegetarian" checked={values.foodPref}/>
             <Field className="options" type="checkbox" name="wheelchair" checked={values.foodPref}/>
             <Field className="options" type="checkbox" name="outdoor" checked={values.foodPref}/>
             <Field className="options" type="checkbox" name="woman" checked={values.foodPref}/>
            
{/* 
            <Field className="option" name="platformPref" as="select">
             <option value="doorDash">Door Dash</option>
             <option value="uberEats">Uber Eats</option>
             <option value="grubHub">Grub Hub</option>
            </Field>
            <button type="submit">SUBMIT</button> */}
          </Form>

          
       </div>
    );
 };
 function ID(props) {
    let [id, setId] = useState('')
     id = (!!props.user || setId(5))
 }

 const FormikOnboardingForm = withFormik({
     
    mapPropsToValues({ username,  password, email, streetAddress, city, state, zipcode,foodPref }) {
       return {
           foodPref: foodPref||0
        //   spicy: spicy || 0,
        //   vegan: vegan || 0,
        //   vegetarian: vegetarian || 0, 
        //   wheelchair: wheelchair || 0,
        //   outdoor: outdoor || 0,
        //   woman: woman || 0,
        
       }
    },
 
    // validationSchema: Yup.object().shape({
    //    userName: Yup.string().required("USERNAME REQUIRED!"),
    //    email: Yup.string()
    //       .required("EMAIL REQUIRED!"),
    //    password: Yup.string().required("PASSWORD REQUIRED!"),
    //   //  address: Yup.string().required("ADDRESS REQUIRED!"),
    //   //  city: Yup.string().required("CITY REQUIRED!"),
    //   //  state: Yup.string().required("STATE REQUIRED!"),
    //    zipcode: Yup.number().required("ZIP CODE REQUIRED!")
    // }),
 
    handleSubmit(values, { setStatus, resetForm }) {
        
      
            AxiosWithAuth()
              .post(`foodPref/${ID()},values`)
              .then(response => {
                console.log(response);
              })
              .catch(error => console.error("FoodPrefForm:",error));
           
            // useEffect(didUpdate, []);
           
     
        
    //    AxiosWithAuth()
    //      .post('api/diner', values)
    //      .then(res => {
    //         console.log(res)
    //         localStorage.setItem('token', res.data.token);
    //       })
    //       .catch(error => {
    //          console.log(error);
    //       })
    }
 
 })(OnboardingForm);
 
 export default FormikOnboardingForm;