import EventTile from "./EventTile";

const UpcomingEvents = (props) => {

  const {eventsList, onClick} = props;

  return (
    <div>
      <div>
        <h1 class="heading-34">Upcoming events</h1>
      </div>
      <div class="div-block-68">
        <EventTile onClick = {onClick} eventsList = {eventsList}/>
      </div>
    </div>
  );
};

export default UpcomingEvents;
