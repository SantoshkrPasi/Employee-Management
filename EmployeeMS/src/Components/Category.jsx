import React from 'react'
import { Link } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  var cnt = 1;
 
  const [Users , setUsers] = useState([])
  useEffect(() => {
   axios.get('http://localhost:4000/fetchcategory')
   .then(Users => setUsers(Users.data))
   .catch(err => console.log(err))
  },[]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://employee-management-server-kappa.vercel.app/fetchcategory/${id}`);
      setUsers(Users.filter((user) => user._id !== id));
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
       <div className='d-flex justify-content-center'>
        <h1>Category</h1>
       </div>
       <div className='p-5 m-10'>
       <Link to = '/dashboard/add_category' className="btn btn-primary">Add_Categories</Link>
       </div>
       <table className="table">
          <thead>
            <tr>
              <th className="mb-3">Serial</th>
              <th className="mb-3">Category</th>
              <th className="mb-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Users.map(user => {
                return <tr key={user._id} >
                  <td className="mb-3">{cnt++}</td>
                  <td className="mb-3">{user.category}</td>
                  <td className="mb-3">
                  <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                  </tr>
              })
            }
          </tbody>
        </table>
    </div>    
  )
}

export default Category