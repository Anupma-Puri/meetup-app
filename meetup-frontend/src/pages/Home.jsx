import { useMemo, useState } from "react";
import useFetch from "../useFetch";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";

const Home = () => {
  const { data, loading, error } = useFetch("/api/events", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("Both");

  const filteredEvents = useMemo(() => {
    return data.filter((event) => {
      const matchesType =
        eventType === "Both" ? true : event.type === eventType;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        search === ""
          ? true
          : event.title.toLowerCase().includes(search) ||
            event.tags.some((tag) => tag.toLowerCase().includes(search));

      return matchesType && matchesSearch;
    });
  }, [data, searchTerm, eventType]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h2 className="brand-text m-0">Meetup</h2>
      </div>

      <h1 className="display-4 fw-bold mb-4">Meetup Events</h1>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        eventType={eventType}
        setEventType={setEventType}
      />

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && filteredEvents.length === 0 && (
        <p>No events found.</p>
      )}

      <div className="row g-4">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;