const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great article!",
    user_id: 1,
    event_id: 1,
  },
  {
    comment_text: "I agree with you!",
    user_id: 2,
    event_id: 1,
  },
  {
    comment_text: "I disagree with you!",
    user_id: 3,
    event_id: 1,
  },
  {
    comment_text: "I agree with you!",
    user_id: 4,
    event_id: 1,
  },
  {
    comment_text: "I disagree with you!",
    user_id: 5,
    event_id: 1,
  },
  {
    comment_text: "Great article!",
    user_id: 1,
    event_id: 2,
  },
  {
    comment_text: "I agree with you!",
    user_id: 2,
    event_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
