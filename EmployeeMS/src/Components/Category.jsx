import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
       <div className='d-flex justify-content-center'>
        <h1>Category</h1>
       </div>
       <div className='p-5 m-10'>
       <Link to = '/dashboard/add_category' className="btn btn-primary">Add_Categories</Link>
       </div>
    </div>    
  )
}

export default Category