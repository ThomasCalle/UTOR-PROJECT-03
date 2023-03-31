import React, { useState, useEffect } from "react";

import { useQuery, useMutation } from "@apollo/client";
import { CREATE_EVENT } from "../utils/mutations";
import { Container, Col, Form, Button, Row } from "react-bootstrap";

const CreateEvent = () => {
  const [createEvent, { error }] = useMutation(CREATE_EVENT);
  const [eventInput, setEventInput] = useState({
    title: "",
    description: "",
    cost: "",
    location: "",
    date: "",
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    createEvent({
      variables: {
        title: eventInput.title,
        description: eventInput.description,
        cost: eventInput.cost,
        location: eventInput.location,
        date: eventInput.date,
      },
    });
  };

  return (
    <div className="text-light bg-dark p-5">
      <Container>
        <h1>Create Event</h1>
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col xs={12} md={8}>
              <Form.Control
                name="title"
                value={eventInput.title}
                onChange={(e) =>
                  setEventInput({ ...eventInput, title: e.target.value })
                }
                type="text"
                size="lg"
                placeholder="Event Name"
              />
              <Form.Control
                name="description"
                value={eventInput.description}
                onChange={(e) =>
                  setEventInput({ ...eventInput, description: e.target.value })
                }
                type="text"
                size="lg"
                placeholder="Event Description"
              />
              <Form.Control
                name="cost"
                value={eventInput.cost}
                onChange={(e) =>
                  setEventInput({ ...eventInput, cost: e.target.value })
                }
                type="text"
                size="lg"
                placeholder="Event Cost"
              />
              <Form.Control
                name="location"
                value={eventInput.location}
                onChange={(e) =>
                  setEventInput({ ...eventInput, location: e.target.value })
                }
                type="text"
                size="lg"
                placeholder="Event Location"
              />
              <Form.Control
                name="date"
                value={eventInput.date}
                onChange={(e) =>
                  setEventInput({ ...eventInput, date: e.target.value })
                }
                type="text"
                size="lg"
                placeholder="Event Date"
              />
              <Button type="submit" variant="success" size="lg">
                Create Event
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CreateEvent;
