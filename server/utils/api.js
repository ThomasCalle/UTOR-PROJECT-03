const BASE_URL = "http://localhost:3001/api";

export async function fetchEvents() {
  const response = await fetch(`${BASE_URL}/events`);
  return response.json();
}

export async function createEvent(event) {
  const response = await fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return response.json();
}

export async function updateEvent(eventId, event) {
  const response = await fetch(`${BASE_URL}/events/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return response.json();
}

export async function deleteEvent(eventId) {
  const response = await fetch(`${BASE_URL}/events/${eventId}`, {
    method: "DELETE",
  });
  return response.json();
}