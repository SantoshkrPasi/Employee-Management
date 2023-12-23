import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Employee = () => {
  var cnt = 1;
  const [Users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/sign')
      .then(Users => setUsers(Users.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/employee/${id}`);
      setUsers(Users.filter((user) => user._id !== id));
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1>Employee</h1>
      </div>
      <div className='p-4 m-10'>
        <Link to='/dashboard/add_employee' className="btn btn-primary">Add_Employee</Link>

        <table className="table">
          <thead>
            <tr>
              <th className="mb-3">Serial</th>
              <th className="mb-3">Name</th>
              <th className="mb-3">Email</th>
              <th className="mb-3">Salary</th>
              <th className="mb-3">Address</th>
              <th className="mb-3">Category</th>
              <th className="mb-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Users.map(user => {
                return <tr key={user._id} >
                  <td className="mb-3">{cnt++}</td>
                  <td className="mb-3">{user.name}</td>
                  <td className="mb-3">{user.email}</td>
                  <td className="mb-3">{user.salary}</td>
                  <td className="mb-3">{user.address}</td>
                  <td className="mb-3">{user.category}</td>
                  <td className="mb-3">
                    <Link to={`/dashboard/edit_employee?user_id=${user._id}`} type="button" className="btn btn-warning m-2">Edit</Link>
                    <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee