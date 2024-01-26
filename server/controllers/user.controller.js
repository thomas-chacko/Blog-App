const users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json("All fields are required");
    }

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    //make the password secure
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new users({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const validUser = await users.findOne({ email });

    if (!validUser) {
      return res.status(401).json({
        message: "Email does not exist",
      });
    }

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) {
      return res.status(402).json({
        message: "Password is incorrect",
      });
    }

    const token = jwt.sign(
      { id: validUser._id, username: validUser.username },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({
        _id: validUser._id,
        username: validUser.username,
        email: validUser.email,
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json("Logged");
};

module.exports = {
  register,
  login,
  logout,
};
