const { Event } = require("../models");

const eventData = [
  {
    title: "First Blog Event",
    content: "This is the content of the first event.",
    user_id: 1,
  },
  // ADD: Dummy Data here to present onto landing page
  {
    title: "Second Blog Event",
    content: "This is the content of the secont event.",
    user_id: 2,
  },
  {
    title: "Third Blog Event",
    content: "This is the content of the thirt event.",
    user_id: 3,
  },
  {
    title: "Fourth Blog Event",
    content: "This is the content of the fourtt event.",
    user_id: 4,
  },
  {
    title: "Fifth Blog Event",
    content: "This is the content of the fiftt event.",
    user_id: 5,
  }
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;
