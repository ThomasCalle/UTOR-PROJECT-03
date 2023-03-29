const { User, Event } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
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
  Mutation: {
    createUser: async (parent, args) => {
      const user = new User(args);
      await user.save();
      return user;
    },
    updateUser: async (parent, { id, ...rest }) => {
      return await User.findByIdAndUpdate(id, rest, { new: true });
    },
    deleteUser: async (parent, { id }) => {
      await User.findByIdAndRemove(id);
      return true;
    },
    createEvent: async (parent, args) => {
      const event = new Event(args);
      await event.save();
      return event;
    },
    updateEvent: async (parent, { id, ...rest }) => {
      return await Event.findByIdAndUpdate(id, rest, { new: true });
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