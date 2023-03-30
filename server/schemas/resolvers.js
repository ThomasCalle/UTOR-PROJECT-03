const { User, Event } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  //queries (GET route equivalent)
  Query: {
    users: async () => {
      return await User.find().populate("event");
    },
    user: async (parent, { id }) => {
      return await User.findById(id);
    },
    events: async () => {
      return await Event.find();
    },
    event: async (parent, { id }) => {
      return await Event.findById(id);
    },
  },

  //mutations (POST, PUT, DELETE route equivalent)
  Mutation: {
    //create a new user
    createUser: async (parent, args) => {
      console.log("create user");
      const user = await User.create(args);
      console.log("1");
      if (!user) {
        console.log("2");
        throw new Error("Something is wrong!");
      }
      console.log("3");
      const token = signToken(user);
      console.log("4");
      return { token, user };
    },

    //validate email and password on login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.checkPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    createEvent: async (parent, args) => {
      console.log(args)
      const event = new Event(args);
      console.log(event)
      await event.save();
      return event;
    },
    updateEvent: async (parent, { id, ...rest }) => {
      return await Event.findByIdAndUpdate(id, rest, { new: true }).populate(
        "user"
      );
    },
    deleteEvent: async (parent, { id }) => {
      await Event.findByIdAndRemove(id);
      return true;
    },
  },
  User: {
    events: async (parent) => {
      return await Event.find({ user_id: parent.id });
    },
  },
  Event: {
    user: async (parent) => {
      return await User.findById(parent.user_id);
    },
  },
};

module.exports = resolvers;

/*
// lets leave this as extra functionality
updateUser: async (parent, { id, ...rest }) => {
  return await User.findByIdAndUpdate(id, rest, { new: true });
},
deleteUser: async (parent, { id }) => {
  await User.findByIdAndRemove(id);
  return true;
},
*/
