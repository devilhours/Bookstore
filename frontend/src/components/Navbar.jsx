import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Authentication from "./Authentication";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle function to handle the mobile menu's visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const navItems = (
        <>
            <li className="px-4 py-2 hover:bg-teal-500 rounded-md cursor-pointer transition-all duration-300">
        <a
          href="/"
          className="transition-all duration-300 hover:text-yellow-300"
        >
          Home
        </a>
      </li>
      <li className="px-4 py-2 hover:bg-teal-500 rounded-md cursor-pointer transition-all duration-300">
        <a
          href="/"
          className="transition-all duration-300 hover:text-yellow-300"
        >
          Courses
        </a>
      </li>
      <li className="px-4 py-2 hover:bg-teal-500 rounded-md cursor-pointer transition-all duration-300">
        <a
          href="/"
          className="transition-all duration-300 hover:text-yellow-300"
        >
          About
        </a>
      </li>
      <li className="px-4 py-2 hover:bg-teal-500 rounded-md cursor-pointer transition-all duration-300">
        <a
          href="/"
          className="transition-all duration-300 hover:text-yellow-300"
        >
          Contact
        </a>
        </li>
        </>
    )
    return (
        <div>
        {/* Make the navbar fixed */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 flex justify-between items-center md:px-20 px-4 text-white h-20 max-w-screen-2xl mx-auto fixed top-0 left-0 w-full z-50 shadow-lg">
          <h1 className="text-2xl font-extrabold text-yellow-400">BookStore</h1>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">{navItems}</ul>
          </nav>
          {/* <button className="px-3 py-2 md:px-4 md:py-3 bg-blue-500 hover:bg-blue-700 rounded-lg transition duration-300 transform hover:scale-105">
            Login
          </button> */}
          
          <Authentication/>
  
          {/* mobile nav */}
          <div
            onClick={toggleMobileMenu}
            className="block md:hidden cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
          <ul
            className={`${
              isMobileMenuOpen
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-teal-800 ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu when clicking the menu
          >
            {/* Mobile Logo */}
            <h1 className="w-full text-2xl font-bold text-yellow-400 m-4">
              bookStore
            </h1>
  
            {/* Mobile Navigation Items */}
            {navItems}
          </ul>
        </div>
  
        {/* Add top padding to the rest of the content to avoid overlap */}
        <div className="pt-24"> {/* Adjust pt-24 based on your navbar height */}
          {/* Other content goes here */}
        </div>
      </div>
    )
}

export default Navbar