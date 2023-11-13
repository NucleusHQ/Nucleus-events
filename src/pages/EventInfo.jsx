
import AboutEvent from "../components/AboutEvent";
import Bonus from "../components/Bonus";
import EventCard from "../components/EventCard";
import Faq from "../components/Faq";
import Masterclass from "../components/Masterclass";
import Speaker from "../components/Speaker";
import { useParams } from 'react-router-dom';
import { events } from "../data/events";

const EventInfo = () => {

  const { id } = useParams();

  const eventInfo = events[id];

  console.log(eventInfo, "eventInfo")

  return (
    <div>
        <section class="top-background"></section>
        <div class="w-layout-vflex main-container">
            <EventCard eventInfo = {eventInfo}/>
        </div>
        <AboutEvent/>
        <Bonus/>
        <Speaker/>
        <Faq/>
        <Masterclass/>
    </div>
  );
};

export default EventInfo;
