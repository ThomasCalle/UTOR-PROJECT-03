import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "../utils/mutations";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import Auth from "../utils/auth";

const CreateEvent = () => {
  const [createEvent, { error }] = useMutation(CREATE_EVENT);
  const [eventInput, setEventInput] = useState({
    title: "",
    description: "",
    cost: "",
    location: "",
    date: "",
  });
  const userToken = Auth.getProfile();
  const userId = userToken.data._id;
  const handleFormSubmit = async (event) => {
    
    event.preventDefault();
    try {
      console.log({ variables: {
        title: eventInput.title,
        description: eventInput.description,
        cost: parseFloat(eventInput.cost),
        location: eventInput.location,
        date: eventInput.date,
      },})
      await createEvent({
        variables: {
          title: eventInput.title,
          description: eventInput.description,
          cost: parseFloat(eventInput.cost),
          location: eventInput.location,
          date: eventInput.date,
          userId: userId
        },

      });
      setEventInput({
        title: "",
        description: "",
        cost: "",
        location: "",
        date: "",
      });
    } catch (err) {
      console.log(err);
    }
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
                required
              />
              <Form.Control
                name="description"
                value={eventInput.description}
                onChange={(e) =>
                  setEventInput({
                    ...eventInput,
                    description: e.target.value,
                  })
                }
                type="text"
                size="lg"
                placeholder="Event Description"
                required
              />
              <Form.Control
                name="cost"
                value={eventInput.cost}
                onChange={(e) =>
                  setEventInput({
                    ...eventInput,
                    cost: e.target.value,
                  })
                }
                type="number"
                size="lg"
                placeholder="Event Cost"
                step="0.01"
                min="0"
                required
              />
              <Form.Control
                name="location"
                value={eventInput.location}
                onChange={(e) =>
                  setEventInput({
                    ...eventInput,
                    location: e.target.value,
                  })
                }
                type="text"
                size="lg"
                placeholder="Event Location"
                required
              />
              <Form.Control
                name="date"
                value={eventInput.date}
                onChange={(e) =>
                  setEventInput({
                    ...eventInput,
                    date: e.target.value,
                  })
                }
                type="datetime-local"
                size="lg"
                placeholder="Event Date"
                required
              />
              <Button type="submit" variant="success" size="lg"  >
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
