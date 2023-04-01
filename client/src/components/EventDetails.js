import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import placeholder from "../assets/placeholder.png";
import { GET_ONE_EVENT } from "../utils/queries";
import {
  Container,
  Card,
  Col,
  Form,
  Button,
  Row,
  Alert,
  ButtonGroup,
} from "react-bootstrap";

const EventDetails = () => {
  const [eventData, setEventData] = useState({});
  const [countDown, setCountDown] = useState();
  const [countDownFormat, setCountDownFormat] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { eventId } = useParams();

  const { loading, error, data } = useQuery(GET_ONE_EVENT, {
    variables: { eventId: eventId },
  });

  useEffect(() => {
    if (!loading) {
      console.log(data);
      const timeStamp = parseInt(data.event.date);
      const date = new Date(timeStamp);
      const dateString = date.toLocaleDateString();
      const timeString = date.toLocaleTimeString();
      setEventData({
        title: data.event.title,
        description: data.event.description,
        cost: data.event.cost,
        location: data.event.location,
        date: dateString,
        time: timeString,
      });
      // setCountDown(timeStamp);
    }
  }, [loading]);

  // // countdown
  // useEffect(() => {
  //   if (!countDown) return;
  //   const now = new Date();

  //   // save intervalId to clear the interval when the component re-renders
  //   const intervalId = setInterval(() => {
  //     setCountDown(countDown - 1);
  //   }, 1000);

  //   const timeDifference = intervalId.getTime() - now.getTime();

  //   const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  //   console.log(daysLeft);
  //   // const dateString = date.toLocaleDateString();
  //   // const timeString = date.toLocaleTimeString();

  //   // clear interval on re-render
  //   return () => clearInterval(intervalId);
  // }, [countDown]);

  const countDownStyle = {
    height: "300px",
    background: "linear-gradient(to right, pink, orange)", //change gradient colors here
  };

  const buttonStyle = {
    backgroundColor: "#FFA500", //button colors
    borderColor: "#FFA500",
    borderRadius: "5px",
    width: "20%",
    margin: "3%",
  };

  return (
    <>
      <Container fluid style={countDownStyle}>
        {/* countdown timer goes here */}
        {countDown}
      </Container>
      <Container>
        <ButtonGroup className="w-100">
          <Button style={buttonStyle}>Date: {eventData.date}</Button>
          <Button style={buttonStyle}>Time: {eventData.time}</Button>
          <Button style={buttonStyle}>Location: {eventData.location}</Button>
          <Button style={buttonStyle}>Cost: ${eventData.cost}</Button>
        </ButtonGroup>
        <Container className="mb-5">
          <Row>
            <Col md={6}>
              <Card className="border-0 p-3">
                <Card.Body>
                  <Card.Title>{eventData.title}</Card.Title>
                  <Card.Text>{eventData.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card.Img
                variant="top"
                className="border-0 p-3"
                src={placeholder}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default EventDetails;
