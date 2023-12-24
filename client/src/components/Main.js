import React from "react";
import Logo2 from "./Logo2";
import Heading from "./Heading";

export default function Main() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 my-20 mb-20">
      <Heading text="Society Sponsors" />
      <Logo2 />

      <div className="mt-40 items-center">
        <Heading text="Conference Overview" />
        <p className="mt-10 text-xl">
          The International Conference on Advancements in Smart, Sustainable
          Energy Sources, Technologies, and Systems (ASSETS) aims to bring
          together researchers, scientists, engineers, and industry
          professionals to explore and discuss the latest developments in the
          field of smart and sustainable energy. This conference will serve as a
          platform for exchanging ideas, sharing innovative research findings,
          and fostering collaborations to address the global challenges
          associated with energy sustainability.
        </p>
      </div>
    </div>
  );
}
