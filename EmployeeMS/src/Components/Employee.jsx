import React from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <div>
       <div className='d-flex justify-content-center'>
        <h1>Employee</h1>
       </div>
       <div className='p-5 m-10'>
       <Link to = '/dashboard/add_employee' className="btn btn-primary">Add_Employee</Link>
       </div>
    </div>    
  )
}

export default Employee