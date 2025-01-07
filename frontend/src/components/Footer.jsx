import React from "react";
import { FaInstagramSquare, FaYoutube, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-10 px-4 md:px-20 max-w-screen-2xl mx-auto">
      <div className="container mx-auto text-center space-y-6">
        {/* Logo and Title */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <img
            src="/logo.png"
            alt="BookStore Logo"
            className="h-10 w-auto"
          />
          <h2 className="text-2xl font-extrabold text-yellow-400">BookStore</h2>
        </div>

        {/* Navigation Links */}
        <div>
          <div className="flex justify-center gap-8 text-sm">
            <a
              href="/"
              className="hover:text-yellow-400 hover:underline transition duration-200"
            >
              Home
            </a>
            <a
              href="/"
              className="hover:text-yellow-400 hover:underline transition duration-200"
            >
              Courses
            </a>
            <a
              href="/"
              className="hover:text-yellow-400 hover:underline transition duration-200"
            >
              About
            </a>
            <a
              href="/"
              className="hover:text-yellow-400 hover:underline transition duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <div className="flex justify-center gap-6">
            <a
              href="/"
              className="hover:text-black p-3 rounded-full bg-gray-700 hover:bg-yellow-400 transition duration-300"
            >
              <FaInstagramSquare className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="hover:text-black p-3 rounded-full bg-gray-700 hover:bg-yellow-400 transition duration-300"
            >
              <FaYoutube className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="hover:text-black p-3 rounded-full bg-gray-700 hover:bg-yellow-400 transition duration-300"
            >
              <MdEmail className="h-6 w-6" />
            </a>
            <a
              href="/"
              className="hover:text-black p-3 rounded-full bg-gray-700 hover:bg-yellow-400 transition duration-300"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="text-yellow-400 font-medium">BookStore</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;