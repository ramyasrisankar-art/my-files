const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://ramya_user:Ramya1234@cluster0.8xvdvfg.mongodb.net/taskdb"
  )
  .then(() => {
    console.log("MongoDB connected");
    // Start server only after DB connects
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("MongoDB error:", err);
    process.exit(1);
  });

// routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);
