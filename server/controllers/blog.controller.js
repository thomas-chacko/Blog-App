const blogModel = require("../models/blog.model");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createUser = req.user.username
    const blog = new blogModel({
      title,
      description,
      file: req.file.filename,
      email: req.body.email,
      username: createUser
    });
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await blogModel.findById({ _id: req.params.id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    const blog = await blogModel.findByIdAndUpdate(
      { _id: id },
      { title, description },
      { new: true }
    );
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
};
