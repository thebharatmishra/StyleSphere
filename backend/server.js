const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("E-Commerce Backend is running");
});
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);
// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
