import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-gray-800 mt-20">
      <div className="mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2023-2024 {"  "}
          <Link to ="" className="hover:underline">
            PEDES {"   "}
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link to ="/about" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          <li>
            <Link to ="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
