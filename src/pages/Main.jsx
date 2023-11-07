
import '../styles/normalize.css'
import '../styles/webflow.css'
import '../styles/common.css'
import '../styles/events.css'
import '../styles/eventInfo.css'
import EventInfo from './EventInfo';
import Events from './Events';


function Main() {
  return (
    <div>
      <Events />
      {/* <EventInfo/> */}
    </div>
  );
}

export default Main;
