import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_ALL_EVENTS } from "../utils/queries";
import notebookImage from "../assets/note-book-image.jpg";

const AllEvents = () => {
  const { loading, data } = useQuery(GET_ALL_EVENTS);

  if (loading) {
    return <div>Loading events...</div>;
  }

  const events = data.events;

  return (
    <div className="container">
      <h3 className="mb-4">All Events</h3>
      {events.length === 0 ? (
        <div>No events found</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {events.map((event) => (
            <div key={event.id} className="col">
              <Link
                to={`/eventDetails/${event.id}`}
                style={{ textDecoration: "none", color: "black"}}
              >
                <div className="card h-100">
                  <img
                    src={notebookImage}
                    className="card-img-top"
                    alt={event.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <div className="mb-1">
                      <span className="fw-bold me-1">Location:</span>
                      {event.location}
                    </div>
                    <div className="mb-1">
                      <span className="fw-bold me-1">Date:</span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-muted">
                      {event.user ? "Organized by " + event.user.username : ""}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEvents;