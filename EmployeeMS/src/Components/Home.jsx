import React from "react";

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-around mt-5">
        <div className="d-flex flex-column align-items-center border p-3 rounded w-25 mt-4">
          <h2>Admin</h2>
          <hr className="my-4 w-50" />
          <div className="mt-3">
            <h3>Total :</h3>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center border p-3 rounded w-25 mt-4">
          <h2>Employee</h2>
          <hr className="my-4 w-50" />
          <div className="mt-3">
            <h3>Total :</h3>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center border p-3 rounded w-25 mt-4">
          <h2>Total Salary</h2>
          <hr className="my-4 w-50" />
          <div className="mt-3">
            <h3>Total :</h3>
          </div>
        </div>
      </div>

      <div>
        <h3 className="m-5 my-4">List Of Admins</h3>
  
        <table className="table mx-5">
          <thead>
            <tr>
              <th className="mb-3">Email</th>
              <th className="mb-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             <td className="mb-3">Santosh@gmail.com</td>
             <td className="mb-3">
              <button type="button" className="px-1 py-0.5 m-1">Edit</button> 
              <button type="button" className="px-1 py-0.5 m-1">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Home;
