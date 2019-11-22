import React from 'react';
import FoodPrefForm from './FoodPrefForm';
import {Link }from 'react-router-dom';

const ProfileCard = props => {
console.log('ProfileCard.js -> %cprops:', 'color: deeppink', props)
    return (
        <div className = 'profile-card'>
            <h3>Your Profile</h3>
            <ul>
            <li>User Name: {props.profile.username}</li>
            <li>email: {props.profile.email}</li>
            <li>Street Address: {props.profile.streetAddress}`</li>
            <li>City: {props.profile.city}</li>
            <li>State: {props.profile.state}</li>
            <li>Zip: {props.profile.zipcode}</li>
            </ul>
            {/* <h4>{props.profile.foodPref}</h4> */}
            {/* <h4>{props.profile.platformPref}</h4> */}
            {/* <button className='edit-btn' onClick={() => props.setUserProfile()}>Edit</button> */}
          <Link to="/protected/profile">  
          <button className='edit-btn'>Edit Profile</button>
          </Link>
        <FoodPrefForm/>

        </div>
    )
};

// function User(props) {
//     const [user, setUserProfile] = useState ({userName: '', email: '', address: '', city: '',
//     state: '', zipcode: ''});
//     const handleChange = e => {
//         setUserProfile ({[e.target.name]: e.target.value});

export default ProfileCard;