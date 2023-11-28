import EventInfo from "./pages/EventInfo";
import Events from "./pages/Events";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/common.css";
import "./styles/events.css";
import "./styles/eventInfo.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Events />} />
          <Route path="/:id" element={<EventInfo />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
