import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

export default function MyProfile() {
    const [profile, setProfile] = useState([])

    const didUpdate = () => {
        axios.get('')
        .then(response => {
            setProfile(response.data);
            console.log(response);
        })
            .catch(error => console.log(error))
    };
    useEffect(didUpdate, []);
    
    return <div className = 'profile'>
        {profile.map(profile => {
            return <ProfileCard profile={profile}/>;
        })}

    </div>
};