import React from "react";
import { Card, Typography } from "@material-tailwind/react";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import RegistrationTimeline from "../components/Timeline/RegistrationTimeline";
import Footer from "../components/Footer";

const TABLE_HEAD=[
  "Authors/Registration",
  "UG students",
  "M.tech / Ph.D students Faculties (Max. 04)",
  "Others",
  "Listeners"
]

const data=[
  {
    category: "Memebers (in INR)",
    UG: "3000",
    MTech: "5500",
    Others: "6500",
    Listeners:"2000"
  },
  {
    category: "Non-Memebers (in INR)",
    UG: "5500",
    MTech: "6000",
    Others: "7000",
    Listeners:"2500"
  },
  {
    category: "Foreign Authors (in USD)",
    UG: "249",
    MTech: "299",
    Others: "329",
    Listeners:"199"
  },  
]

function Registration() {
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
                  ({ category,UG,MTech,Others,Listeners,SIJ}) => (
                    <tr key={category} className="even:bg-blue-gray-50/50">
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-center" 
                        >
                          {category}
                        </Typography>
                      </td>
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {UG}
                        </Typography>
                      </td>
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {MTech}
                        </Typography>
                      </td>
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {Others}
                        </Typography>
                      </td>
                      <td className="p-2 sm:p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {Listeners}
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
