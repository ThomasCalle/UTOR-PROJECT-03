import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../utils/queries";

const AllEvents = () => {
  const { loading, data } = useQuery(GET_ALL_EVENTS);

  if (loading) {
    return <div>Loading events...</div>;
  }

  const events = data.events;

  return (
    <>
      <h3 className="mb-4">All Events</h3>
      {events.length === 0 ? (
        <div>No events found</div>
      ) : (
        <ul className="list-group">
          {events.map((event) => (
            <li key={event.id} className="list-group-item">
              <h5 className="mb-1">{event.title}</h5>
              <p className="mb-1">{event.description}</p>
              <div className="mb-1">
                <span className="fw-bold me-1">Location:</span>
                {event.location}
              </div>
              <div className="mb-1">
                <span className="fw-bold me-1">Date:</span>
                {event.date}
              </div>
              <div className="text-muted">
                {event.user ? "Organized by " + event.user.username : ""}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AllEvents