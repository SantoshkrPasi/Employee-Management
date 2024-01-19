import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  var cnt = 1;
  const [Users, setUsers] = useState([]);
  const [Empers, setEmpers] = useState([])


  useEffect(() => {
    axios.get('http://localhost:4000/adsign').then(Users => setUsers(Users.data)).catch(err => console.log(err))
    axios.get('http://localhost:4000/sign').then(Empers => setEmpers(Empers.data)).catch(err => console.log(err))
  }, [])


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/adsign/${id}`);
      setUsers(Users.filter((user) => user._id !== id));
    }
    catch (error) {
      console.error(error);
    }
  };
  // Calculate total salary
  const totalSalary = Empers.reduce((total, emp) => total + emp.salary, 0);
  return (
    <div>
      <div className="d-flex justify-content-around mt-5">
        <div className="d-flex flex-column align-items-center border p-3 rounded w-25 mt-4">
          <h2>Admin</h2>
          <hr className="my-4 w-50" />
          <div className="mt-3">
            <h3>Total : {Users.length}</h3>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center border p-3 rounded w-25 mt-4">
          <h2>Employee</h2>
          <hr className="my-4 w-50" />
          <div className="mt-3">
            <h3>Total : {Empers.length}</h3>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center border p-3 rounded w-25 mt-4">
          <h2>Total Salary</h2>
          <hr className="my-4 w-50" />
          <div className="mt-3">
            <h3>Total : {totalSalary}</h3>
          </div>
        </div>
      </div>

      <div>
        <h3 className="m-5 my-5">List Of Admins</h3>

        <table className="table">
          <thead>
            <tr>
              <th className="mb-3">Serial</th>
              <th className="mb-3">Email</th>
              <th className="mb-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Users.map(user => {
                return <tr key={user._id} >
                  <td className="mb-3">{cnt++}</td>
                  <td className="mb-3">{user.email}</td>
                  <td className="mb-3">
                    <Link to={`/dashboard/edit_admin?user_id=${user._id}`} type="button" className="btn btn-warning m-2">Edit</Link>
                    <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
