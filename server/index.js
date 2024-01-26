const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route");
const blogRoute = require("./routes/blog.route");

dotenv.config();
require("./db/connection");

const port = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    withCredentials: true,
  })
);

// multer
app.use("/uploads", express.static("./uploads"));

// Routes
app.use(userRoute);
app.use(blogRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
