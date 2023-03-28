// Import the necessary models
const User = require("./User");
const Event = require("./Event");
const Comment = require("./Comment");
// Define the relationships between the models
User.hasMany(Event, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

Event.belongsTo(User, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

Comment.belongsTo(User, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

Comment.belongsTo(Event, {
  foreignKey: "event_id", // Set up the foreign key relationship
});

Event.hasMany(Comment, {
  foreignKey: "event_id", // Set up the foreign key relationship
});

User.hasMany(Comment, {
  foreignKey: "user_id", // Set up the foreign key relationship
});
// Export the models
module.exports = { User, Event, Comment };
