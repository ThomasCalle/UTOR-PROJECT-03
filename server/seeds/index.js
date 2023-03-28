// Importing the seed data functions
const seedUsers = require("./userData");
const seedEvents = require("./eventData");
const seedComments = require("./commentData");

// Importing the sequelize connection from ../config/connection
const sequelize = require("../config/connection");

// Function to seed all data by calling the three seed functions in sequence
const seedAll = async () => {
    // Syncing the sequelize models and wiping out the tables
  await sequelize.sync({ force: true });
  // Calling each of the seed data functions
  await seedUsers();
  await seedEvents();
  await seedComments();
  // Exiting the process with a successful exit code
  process.exit(0);
};
// Calling the seedAll function to seed the database
seedAll();
