import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './style.css';

const Profile = () => {

  const myComponentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column',
    backgroundColor : 'aliceblue'
  
  };

  const container = {
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
  };

  const [Users, setUsers] = useState(null);

  // let {search} = useLocation();
  // const queryParams = new URLSearchParams(search);
  const { userid } = useParams();
  const auth = localStorage.getItem("userauthtoken");

  const handle = async () => {
    const res = await axios.post("http://localhost:4000/profile", {
      email: auth,
    });
    setUsers(res.data);
  }
  useEffect(() => {
    handle();
  }, []);

  return (
    <div style={myComponentStyles}>
    {Users !== null && (
      <div style={container}>
        <p><strong>Name : </strong>{Users.name}</p>
        <p><strong>Email : </strong>{Users.email}</p>
        <p><strong>Password :</strong>  {Users.password}</p>
        <p><strong >Address : </strong>{Users.address}</p>
      </div>
    )}
  </div>
  )
}

export default Profile