import React from "react";
import Main from "../components/Main";
import ActivitiesTimeline from "../components/Timeline/ActivitiesTimeline";
import Footer from "../components/Footer";
import Counter from "../components/Counter/counter-logic";
import Slider from "../components/carousel/Slider";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Map from "../components/Map";

const conferenceDate = "2024-03-15T23:59:59";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
        <Slider />
      </header>

      <main className="w-full flex flex-col items-center justify-center bg-gray-200">
        <Main />
        <ActivitiesTimeline />
        <div className="h-20"></div>
        <Map />

        {/* <Counter conferenceDate={conferenceDate} /> */}
        <Footer />
      </main>
    </>
  );
}
