// import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_EVENTS } from "../utils/queries";

// const AllEvents = () => {
//   const { loading, data } = useQuery(GET_ALL_EVENTS);

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   const events = data.events;

//   return (
//     <>
//       <h3 className="mb-4">All Events</h3>
//       {events.length === 0 ? (
//         <div>No events found</div>
//       ) : (
//         <ul className="list-group">
//           {events.map((event) => (
//             <li key={event.id} className="list-group-item">
//               <h5 className="mb-1">{event.title}</h5>
//               <p className="mb-1">{event.description}</p>
//               <div className="mb-1">
//                 <span className="fw-bold me-1">Location:</span>
//                 {event.location}
//               </div>
//               <div className="mb-1">
//                 <span className="fw-bold me-1">Date:</span>
//                 {event.date}
//               </div>
//               <div className="text-muted">
//                 {event.user ? "Organized by " + event.user.username : ""}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default AllEvents

import React from "react";
import { useQuery } from "@apollo/client";
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
              <div className="card h-100">
                <img src={notebookImage} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEvents;