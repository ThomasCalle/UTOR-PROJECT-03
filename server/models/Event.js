const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
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

module.exports = Event;