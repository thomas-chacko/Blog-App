import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" border-t-2 border-teal-500">
      <div className="container px-5 pt-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-44 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a>Add Blog</a>
              </li>
              <li>
                <a>View Blog</a>
              </li>
              <li>
                <a>24 * 7</a>
              </li>
              <li>
                <a>services</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-40 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Follow Us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>Linked IN</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-40 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Contact Us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a>+91 8330811992</a>
              </li>
              <li>
                <a>blogx@gmail.com</a>
              </li>
              <li>
                <a>Kochi, 688525</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center"
          >
            <span className="ml-3 text-xl">Blog X</span>
          </Link>
          <p className="text-sm sm:ml-6 sm:mt-0 mt-4">
            <Link to="/">All rights reserved by © 2024 Blog X</Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="flex gap-5">
              <FaFacebook size={30} />
              <FaWhatsapp size={30} />
              <FaInstagram size={30} />
              <FaGoogle size={30} />
              <FaLinkedin size={30} />
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};
