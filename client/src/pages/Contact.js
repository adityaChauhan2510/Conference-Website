import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="flex-grow">
        <div className="w-3/4 mx-auto py-4 mt-4">
          <div className="p-8 rounded shadow-md">
            <div className="my-5 text-center">
              <h1 className="mb-20 text-6xl font-bold text-gray-800">
                Contact Us
              </h1>
              <h2 className="mb-10 text-4xl font-bold text-gray-800">
                General Chairs
              </h2>
              <div className="flex justify-center">
                <div className="mr-20 text-center">
                  <p className="font-bold text-xl mb-2 tracking-wider">
                    R.Kalpana
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl mb-2">P.Parthiban</p>
                </div>
              </div>
            </div>
            <div className="mr-6 text-center">
              <p className="font-bold text-xl mb-2">NITK, India</p>
            </div>
            <div className="text-center">
              <Link
                to=""
                className="text-blue-600 hover:underline font-bold text-lg"
              >
                EMAIL
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
