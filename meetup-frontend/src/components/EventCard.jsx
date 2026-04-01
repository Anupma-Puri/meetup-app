import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <Link to={`/event/${event.id}`}>
        <div className="card border-0 rounded-4 overflow-hidden custom-shadow event-card h-100 section-card">
          <div className="position-relative">
            <img
              src={event.image}
              alt={event.title}
              className="card-img-top event-card-img"
            />

            <span className="badge bg-dark text-white rounded-pill position-absolute top-0 start-0 m-3 px-3 py-2">
                {event.type} Event
            </span>
          </div>

          <div className="card-body">
            <p className="text-muted small mb-1">{event.date}</p>
            <h5 className="fw-bold text-dark mb-0">{event.title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;