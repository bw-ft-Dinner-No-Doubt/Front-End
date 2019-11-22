import React, { useState, useEffect, useReducer } from "react";
import { AxiosWithAuth } from "../components/utilities/AxiosWithAuth";
import ProfileCard from "./ProfileCard"

export default function MyProfile(props) {
// console.log('MyProfile.js -> %cprops:', 'color: brown', props)
  const [profile, setProfile] = useState([]);
 let [id, setId] = useState();

  // const didUpdate = () => {
  //Changed axios call Sladan built to AxiosWithAuth

  useEffect(() => {
    console.log("Profile id:", id)
  AxiosWithAuth()
      .get(`api/diner/${id}`)
      .then(response => {
        setProfile(response.data);
        console.log(response);
      })
      .catch(error => console.log(error))
    },[])
    console.log("Profile id:", id)
  
   
  useEffect(() => { 
  AxiosWithAuth()
    .get(`foodPref/${id}`)
    .then(response => {
      setProfile(...profile,response.data);
      console.log(response);
    })
    .catch(error => console.log(error));
  },[])
  // useEffect(didUpdate, []);
  useEffect(() => {
   id = (!!props.user || setId(5))
  },[])
    // } else {
    //   setId(props.user.id);
    // }
  
 

  return (
    <div className="profile">
      {/* {profile.map(myProfile => {
        return <ProfileCard profile={myProfile} />;
      })} */}
       <ProfileCard profile={profile}/>;
    </div>
  );

}  