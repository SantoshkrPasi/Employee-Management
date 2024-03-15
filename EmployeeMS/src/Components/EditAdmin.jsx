import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import './style.css';

function EditEmployee() {
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    let {search} = useLocation();
    const queryParams = new URLSearchParams(search);
    const user_id = queryParams.get('user_id');


    const submit = async (e) => {
        e.preventDefault();
<<<<<<< HEAD

        try {
          // Send a PUT request to update the employee data
          await axios.put(`http://localhost:4000/adsign/${user_id}`, {
=======
    
        try {
          // Send a PUT request to update the employee data
          await axios.put(`https://employee-management-server-seven.vercel.app/adsign/${user_id}`, {
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
            name,
            email,
            password,
            address,
            // Include other fields as needed
          });
<<<<<<< HEAD

=======
    
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
          // Redirect to the employee details page or any other page after the update
          history('/dashboard/home');
        } catch (error) {
          console.error("Error updating user:", error);
        }
      };
<<<<<<< HEAD

=======
  
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
    return (
      <div className="d-flex justify-content-center align-items-center addEmployee">
        <div className="p-5 rounded w-40 border d-flex justify-content-center align-items-center">
          <form>
          <h1>Edit</h1>
            <div className="mb-6">
              <label htmlFor="text">Name</label>
              <input type="text" name="name" autoComplete="off" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="form-control rounded-0" />
<<<<<<< HEAD

=======
  
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
              <label htmlFor="text">Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
                className="form-control rounded-0" />
<<<<<<< HEAD

=======
  
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
              <label htmlFor="text">Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
                className="form-control rounded-0" 
              />
<<<<<<< HEAD

=======
  
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
              <label htmlFor="text">Address</label>
              <input
                type="text"
                name="address"
                autoComplete="off"
                placeholder="Address...."
                onChange={(e) => setAddress(e.target.value)}
                className="form-control rounded-0"
              />                
            </div>
            <input
              type="submit"
              onClick={submit}
              className="btn btn-success w-75 rounded-0 mb-1 mx-4 mt-5"
            />
          </form>
        </div>
<<<<<<< HEAD

=======
  
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
      </div>
    );
}

export default EditEmployee