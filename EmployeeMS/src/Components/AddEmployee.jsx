import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

function AddEmployee() {

  const [Users , setUsers] = useState([])
  useEffect(() => {
   axios.get('http://localhost:4000/fetchcategory')
   .then(Users => setUsers(Users.data))
   .catch(err => console.log(err))
  },[])


  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
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

      const res = await axios.post("https://employee-management-server-kappa.vercel.app/signup", {
        name,
        email,
        password,
        salary,
        address,
        category,
        image,
      });

      if (res.data == "exist") {
        navigate("/dashboard/employee");
      } else if (res.data == "notexist") {
       navigate("/dashboard/employee");
        // alert("User already exists")
      }
      // else
      //     alert("wrong details")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center addEmployee">
      <div className="p-5 rounded w-40 border">
        <h1>AddEmployee</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="text">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="form-control rounded-0"
            />

            <label htmlFor="text">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              className="form-control rounded-0"
            />

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
              name="number"
              autoComplete="off"
              placeholder="Salary...."
              onChange={(e) => setSalary(e.target.value)}
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

            <div>
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {
                Users.map(user => {
                return <option key={user._id} value={user.category}>
                  {user.category}
                 </option>
                })
                }            
              </select>
            </div>

            <label htmlFor="text">Select Image</label>
             <input
              type="file"
              id="image"
              name="image"
              className="form-control rounded-0"
              onChange={convertToBase64}
              />          
          </div>
          <input
            type="submit"
            onClick={submit}
            className="btn btn-success w-75 rounded-0 mb-1 mx-4 mt-5"
          />
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;