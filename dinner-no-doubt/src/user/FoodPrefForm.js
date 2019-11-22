import React from 'react';
import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
import {AxiosWithAuth} from '../components/utilities/AxiosWithAuth';
import { string } from 'prop-types';

const FoodPrefForm = ({ values, errors, touched, status, setFieldValue }) => {
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


 const FormikFoodPrefForm = withFormik({
     
    mapPropsToValues({foodPref,spicy,vegan,vegetarian, wheelchair, outdoor, woman}) {
       return {
        //    foodPref: foodPref||0
          spicy: spicy || false,
          vegan: vegan || false,
          vegetarian: vegetarian || false, 
          wheelchair: wheelchair || false,
          outdoor: outdoor || false,
          woman: woman || false,
        
       }
    },
 

 
    handleSubmit(values) {
       
        
      
            AxiosWithAuth()
              .post(`foodPref/5,values`)
              .then(response => {
                console.log(response);
              })
              .catch(error => console.error("FoodPrefForm:",error))
           

           
     
            }
 
 })(FoodPrefForm)

 
 export default FormikFoodPrefForm;