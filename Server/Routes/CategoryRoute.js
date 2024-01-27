import express from 'express';
// import Collection from './utils/userModel.js';
// import Model from './utils/adminModel.js';
import Category from './utils/category.js';

// const adminRouter = express.Router();
const categoryRouter = express.Router();
// const employeeRouter = express.Router();

categoryRouter.post("/categories", async (req, res) => {
    try {
      const { category } = req.body;
      const data = {
        category: category,
      };
      await Category.create(data);
      res.status(201).send("Category added successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  categoryRouter.get("/fetchcategory", async (req, res) => {
    await Category.find()
      .then((users) => res.json(users))
      .catch((users) => res.json(error));
  });
  categoryRouter.delete("/fetchcategory/:id", async (req, res) => {
    try {
      const deletedItem = await Category.findByIdAndDelete(req.params.id);
      res.json(deletedItem);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });