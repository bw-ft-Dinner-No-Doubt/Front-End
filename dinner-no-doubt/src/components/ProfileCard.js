import React from 'react';
import { Card } from 'semantic-ui-react';

export default function ProfileCard (props) {
    return (
        <div className = 'profile-card'>
            <h1>My Profile</h1>
            <h4>{props.profile.userName}</h4>
            <h4>{props.profile.email}</h4>
            <h4>{props.profile.address}</h4>
            <h4>{props.profile.city}</h4>
            <h4>{props.profile.state}</h4>
            <h4>{props.profile.zipcode}</h4>
            <h4>{props.profile.foodPref}</h4>
            <h4>{props.profile.platformPref}</h4>
            <button className='edit-btn' onClick={() => props.setUserProfile()}>Edit</button>
        </div>
    )
};