const db = require("../config/connection");
const { User, Event, Comment } = require("../models");

const userData = require("./userData.json");
const eventData = require("./eventData.json");
const commentData = require("./commentData.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Event.deleteMany({});
  // await Comment.deleteMany({});

  const users = await User.insertMany(userData);
  const events = await Event.insertMany(eventData);
  // const comments = await Comment.insertMany(commentData);

  console.log("Users and Events seeded!🌱");
  process.exit(0);
});
