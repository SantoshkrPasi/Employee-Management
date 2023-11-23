import express from "express";
// import con from "../utils/db";
const router = express.Router();

router.post("/adminlogin", (req, res) => {
  console.log(req.body);
});

export { router as adminRouter}