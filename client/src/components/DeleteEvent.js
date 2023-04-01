import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_EVENT } from "../utils/mutations";
import { Button } from "react-bootstrap";

// DeleteEvent component to handle event deletion... duh
const DeleteEvent = ({ eventId }) => {
  const [deleteEvent, { error }] = useMutation(DELETE_EVENT);
  // Define a function to handle event deletion when the button is clicked
  const handleDeleteEvent = async () => {
    try {
      // Execute the deleteEvent mutation w. the provided eventId
      await deleteEvent({
        variables: {
          eventId: eventId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  // Button triggers handleDeleteEvent function when clicked
  return (
    <Button variant="danger" onClick={handleDeleteEvent}>
      Delete Event
    </Button>
  );
};
// Export the DeleteEvent component for use in other parts of the application
export default DeleteEvent;
