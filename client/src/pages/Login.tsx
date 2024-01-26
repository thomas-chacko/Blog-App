import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user/userSlice";

interface LoginType {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<LoginType>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { email, password } = userData;
    e.preventDefault();
    try {
      if (!email || !password) {
        alert("Please fill all the fields");
      }
      const result = await axios.post(`${baseUrl}/user/login`, userData, {
        withCredentials: true,
      });
      console.log(result);
      if (result.status === 200) {
        navigate("/");
        console.log(result);
        dispatch(loginSuccess(result.data));
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
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
                <Label value="Your Email" />
                <TextInput
                  type="email"
                  placeholder="john@gmail.com"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label value="Your Password" />
                <TextInput
                  type="password"
                  placeholder="*********"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      password: e.target.value,
                    })
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
                <span>Don't have an account?</span>
                <Link className="text-blue-500 tracking-wide" to="/signup">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
