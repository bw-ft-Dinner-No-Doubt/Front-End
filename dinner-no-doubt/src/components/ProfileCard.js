import React from 'react';

const MovieCard = props => {
    return (
        <div className = 'profile-card'>
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

// function User(props) {
//     const [user, setUserProfile] = useState ({userName: '', email: '', address: '', city: '',
//     state: '', zipcode: ''});
//     const handleChange = e => {
//         setUserProfile ({[e.target.name]: e.target.value});

export default MovieCard;