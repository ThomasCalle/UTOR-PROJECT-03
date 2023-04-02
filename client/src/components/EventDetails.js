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
      setCountDown(timeStamp);
    }
  }, [loading]);

  // countdown
  useEffect(() => {
    if (!countDown) return;

    //current date and time in milliseconds
    const now = new Date().getTime();

    // minus one from countDown each second
    const intervalId = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    // time difference
    const timeDifference = countDown - now;

    // difference in days
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    //difference in hours
    const hoursLeft = Math.floor(
      timeDifference / (1000 * 60 * 60) - daysLeft * 24
    );

    //difference in minutes
    const minutesLeft = Math.floor(
      timeDifference / (1000 * 60) - (daysLeft * 24 * 60 + hoursLeft * 60)
    );

    //difference in seconds
    const secondsLeft = Math.floor(
      timeDifference / 1000 -
        (daysLeft * 24 * 60 * 60 + hoursLeft * 60 * 60 + minutesLeft * 60)
    );

    //save it in countDownFormat
    setCountDownFormat({
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    });

    // clear interval on re-render
    return () => clearInterval(intervalId);
  }, [countDown]);

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
      {/* countdown timer goes here */}
      <Container fluid style={countDownStyle}>
        {countDownFormat.days}
        {countDownFormat.hours}
        {countDownFormat.minutes}
        {countDownFormat.seconds}
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="text-center">
              <div className="countdown-item">
                <div className="countdown-number"> {countDownFormat.days}</div>
                <div className="countdown-label">Days</div>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="countdown-item">
                <div className="countdown-number"> {countDownFormat.hours}</div>
                <div className="countdown-label">Hours</div>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="countdown-item">
                <div className="countdown-number">
                  {" "}
                  {countDownFormat.minutes}
                </div>
                <div className="countdown-label">Minutes</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={12} className="text-center">
              <div className="countdown-item">
                <div className="countdown-number">
                  {" "}
                  {countDownFormat.seconds}
                </div>
                <div className="countdown-label">Seconds</div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* event details: */}
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
                className="border-0 p-3 h-100"
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
