import EventInfo from "./pages/EventInfo";
import Events from "./pages/Events";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import './styles/normalize.css'
import './styles/webflow.css'
import './styles/common.css'
import './styles/events.css'
import './styles/eventInfo.css'


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventInfo />} />
        </Routes>
      </Router>
  );
}

export default App;
