const FilterBar = ({
  searchTerm,
  setSearchTerm,
  eventType,
  setEventType
}) => {
  return (
    <div className="row g-3 mb-4">
      <div className="col-md-8">
        <input
          type="text"
          className="form-control form-control-lg rounded-pill search-input"
          placeholder="Search by title and tags"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="col-md-4">
        <select
          className="form-select form-select-lg rounded-pill"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="Both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;