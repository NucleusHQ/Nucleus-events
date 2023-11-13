
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

  const { type, eventId, title, description, guestInfo, dateInfo, about, whyInfo, targetAudience, takeaways } = eventInfo || {};

  const { fullName, designation, imgUrl } = guestInfo || {};
  const { month, monthShort, date, day, startTime, endTime } = dateInfo || {};

  const formattedTimeRange = `${startTime} - ${endTime}`;


  return (
    <div>
      <section class="top-background"></section>
      <div class="w-layout-vflex main-container">
        <EventCard
          title={title}
          guestInfo={guestInfo}
          dateInfo={dateInfo}
        />
      </div>
      <AboutEvent
        aboutInfo={about}
        whyInfo={whyInfo}
        targetAudience={targetAudience}
        takeaways={takeaways}
        dateInfo={dateInfo} />
      <Bonus />
      <Speaker eventInfo={eventInfo} />
      <Faq />
      <Masterclass />
    </div>
  );
};

export default EventInfo;
