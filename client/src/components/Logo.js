import React from "react";
import nitk from "./../assets/nitk.png";
import assets from "../assets/assets.jpg";
// import ieee from "./../assets/ieee.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <header className="flex justify-between items-center p-1">
      <div className="object-cover">
        <img src={assets} alt="PEDES-IMAGE" className="h-30 md:h-40 mx-1 object-cover" />
      </div>

      <div className="flex">
        <Link to="https://www.nitk.ac.in/">
          <img
            src={nitk}
            alt="NITK_LOGO"
            className="h-24 md:h-30 mx-1"
          />
        </Link>

        {/* <Link to="https://www.ieee.org/">
          <img
            src={ieee}
            alt="IEEE_LOGO"
            className="h-20 md:h-30 mx-1"
          />
        </Link> */}
      </div>
    </header>
  );
}
