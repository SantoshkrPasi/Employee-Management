import express from "express";
import Collection from "./utils/userModel.js";
import Model from "./utils/adminModel.js";
import Category from "./utils/category.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// ==============================Admin======================

app.get("/adminlogin", (req, res) => {
  res.json({ data: "this is the data" });
});

app.post("/adminlogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await Model.findOne({ email: email });

    if (check) {
      res.status(200).json({});
    } else {
      res.status(401).json({});
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/adminsignup", async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const data = {
      name: name,
      email: email,
      password: password,
      address: address,
    };

    const check = await Model.findOne({ email: email });

    if (check) {
      req.header.userId = check._id;
      res.json("exist");
    } else {
      const user = await Model.insertMany([data]);
      req.header.userId = user._id;
      res.json("notexist");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json("errot in the server");
  }
});

app.post("/profile", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Model.findOne({ email: email });
    res.json(user);
  } catch (error) {
    console.error(err.message);
  }
});

app.get("/adsign/:id", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await Model.findById(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/adsign/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedUser = await Model.updateOne(
      { _id: userId },
      { $set: updatedData }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/adsign", async (req, res) => {
  await Model.find()
    .then((users) => res.json(users))
    .catch((users) => res.json(error));
});

app.delete("/adsign/:id", async (req, res) => {
  try {
    const deletedItem = await Model.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// ====================Category============================

app.post("/categories", async (req, res) => {
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
app.get("/fetchcategory", async (req, res) => {
  await Category.find()
    .then((users) => res.json(users))
    .catch((users) => res.json(error));
});
app.delete("/fetchcategory/:id", async (req, res) => {
  try {
    const deletedItem = await Category.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// =========================Employee===================================


app.get("/", (req, res) => {
  res.end("Welcome Database");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await Collection.findOne({ email: email });

    if (check) {
      res.status(200).json({});
    } else {
      res.status(401).json({});
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, salary, address, category } = req.body;

    const data = {
      name: name,
      email: email,
      password: password,
      salary: salary,
      address: address,
      category: category,
    };

    const check = await Collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await Collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json("errot in the server");
  }
});

app.delete("/employee/:id", async (req, res) => {
  try {
    const deletedItem = await Collection.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/employeedashboard", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Collection.findOne({ email: email });
    res.json(user);
  } catch (error) {
    console.error(err.message);
  }
});

app.get("/sign", async (req, res) => {
  await Collection.find()
    .then((users) => res.json(users))
    .catch((users) => res.json(error));
});

app.put("/sign/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedUser = await Collection.updateOne(
      { _id: userId },
      { $set: updatedData }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("port connected" + port);
});
