import React from "react";
import { Card, Typography } from "@material-tailwind/react";

import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import RegistrationTimeline from "../components/Timeline/RegistrationTimeline";
import Footer from "../components/Footer";
import Payment from "../components/Payment";

const TABLE_HEAD = [
  "Authors/Registration",
  "Offline (INR/USD)",
  "Online (INR/USD)",
];

const data = [
  {
    category: "UG students",
    offline: "3000/199",
    online: "3500/249",
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
    offline: "2000/12",
    online: "2500/149",
  },
];

function Registration() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="w-full pt-10 bg-gray-200 flex flex-col items-center justify-center">
        <Heading text="Registration" />

        <RegistrationTimeline />

        <Card className="shadow-xl overflow-x-auto mt-10 mb-20 w-[90%] sm:w-[75%] md:w-[60%]">
          <table className="text-left rounded-lg border">
            <thead>
              <tr>
                <th className="text-xl sm:text-md font-bold bg-blue-gray-100 ">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-xl font-extrabold leading-none opacity-100 "
                  >
                    {""}
                  </Typography>
                </th>
                <th
                  className="text-xl sm:text-md font-bold bg-blue-gray-100 md:text-center"
                  colSpan={2}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-sm font-extrabold leading-none opacity-100 p-4"
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
                      className="font-extrabold leading-none opacity-100 px-8"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ category, offline, online }) => (
                <tr key={category} className="even:bg-blue-gray-50/50">
                  <td className="p-2 sm:p-4 px-8">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold px-6"
                    >
                      {category}
                    </Typography>
                  </td>
                  <td className="p-2 sm:p-4 px-8">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold px-8"
                    >
                      {offline}
                    </Typography>
                  </td>
                  <td className="p-2 sm:p-4 ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold px-8"
                    >
                      {online}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Payment />

        <Footer />
      </main>
    </>
  );
}

export default Registration;
