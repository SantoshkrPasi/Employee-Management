import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import "./style.css";

function EmployeeDashboard() {
  const Navigate = useNavigate();

  const myComponentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column',
    backgroundColor : 'aliceblue'
  };

  const container = {
    display: 'flex',
    flexDirection : 'row-reverse',
    padding: '20px',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
  };
  const image = {
    height : '400px',
    width : "400px",
  }

  const contents ={
    margin : "10px",
    padding : "10px",
  }


  const [Users, setUsers] = useState(null);

  const auth = localStorage.getItem("userauthtoken");
  const handle = async () => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/employeedashboard`, {
      email: auth,
    });
    setUsers(res.data);
  };


  useEffect(() => {
    handle();
  }, []);

  const handleLogout = () => {
    Navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Employee</Link>
          <ul className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item w-100" onClick={handleLogout}>
              <Link to="#" className="nav-link px-0 align-middle text-white">
                <i className="fs-4 bi-power ms-2"></i>
                <span className="ms-2 d-none d-sm-inline">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={myComponentStyles}>
        {Users !== null && (
          <div style={container}>
            <div style={contents}>
            <p><strong>Name :</strong> {Users.name}</p>
            <p>{" "}<strong>Email :</strong> {Users.email}</p>
            <p><strong>Password :</strong> {Users.password}</p>
            <p><strong>Salary :</strong> {Users.salary}</p>
            <p><strong>Address :</strong> {Users.address}</p>
            <p><strong>Category :</strong> {Users.category}</p>
            </div>
            <div>
            <img src={Users.image} alt="image" style={image}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeDashboard;