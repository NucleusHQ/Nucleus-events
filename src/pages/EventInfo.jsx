
import AboutEvent from "../components/AboutEvent";
import Bonus from "../components/Bonus";
import EventCard from "../components/EventCard";
import Faq from "../components/Faq";
import Masterclass from "../components/Masterclass";
import Speaker from "../components/Speaker";

const EventInfo = () => {
  return (
    <div>
        <section class="top-background"></section>
        <div class="w-layout-vflex main-container">
            <EventCard/>
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
