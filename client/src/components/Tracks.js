import React from "react";
import Heading from "./Heading";

export default function Tracks() {
  return (
    <section className="mt-40 container mx-auto flex flex-col items-center justify-center py-10">
      <Heading text="Tracks"/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT1:</span><br />
          <span className="font-bold text-lg">Electrical Machines, systems and applications</span>
        </div>
        <div className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT2:</span><br />
          <span className="font-bold text-lg">Power Electronics control, Systems and Applications</span>
        </div>
        <div className="p-4 text-md rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT3:</span><br />
          <span className="font-bold text-lg">Advanced Power Semiconductors and Technologies</span>
        </div>
        <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT4:</span><br />
          <span className="font-bold text-lg"> Wireless Power Transfer systems and technologies</span>
        </div>
        <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT5:</span><br />
          <span className="font-bold text-lg">Power systems control and smart grid technologies</span>
        </div>
        <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT6:</span><br />
          <span className="font-bold text-lg"> AI and Embedded applications for sustainable energy technologies</span>
        </div>
        <div className="p-4 text-sm rounded-lg bg-white text-gray-900 shadow-md">
          <span className="font-medium">TT7:</span><br />
          <span className="font-bold text-lg">Alternate energy sources and technologies</span>
        </div>
      </div> 
    </section>
  );
}
