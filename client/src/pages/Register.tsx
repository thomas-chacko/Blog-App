import axios from "axios";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import { HiInformationCircle } from "react-icons/hi";

interface RegisterType {
  username: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [errorMessage, setErrorMessage] = useState<any>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterType>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = formData;

    try {
      if (!username || !email || !password) {
        setErrorMessage("Please fill all the fields");
      }
      const result = await axios.post(`${baseUrl}/user/register`, formData);

      if (result.status === 200) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <div className="w-full h-[80vh] mt-12 p-4 md:mt-28">
        <div className="flex max-w-3xl mx-auto gap-5 flex-col md:flex-row md:items-center">
          {/* left side */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold flex items-center">Blog X</h1>
            <p className="text-sm md:max-w-80 leading-6 pt-2 md:pt-4">
              Explore our captivating blog content. Sign up effortlessly using
              your email and password, or enjoy one-click access with Google.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label value="Your Name" />
                <TextInput
                  type="text"
                  placeholder="john"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
              <div>
                <Label value="Your Email" />
                <TextInput
                  type="email"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput
                  type="password"
                  placeholder="*********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div>
                <Button
                  gradientDuoTone="purpleToPink"
                  type="submit"
                  className="w-full"
                  pill
                >
                  Login
                </Button>
              </div>
              <div className="flex gap-2 text-sm mt-4">
                <span>Have an account?</span>
                <Link className="text-blue-500 tracking-wide" to={"/login"}>
                  Login
                </Link>
              </div>
            </form>
            {errorMessage && (
              <Alert
                className="mt-4"
                color="failure"
                icon={HiInformationCircle}
              >
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
