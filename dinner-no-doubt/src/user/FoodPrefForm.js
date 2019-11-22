import React from 'react';
import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
import {AxiosWithAuth} from '../components/utilities/AxiosWithAuth';

const OnboardingForm = ({ values, errors, touched, status, setFieldValue }) => {
    // const [user, setUser] = useState([]);
 
  
 
    return (
       <div className="form-container">
          <Form className="form">

            <label className="foodPrefTitle">
            <label>
                Restaurant Preferences
             <Field className="options" type="checkbox" name="spicy" checked={values.foodPref}/>
             Spicy Foods
             </label>

             <label>
             <Field className="options" type="checkbox" name="vegan" checked={values.foodPref}/>
             Vegan
             </label>

             <label>
             <Field className="options" type="checkbox" name="vegetarian" checked={values.foodPref}/>
            Vegetarian
             </label>
             
             <label>
             <Field className="options" type="checkbox" name="wheelchair" checked={values.foodPref}/>
             Wheelchair Accessible
             </label>
             
             <label>
             <Field className="options" type="checkbox" name="outdoor" checked={values.foodPref}/>
             Outdoor Dining
             </label>
             
             <label>
             <Field className="options" type="checkbox" name="woman" checked={values.foodPref}/>
             Woman Owned
             </label>
             </label>

            {/* <Field className="option" name="platformPref" as="select">
             <option value="doorDash">Door Dash</option>
             <option value="uberEats">Uber Eats</option>
             <option value="grubHub">Grub Hub</option>
            </Field> */}
            
          { console.log(values)}
          
          <button type="submit">Submit Food Preferences</button>
          </Form>

        
          
       </div>
    );
 };


 const FormikOnboardingForm = withFormik({
     
    mapPropsToValues({ username,  password, email, streetAddress, city, state, zipcode,
        foodPref,spicy,vegan,vegetarian, wheelchair, outdoor, woman}) {
       return {
        //    foodPref: foodPref||0
          spicy: spicy || 0,
          vegan: vegan || 0,
          vegetarian: vegetarian || 0, 
          wheelchair: wheelchair || 0,
          outdoor: outdoor || 0,
          woman: woman || 0,
        
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
              .post(`foodPref/5,values`)
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