import React from "react";

export default function Button({ text, link }) {
  function handleRedirect() {
    window.open(link);
  }

  return (
    <div className="flex justify-center">
      <button
        className="bg-gray-800 p-4 hover:bg-gray-700  text-white text-2xl font-bold py-3 rounded-lg w-50 shadow-md transition duration-300 ease-in-out"
        onclick={handleRedirect}
      >
        {text}
      </button>
    </div>
  );
}
