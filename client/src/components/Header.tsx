import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../baseUrl";

export const Header: React.FC = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  console.log(currentUser);

  const handleLogout = () => {
    axios
      .get(`${baseUrl}/user/logout`, { withCredentials: true })
      .then((res) => {
        if (res.data === "Logged") {
          window.location.reload();
        } else {
          alert("failed to logout");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar className="py-4 shadow-md sticky z-50 top-0 left-0 right-0">
      <Navbar.Brand>
        <Link to={"/"} className="text-2xl font-bold">
          Blog X
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-center text-xl cursor-pointer">
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link className="text-center text-xl cursor-pointer">
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link className="text-center text-xl cursor-pointer">
          <Link to={"/create"}>Create</Link>
        </Navbar.Link>
        <Navbar.Link className="text-center text-xl cursor-pointer">
          {currentUser?.username ? (
            <Link onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
