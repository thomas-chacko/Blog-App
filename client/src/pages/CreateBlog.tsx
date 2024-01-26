import axios from "axios";
import { Button, TextInput, Textarea } from "flowbite-react";
import { FileInput } from "flowbite-react";
import React, { useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface BlogType {
  title: string;
  description: string;
  file: string;
}

export const CreateBlog = () => {
  const { currentUser } = useSelector((state: any) => state.user);

  const navigate = useNavigate();
  const [data, setData] = useState<BlogType>({
    title: "",
    description: "",
    file: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, file } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("email", currentUser?.email);

    axios
      .post(`${baseUrl}/createblog`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((er) => {
        console.log(er);
        alert("Error creating blog Please Login");
      });
  };

  return (
    <div className="p-4 py-10 max-w-2xl mx-auto">
      <h1 className="text-center text-2xl font-bold py-4">Create Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <TextInput
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          placeholder="Blog title"
        />
        <Textarea
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          rows={4}
          placeholder="Enter description..."
        />
        <div>
          <FileInput
            onChange={(e: any) => setData({ ...data, file: e.target.files[0] })}
            id="file-upload-helper-text"
            helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
          />
        </div>
        <Button type="submit" gradientDuoTone="purpleToPink">
          Create Blog
        </Button>
      </form>
    </div>
  );
};
