const User = require("./user");
const Event = require("./event");
const Comment = require("./comment");

// Define the relationships between the models
Event.schema.path('attendees').validate(function (value) {
return value.length <= 50; // Set the maximum number of attendees for an event to 50
}, 'The number of attendees for an event cannot exceed 50.');

Event.schema.path('date').validate(function (value) {
const currentDate = new Date();
return value > currentDate; // Set the date for an event to be in the future
}, 'The date for an event must be in the future.');

User.hasMany(Event, {
foreignField: "user",
ref: "Event",
});

Event.belongsTo(User, {
foreignField: "user",
ref: "User",
});

Comment.belongsTo(User, {
foreignField: "user",
ref: "User",
});

Comment.belongsTo(Event, {
foreignField: "event_id",
ref: "Event",
});

Event.hasMany(Comment, {
foreignField: "event_id",
ref: "Comment",
});

User.hasMany(Comment, {
foreignField: "user",
ref: "Comment",
});

// Export the models
module.exports = { User, Event, Comment };