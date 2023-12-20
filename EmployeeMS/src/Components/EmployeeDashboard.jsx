import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import './style.css';

function EmployeeDashboard() {

  const [Users, setUsers] = useState(null);
 
  const auth = localStorage.getItem("userauthtoken");

  const handle = async () => {
    const res = await axios.post("http://localhost:4000/employeedashboard", {
      email: auth,
    });
    console.log(res.data);
    setUsers(res.data);
  }
  useEffect(() => {
    handle();
  }, []);

  return (
     <div>
    {Users !== null && (
      <div style={{ display: "flex", flexDirection: "column" ,alignItems : "center" , marginTop : "150px" }}>
        <p><strong>Name :</strong> {Users.name}</p>
        <p style={{marginLeft : "95px"}}> <strong>Email :</strong> {Users.email}</p>
        <p><strong>Password :</strong>  {Users.password}</p>
        <p><strong>Salary :</strong> {Users.salary}</p>
        <p style={{marginRight : "10px"}}><strong >Address :</strong> {Users.address}</p>
        <p><strong>Category :</strong> {Users.category}</p>
      </div>
    )}
  </div>
  )
}

export default EmployeeDashboard