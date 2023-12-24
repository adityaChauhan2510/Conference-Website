import React from "react";

export default function Heading({ text }) {
  return (
    <h1 class="mb-4 mt-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {text}
    </h1>
  );
}
