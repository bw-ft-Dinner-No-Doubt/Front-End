import React, { useState, useEffect, useReducer } from "react";
import { AxiosWithAuth } from "../components/utilities/AxiosWithAuth";
import ProfileCard from "./ProfileCard";

export default function MyProfile(props) {
  const [profile, setProfile] = useState([]);
  const [id, setId] = useState(5);

  // const didUpdate = () => {
  //Changed axios call Sladan built to AxiosWithAuth

//   AxiosWithAuth()
//     .get("api/diner/${id}")
//     .then(response => {
//       setProfile(response.data);
//       console.log(response);
//     })
//     .catch(error => console.log(error));

  let fetchUser = e => {
    e.preventDefault();
    if (props.user.id == null) {
      setId(5);
    } else {
      setId(props.user.id);
    }
  };

  AxiosWithAuth()
    .get("url")
    .then(response => {
      setProfile(response.data);
      console.log(response);
    })
    .catch(error => console.log(error));

  // useEffect(didUpdate, []);

  return (
    <div className="profile">
      {profile.map(myProfile => {
        return <ProfileCard profile={myProfile} />;
      })}
    </div>
  );
}
