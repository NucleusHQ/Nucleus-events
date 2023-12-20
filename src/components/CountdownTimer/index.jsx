import React, { useEffect, useState } from 'react';
import "./CountdownTimer.css";

const CountdownTimer = ({ dateInfo }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  function calculateTimeLeft() {
    const eventDate = new Date(`${dateInfo.month} ${dateInfo.date}, 2023 ${dateInfo.startTime}`).getTime();
    const currentDate = new Date().getTime();
    const timeDifference = eventDate - currentDate;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


      return { days, hours, minutes, seconds };
    }
  }

  return (

    <div className='countdown-container'>
        <div className='countdown-timer-text'>Starts in</div>
        <div className='countdown-timer-container'>
            <div className='time-unit-box'>
                <div className='countDown-number'>{`${timeLeft.days}`.padStart(2, '0')}</div>  &nbsp;
                <div className='countDown-text'>d</div>
            </div>
            <div className='time-unit-box'>
                <div className='countDown-number'>{`${timeLeft.hours}`.padStart(2, '0')}</div>  &nbsp;
                <div className='countDown-text'>h</div>
            </div>
            <div className='time-unit-box'>
                <div className='countDown-number'>{`${timeLeft.minutes}`.padStart(2, '0')}</div>  &nbsp;
                <div className='countDown-text'>m</div>
            </div>
            <div className='time-unit-box'>
                <div className='countDown-number'>{`${timeLeft.seconds}`.padStart(2, '0')}</div>  &nbsp;
                <div className='countDown-text'>s</div>
            </div>
        </div>
    </div>
  )
};

export default CountdownTimer;
