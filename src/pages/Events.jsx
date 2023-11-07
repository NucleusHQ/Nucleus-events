// components
import PastEvents from '../components/PastEvents';
import HeroSection from '../components/HeroSection';
import UpcomingEvents from '../components/Upcoming';

const Events = () => {
  return (
    <div className="body-5">
      <HeroSection />
      <section class="section-19">
        <UpcomingEvents/>
        <PastEvents/>
      </section>
    </div>
  );
};

export default Events;
