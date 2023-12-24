import React from "react";

import Button from '../components/Button';
import Main from '../components/Main';
import ActivitiesTimeline from '../components/ActivitiesTimeline';
import Footer from '../components/Footer';
import Tracks from '../components/Tracks';  
import CarouselWithContent from '../components/CarouselWithText';
import Counter from "../components/Counter/counter-logic";


export default function Home() {
  const conferenceDate = '2024-01-06T23:59:59'

  return (
    <>
        <header>
            {/* <Carousel /> */}
            <CarouselWithContent />
            <Button text="Brochure" link="" />
        </header>
        <section className='container mx-auto flex flex-col items-center justify-center'>

            <Main />
            <Tracks />
            <ActivitiesTimeline />
            <Counter conferenceDate={conferenceDate}/>

        </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}