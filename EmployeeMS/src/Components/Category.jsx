import React from 'react'
import { Link } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  var cnt = 1;
 
  const [Users , setUsers] = useState([])
  useEffect(() => {
<<<<<<< HEAD
   axios.get('http://localhost:4000/fetchcategory')
=======
   axios.get('https://employee-management-server-seven.vercel.app/fetchcategory')
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
   .then(Users => setUsers(Users.data))
   .catch(err => console.log(err))
  },[]);

<<<<<<< HEAD
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/fetchcategory/${id}`);
      setUsers(Users.filter((user) => user._id !== id));
    }
    catch (error) {
      console.error(error);
    }
  };

=======
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
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
<<<<<<< HEAD
                  <td className="mb-3">
                  <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                  </tr>
=======
                </tr>
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d
              })
            }
          </tbody>
        </table>
    </div>    
  )
}

export default Category