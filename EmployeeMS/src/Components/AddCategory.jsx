import React, { useState } from 'react'

const AddCategory = () => {
  const [Category , setCategory] = useState();
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='p-3 rounded w-25 border'>
            <h2>Add Category</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor="text"><strong>Category:</strong></label>
                    <input type="text" name='email' autoComplete='off' placeholder='Enter Category'
                     onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-75 rounded-0 mb-2'>Add Category</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategory