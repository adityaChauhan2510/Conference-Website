import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import {useState} from 'react'

import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import RegistrationTimeline from "../components/Timeline/RegistrationTimeline";
import Footer from "../components/Footer";

const TABLE_HEAD = [
  "Authors/Registration",
  "Offline (INR/USD)",
  "Online (INR/USD)",
];

const data1=[
  {
    category: "UG students",
    members: "",
    nonmembers: "5500",
    foreignauthors: "249",
  }

  
]

const data = [
  {
    category: "UG students",
    offline: "3000/199",
    online: "5500/249",
  },
  {
    category: "M.Tech/PhD/Faculties (max 4)",
    offline: "5500/249",
    online: "6000/299",
  },
  {
    category: "Others",
    offline: "6500/329",
    online: "7000/349",
  },
  {
    category: "Listeners",
    offline: "2000/129",
    online: "2500/149",
  }

];



function Registration() {
  const [authors,setAuthors] = useState(false)
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="w-full pt-10 pb-20 bg-gray-200 flex flex-col items-center justify-center">
        <Heading text="Registration" />

        <RegistrationTimeline />

        <div className="mx-5 mt-20">
          <Card className="shadow-xl">
            <table className="text-left rounded-lg border table-auto">
              <thead>
              <tr>
              <th
                      className="text-sm sm:text-md font-bold bg-blue-gray-100 "
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-extrabold leading-none opacity-100"
                      >
                      </Typography>
                    </th>
                    <th
                      className="text-sm sm:text-md font-bold bg-blue-gray-100 md:text-center"
                      colSpan={2}
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-extrabold leading-none opacity-100 pt-2"
                      >
                        Indian/Foreign
                      </Typography>
                    </th>

                </tr>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="text-sm sm:text-md font-bold bg-blue-gray-100 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-extrabold leading-none opacity-100"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(
                  ({ category, offline, online }) => (
                    <tr key={category} className="even:bg-blue-gray-50/50">
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {category}
                        </Typography>
                      </td>
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {offline}
                        </Typography>
                      </td>
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {online}
                        </Typography>
                      </td>


                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Registration;
