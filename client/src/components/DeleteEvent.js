import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_EVENT } from "../utils/mutations";
import { Button } from "react-bootstrap";

const DeleteEvent = ({ eventId }) => {
  const [deleteEvent, { error }] = useMutation(DELETE_EVENT);

  const handleDeleteEvent = async () => {
    try {
      await deleteEvent({
        variables: {
          eventId: eventId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Button variant="danger" onClick={handleDeleteEvent}>
      Delete Event
    </Button>
  );
};

export default DeleteEvent;
