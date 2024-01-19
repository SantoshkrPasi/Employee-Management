import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import './style.css';

const Profile = () => {

  const [Users, setUsers] = useState(null);

  // let {search} = useLocation();
  // const queryParams = new URLSearchParams(search);
  const { userid } = useParams();
  const auth = localStorage.getItem("userauthtoken");

  const handle = async () => {
    const res = await axios.post("https://employee-management-server-seven.vercel.app/profile", {
      email: auth,
    });
    console.log(res.data);
    setUsers(res.data);
  }
  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="profile">
    {Users !== null && (
      <div style={{ display: "flex", flexDirection: "column" ,alignItems : "center" , marginTop : "150px" }}>
        <p><strong>Name :</strong> {Users.name}</p>
        <p style={{marginLeft : "95px"}}> <strong>Email :</strong> {Users.email}</p>
        <p><strong>Password :</strong>  {Users.password}</p>
        <p style={{marginRight : "10px"}}><strong >Address :</strong> {Users.address}</p>
      </div>
    )}
  </div>
  )
}

export default Profile