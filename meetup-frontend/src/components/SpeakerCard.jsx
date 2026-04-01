const SpeakerCard = ({ speaker }) => {
  return (
    <div className="card border-0 rounded-4 glass-card text-center p-3 h-100 speaker-card-hover">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="rounded-circle mx-auto mb-3 speaker-avatar"
      />
      <h6 className="fw-bold mb-1">{speaker.name}</h6>
      <p className="text-muted small mb-0">{speaker.role}</p>
    </div>
  );
};

export default SpeakerCard;