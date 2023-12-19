import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useEffect , useState} from 'react'
const Employee = () => {
  var cnt = 1;
   const [Users , setUsers] = useState([])
   useEffect(() => {
    axios.get('http://localhost:4000/sign')
    .then(Users => setUsers(Users.data))
    .catch(err => console.log(err))
   },[])
  return (
    <div>
       <div className='d-flex justify-content-center'>
        <h1>Employee</h1>
       </div>
       <div className='p-4 m-10'>
       <Link to = '/dashboard/add_employee' className="btn btn-primary">Add_Employee</Link>
      
       {/* <div className="App"> */}
            <table>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {
              
              Users.map(user => {
                return <tr key={user._id} >
                  <td>{cnt++}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.salary}</td>
                  <td>{user.address}</td>
                  <td>{user.category}</td>
                </tr>
              })
            }
          </tbody>

        </table>
       {/* </div> */}

    </div>    
    </div>    
  )
}

export default Employee