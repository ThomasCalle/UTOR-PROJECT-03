import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_EVENT } from '../utils/mutations';
import { DELETE_EVENT } from '../utils/mutations';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventTimestamps, setEventTimestamps] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEventTimestamps(storedEvents);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date();
    const newEvents = [
      ...eventTimestamps,
      { id: timestamp.getTime(), name: eventName, description: eventDescription, location: eventLocation, timestamp },
    ];
    setEventTimestamps(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));
    setEventName('');
    setEventDescription('');
    setEventLocation('');
  };

  const handleDelete = (id) => {
    const updatedEvents = eventTimestamps.filter((event) => event.id !== id);
    setEventTimestamps(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const [updateEvent] = useMutation(UPDATE_EVENT);
  const [deleteEvent] = useMutation(DELETE_EVENT);

  const handleUpdateEvent = async (id, name, description, location) => {
    try {
      const { data } = await updateEvent({
        variables: { eventId: id, eventInput: { name, description, location } },
      });
      const updatedEvents = eventTimestamps.map((event) =>
        event.id === id ? { ...event, name, description, location } : event
      );
      setEventTimestamps(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      const { data } = await deleteEvent({
        variables: { eventId: id },
      });
      const updatedEvents = eventTimestamps.filter((event) => event.id !== id);
      setEventTimestamps(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h2>Create an Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Location"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />
        <button type="submit">Create Event</button>
      </form>
      <div>
        <h3>Events:</h3>
        <ul>
          {eventTimestamps.map((event, index) => (
            <li key={event.id}>
              {event.name} - {event.description} ({event.location}) <br />
              <small>
                Created on{' '}
                {new Date(event.timestamp).toLocaleString('en-US', {
                  dateStyle: 'long',
                  timeStyle: 'short',
                })}
                <button type="button" onClick={() => handleDelete(event.id)}>Delete</button>
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateEvent;
