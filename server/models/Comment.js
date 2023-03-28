const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment_text: {
    type: String,
    required: true,
    minlength: 1,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
},
{ timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;