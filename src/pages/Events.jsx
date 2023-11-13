// components
import PastEvents from '../components/PastEvents';
import HeroSection from '../components/HeroSection';
import UpcomingEvents from '../components/Upcoming';
import { events } from '../data/events';
import { useNavigate } from 'react-router-dom';


const Events = () => {

  const currentEvents = [];
  const pastEvents = [];

  const navigate = useNavigate(); 

  Object.values(events).forEach(event => {
    if(event.isRunning) {
      currentEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  })

  const handleClick = (eventId) => {
      navigate(`/events/${eventId}`);
  }

  return (
    <div className="body-5">
      <HeroSection />
      <section class="section-19">
        <UpcomingEvents onClick = {handleClick} eventsList = {currentEvents}/>
        <PastEvents eventsList = {pastEvents}/>
      </section>
    </div>
  );
};

export default Events;
