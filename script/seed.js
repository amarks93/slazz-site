const {
  db,
  models: { User },
} = require("../server/db");

async function seed() {
  try {
    await db.sync({ force: true });

    console.log("db synced");

    await User.create({
      firstName: "Alexandra",
      lastName: "Marks",
      email: "amarks93@gmail.com",
      password: "Luna",
    });

    console.log("seeded successfully");

    await db.close();

    console.log("database connection closed");
  } catch (error) {
    console.log(error);
  }
}

seed();

module.exports = seed;
