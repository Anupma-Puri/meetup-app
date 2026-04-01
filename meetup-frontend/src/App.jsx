import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="soft-page-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;