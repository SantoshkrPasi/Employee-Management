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
      await axios.post(`${import.meta.env.VITE_BASE_URL}/categories`, {
        category,
      });
      navigate("/dashboard/category");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="p-3 rounded w-25 border">
        <h4>Add Category</h4>
        <form className="d-flex flex-column gap-4 align-items-center">
          <input
            type="text"
            name="category"
            autoComplete="off"
            placeholder="Enter Category"
            onChange={(e) => setCategory(e.target.value)}
            className="form-control rounded-0"
          />
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
