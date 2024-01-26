import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface BlogType {
  _id: number;
  title: string;
  description: string;
  file: string;
  email?: string;
  username: string;
}

export const Blog: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogType>();

  useEffect(() => {
    axios
      .get(`${baseUrl}/getblog/${id}`)
      .then((res) => {
        setBlog(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-4">
      {currentUser?.email === blog?.email && (
        <div className="flex justify-end gap-5 py-2">
          <Button pill gradientMonochrome="success">
            <Link to={`/blog/update/${blog?._id}`}>Edit</Link>
          </Button>
          <Button pill gradientMonochrome="purple">
            Delete
          </Button>
        </div>
      )}
      <img
        src={`${baseUrl}/uploads/${blog?.file}`}
        alt="no-image"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover md:object-contain"
      />
      <div className="flex flex-col md:justify-between py-2">
        <h1 className="py-3 text-xl font-bold">{blog?.title}</h1>
        <div>
          <p>By : {blog?.username}</p>
          <p>Email : {blog?.email}</p>
        </div>
      </div>
      <p>{blog?.description}</p>
    </div>
  );
};
