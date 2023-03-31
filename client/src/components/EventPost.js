import React from 'react';

const EventPost = ({ events, deleteEvent }) => {
  return (
    <div className="container">
      <h3>Events:</h3>
      <ul>
        {events.map((event, index) => (
          <li key={event.id}>
            <div className="row">
              <div className="col-md-8">
                <h4>{event.name}</h4>
                <p>{event.description}</p>
              </div>
              <div className="col-md-4 text-right">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteEvent(index)}
                >
                  Delete
                </button>
              </div>
            </div>
            <small>
              Created on{' '}
              {new Date(event.timestamp).toLocaleString('en-US', {
                dateStyle: 'long',
                timeStyle: 'short',
              })}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventPost;
