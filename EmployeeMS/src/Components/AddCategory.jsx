import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      console.log("request called");
      await axios.post("http://localhost:4000/categories", {
        category,
      });
      navigate("/dashboard/category");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="p-3 rounded w-25 border">
        <h2>Add Category</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="text">
              <strong>Category:</strong>
            </label>
            <input
              type="text"
              name="category"
              autoComplete="off"
              placeholder="Enter Category"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <button
            className="btn btn-success w-75 rounded-0 mb-2"
            type="submit"
            onClick={submit}
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
