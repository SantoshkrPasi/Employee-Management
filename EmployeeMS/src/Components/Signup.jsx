import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './style.css';

function Signup() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      console.log("request called");

      const res = await axios.post("http://localhost:4000/signup", {
        name,
        email,
        password,
        salary,
        address,
        category,
      });

      if (res.data == "exist") {
        history("/dashboard");
      } else if (res.data == "notexist") {
        history("/dashboard");
        // alert("User already exists")
      }
      // else
      //     alert("wrong details")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center signuppage">
      <div className="p-3 rounded w-25 border">
        <h1>Admin Signup</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="text">Name</label>
            <input type="text" name="name" autoComplete="off" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="form-control rounded-0" />

            <label htmlFor="text">Email</label>
            <input
              type="email"
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

            <label htmlFor="text">Salary</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Salary...."
              onChange={(e) => setSalary(e.target.value)}
              className="form-control rounded-0"
            />

            <label htmlFor="text">Address</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Address...."
              onChange={(e) => setAddress(e.target.value)}
              className="form-control rounded-0"
            />

            <div>
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
              type="text"
              name="category"
              autoComplete="off"
              placeholder="Category...."
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />
              {/* <select name="category" id="category" className="form-select"  onChange={(e) => setCategory(e.target.value)}>
                <option value="name">IT</option>
                <option value="name">Design</option>
                <option value="name">Computer Science</option>
              </select> */}
            </div>

            <label htmlFor="text">Select Image</label>
            <input type="file" className="form-control rounded-0"></input>
          </div>
          <input
            type="submit"
            onClick={submit}
            className="btn btn-success w-75 rounded-0 mb-2 mx-4"
          />
        </form>
      {/* <br /> */}
      <p className="d-flex justify-content-center">OR</p>
      {/* <br /> */}

      <Link to="/login" className="d-flex justify-content-center">Login</Link>
      </div>

    </div>
  );
}

export default Signup;
