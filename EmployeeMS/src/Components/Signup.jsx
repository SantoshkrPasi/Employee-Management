import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './style.css';

function Signup() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  function convertToBase64(e)
  {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error", error);
    };
  }

  async function submit(e) {
    e.preventDefault();

    try {
      console.log("request called");

      const res = await axios.post("https://employee-management-server-kappa.vercel.app/adminsignup", {
        name,
        email,
        password,
        address,
        image,
      });
      localStorage.setItem('userauthtoken' , email);
      history("/dashboard");

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center adminsignup">
      <div className="p-3 rounded w-25 border">
        <h1>Admin Signup</h1>
        <form>
          <div className="mb-3 d-flex flex-column gap-2">
            <label htmlFor="text">Name</label>
            <input type="text" name="name" autoComplete="off" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="form-control rounded-0" />

            <label htmlFor="text">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              className="form-control rounded-0" />

            <label htmlFor="text">Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
              className="form-control rounded-0" 
            />

            <label htmlFor="text">Address</label>
            <input
              type="text"
              name="address"
              autoComplete="off"
              placeholder="Address...."
              onChange={(e) => setAddress(e.target.value)}
              className="form-control rounded-0"
            />
             <label htmlFor="text">Select Image</label>
             <input
              type="file"
              id="image"
              name="image"
              className="form-control rounded-0"
              onChange={convertToBase64}
              />          
          <input
            type="submit"
            onClick={submit}
            className="btn btn-success mt-3"
            />
            </div>
        </form>
        <p className="d-flex mx-3">Alread have an account? <Link to="/adminlogin">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
