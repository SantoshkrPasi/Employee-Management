import React from "react";

const AddEmployee = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="p-3 rounded w-25 border">
        <h2>Add Employee</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="text">Name</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder=" ////"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />

            <label htmlFor="text">Email</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder=" ////"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />

            <label htmlFor="text">Password</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder=" ////"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />

            <label htmlFor="text">Salary</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder=" ////"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />

            <label htmlFor="text">Address</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder=" ////"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />

            <div>
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select name="category" id="category" className="form-select">
                <option value="name">IT</option>
                <option value="name">Design</option>
                <option value="name">Computer Science</option>
              </select>
            </div>

            <label htmlFor="text">Select Image</label>
            <input type="file" className="form-control rounded-0"></input>
          </div>
          <button className="btn btn-success w-75 rounded-0 mb-2">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
