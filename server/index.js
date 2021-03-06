require("dotenv").config();
const { db } = require("./db");
const app = require("./app");
const PORT = process.env.PORT || 8080;

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    app.listen(PORT, () => console.log(`Ready to hairtoss on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

init();
