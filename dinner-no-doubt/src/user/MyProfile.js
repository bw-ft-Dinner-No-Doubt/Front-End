import React, { useState, useEffect} from "react";
import { AxiosWithAuth } from "../components/utilities/AxiosWithAuth";
import ProfileCard from "./ProfileCard";
import EditProfile from './EditProfile';

export default function MyProfile(props) {
  // console.log('MyProfile.js -> %cprops:', 'color: brown', props)
  const [profile, setProfile] = useState([]);
  // let [id, setId] = useState();

  // const didUpdate = () => {
  //Changed axios call Sladan built to AxiosWithAuth

  useEffect(() => {
    // console.log("Profile id:", id)
    AxiosWithAuth()
      .get(`api/diner/5`)
      .then(response => {
        setProfile(response.data);
        console.log(response);
      })
      .catch(error =>
        console.error("Problem with myProfile profile fetch:", error)
      );
  }, []);
  console.log("Profile :", profile);

  // useEffect(() => {
  // AxiosWithAuth()
  //   .get(`foodPref/${id}`)
  //   .then(response => {
  //     setProfile(...profile,response.data);
  //     console.log(response);
  //   })
  //   .catch(error => console.log(error));
  // },[])
  // // useEffect(didUpdate, []);
  // useEffect(() => {
  //  id = (!!props.user || setId(5))
  // },[])
  // } else {
  //   setId(props.user.id);
  // }

  return (
    <div className="profile">
      <ProfileCard profile={profile} />
     
      {/* <ProfileCard profile={profile}/>;*/}
    </div>
  );
}
