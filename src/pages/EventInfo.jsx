
import AboutEvent from "../components/AboutEvent";
import Bonus from "../components/Bonus";
import EventCard from "../components/EventCard";
import Faq from "../components/Faq";
import Masterclass from "../components/Masterclass";
import Speaker from "../components/Speaker";
import { useParams } from 'react-router-dom';
import { events } from "../data/events";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const EventInfo = ({match}) => {

  const { id } = useParams();
  const eventInfo = events[id];

  const navigate = useNavigate();

  const { eventId, title, description, guestInfo, dateInfo, about, whyInfo, targetAudience, takeaways, category, type, faqList } = eventInfo || {};

  const { fullName, designation, imgUrl } = guestInfo || {};
  const { month, monthShort, date, day, startTime, endTime } = dateInfo || {};

  const formattedTimeRange = `${startTime} - ${endTime}`;

  const bannerImage = require(`../images/banner_${eventId}.png`);
  const src = require("../images/harish.jpeg");

  const formattedGuestInfo = {...guestInfo, src};

  useEffect(() => {
    window.fbq('track', 'ViewContent', {
      content_name: title + " " + 'Landing Page',
      content_category: category,
      content_ids: [eventId], 
  });  }, []) 

  const handleRegisterClick = (e) => {
      const eventId = id;
      const newUrl = `http://payments.nucleushq.io/?category=${category}&programId=${eventId}&type=${type}`;

      window.open(newUrl, '_blank');
    }


  return (
    <div>
      <section class="top-background"></section>
      <div class="w-layout-vflex main-container">
        <EventCard
          bannerImage={bannerImage}
          title={title}
          guestInfo={formattedGuestInfo}
          dateInfo={dateInfo}
          onRegisterClick={handleRegisterClick} 
        />
      </div>
      <AboutEvent
        aboutInfo={about}
        whyInfo={whyInfo}
        targetAudience={targetAudience}
        takeaways={takeaways}
        dateInfo={dateInfo} />
      {/* <Bonus /> */}
      <Speaker guestInfo = {formattedGuestInfo}/>
      <Faq faqList={faqList}/>
      <Masterclass 
        title = {title}
        dateInfo={dateInfo}
      />
    </div>
  );
};

export default EventInfo;
