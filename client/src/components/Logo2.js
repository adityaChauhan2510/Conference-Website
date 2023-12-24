import React from "react";
import ias from "../assets/ias.png";
import ies from "../assets/ies.png";
import pes from "../assets/pes.png";
import pels from "../assets/pels.png";
import { Link } from "react-router-dom";

export default function Logo2() {
  return (
    <div className="mb-20">
      <div className="flex">
        <Link to="https://ias.ieee.org/">
          <img src={ias} alt="IAS_LOGO" className="h-20 md:h-40 mr-10 ml-20" />
        </Link>

        <Link to="https://ieee-pes.org/">
          <img src={pes} alt="PES_LOGO" className="h-20 md:h-40 mr-10 ml-10" />
        </Link>

        <Link to="https://www.ieee-pels.org/">
          <img
            src={pels}
            alt="PELS_LOGO"
            className="h-20 md:h-40 ml-20 mr-10"
          />
        </Link>

        <Link to="https://www.ieee-ies.org/">
          <img src={ies} alt="IES_LOGO" className="h-20 md:h-40 ml-10 mr-20" />
        </Link>
      </div>
    </div>
  );
}
