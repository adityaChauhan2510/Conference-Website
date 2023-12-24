import React, { useState, useEffect } from 'react';
import Heading from '../Heading';

const Counter = ({ conferenceDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const currentTime = new Date().getTime();
    const conferenceTime = new Date(conferenceDate).getTime();
    const timeDifference = conferenceTime - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="mt-40 h-50 flex flex-col items-center justify-center">
      <Heading text="Time to Conference"/>
      {/* <h2 className="text-2xl font-bold mb-4">Time to Conference</h2> */}
      <div className="flex justify-center space-x-4">
        <span className="text-lg font-semibold">
          {timeRemaining.days} Days
        </span>
        <span className="text-lg font-semibold">
          {timeRemaining.hours} Hours
        </span>
        <span className="text-lg font-semibold">
          {timeRemaining.minutes} Minutes
        </span>
        <span className="text-lg font-semibold">
          {timeRemaining.seconds} Seconds
        </span>
      </div>
    </div>
  );
};

export default Counter;
