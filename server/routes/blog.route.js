const express = require("express");
const router = express.Router();
const controller = require("../controllers/blog.controller");
const multerMiddleware = require("../middlewares/multer");
const verifyUser = require("../middlewares/jwt");

router.get("/getallblogs", controller.getAllBlogs);

router.post(
  "/createblog",
  verifyUser,
  multerMiddleware.single("file"),
  controller.createBlog
);

router.get("/getblog/:id", controller.getBlog);

router.put("/updateblog/:id", verifyUser, controller.updateBlog);

module.exports = router;
