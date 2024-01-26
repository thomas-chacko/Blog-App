import axios from "axios";
import React from "react";
import { BlogCard } from "../components/BlogCard";
import { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

interface BlogType {
  _id: number;
  title: string;
  description: string;
  file: string;
  email?: string;
}

export const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogType[]>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/getallblogs`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-5">
      <h1 className="text-center text-2xl pt-2 font-bold">Letest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
