import axios from "axios";
import { Button, TextInput, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate, useParams } from "react-router-dom";

interface BlogType {
  title: string;
  description: string;
}

interface UpdateBlogType {
  title: string;
  description: string;
}

export const UpdateBlog = () => {
  const [blog, setBlog] = useState<BlogType>({
    title: "",
    description: "",
  });

  const [updateBlog, setUpdateBlog] = useState<UpdateBlogType>({
    title: "",
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/getblog/${id}`)
      .then((res) => {
        setBlog(res.data);
        setUpdateBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .put(`${baseUrl}/updateblog/${id}`, updateBlog, {
          withCredentials: true,
        })
        .then((res) => {
          navigate("/");
          console.log("Update successful:", res);
        })
        .catch((err) => {
          console.log("Update failed:", err);
        });
    } catch (error) {
      console.log("Update failed:", error);
    }
  };

  return (
    <div className="p-4 py-10 max-w-2xl mx-auto">
      <h1 className="text-center text-2xl font-bold py-4">Update Blog</h1>
      {blog && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextInput
            value={updateBlog.title}
            onChange={(e) =>
              setUpdateBlog({ ...updateBlog, title: e.target.value })
            }
          />
          <Textarea
            className="h-52"
            required
            rows={4}
            value={updateBlog.description}
            onChange={(e) =>
              setUpdateBlog({ ...updateBlog, description: e.target.value })
            }
          />
          <Button type="submit" gradientDuoTone="purpleToPink">
            Update
          </Button>
        </form>
      )}
    </div>
  );
};
