const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
  },
  cost:{
    type: Number,
  },
  location: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  date: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);

// Define the relationships between the models
Event.schema.path('attendees').validate(function (value) {
return value.length <= 50; // Set the maximum number of attendees for an event to 50
}, 'The number of attendees for an event cannot exceed 50.');

Event.schema.path('date').validate(function (value) {
const currentDate = new Date();
return value > currentDate; // Set the date for an event to be in the future
}, 'The date for an event must be in the future.');

module.exports = Event;