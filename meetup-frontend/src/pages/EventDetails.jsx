import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import SpeakerCard from "../components/SpeakerCard";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data, loading, error } = useFetch(`/events/${eventId}`, {});

  if (loading) {
    return (
      <div className="container py-4">
        <p>Loading event details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4">
        <Link to="/" className="text-danger fw-bold d-inline-block mb-3">
          ← Back to events
        </Link>
        <p>{error}</p>
      </div>
    );
  }

  if (!data || data.error) {
    return (
      <div className="container py-4">
        <Link to="/" className="text-danger fw-bold d-inline-block mb-3">
          ← Back to events
        </Link>
        <p>{data?.error || "Event not found"}</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h2 className="brand-text m-0">Meetup</h2>
      </div>

      <Link to="/" className="text-danger fw-bold d-inline-block mb-4 back-link-custom">
        ← Back to events
      </Link>

      <div className="row g-4">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-2">{data.title}</h1>

          <p className="text-muted mb-1">Topic:</p>
          <p className="fw-bold mb-4">{data.topic}</p>

          <img
            src={data.image}
            alt={data.title}
            className="rounded-4 custom-shadow hero-img mb-4"
          />

          <h3 className="fw-bold mb-3">Details:</h3>
          <p className="text-secondary lh-lg">{data.description}</p>

          <h3 className="fw-bold mt-4 mb-3">Additional Information:</h3>

          <p className="mb-2">
            <i className="bi bi-person-fill me-2 text-danger"></i>
            <strong>Dress Code:</strong> {data.dressCode}
          </p>

          <p className="mb-2">
            <i className="bi bi-shield-lock-fill me-2 text-danger"></i>
            <strong>Age Restrictions:</strong> {data.ageRestrictions}
          </p>

          <p className="mb-2">
            <i className="bi bi-clock-fill me-2 text-danger"></i>
            <strong>Session Timings:</strong> {data.sessionTimings}
          </p>

          <p className="mb-4">
            <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
            <strong>Venue:</strong> {data.venue}, {data.address}
          </p>

          <h3 className="fw-bold mb-3">Event Tags:</h3>

          <div className="d-flex flex-wrap gap-2">
            {data.tags &&
              data.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge rounded-pill gradient-tag px-3 py-2"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 rounded-4 glass-card mb-4 section-card">
            <div className="card-body p-4">
              <p className="mb-3">
                <i className="bi bi-calendar-event-fill me-2 text-danger"></i>
                {data.date}
              </p>

              <p className="mb-2">
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                {data.venue}
              </p>

              <p className="text-muted">
                <i className="bi bi-pin-map-fill me-2"></i>
                {data.address}
              </p>

              <h4 className="fw-bold my-4">
                <i className="bi bi-currency-rupee me-2 text-success"></i>
                {data.price}
              </h4>

              <button className="btn text-white w-100 rounded-pill py-2 fw-semibold rsvp-btn-custom">
                RSVP
              </button>
            </div>
          </div>

          <h3 className="fw-bold mb-3">
            <i className="bi bi-mic-fill me-2 text-danger"></i>
            Speakers: ({data.speakers ? data.speakers.length : 0})
          </h3>

          <div className="row g-3">
            {data.speakers &&
              data.speakers.map((speaker) => (
                <div className="col-md-6 col-lg-12" key={speaker.name}>
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;