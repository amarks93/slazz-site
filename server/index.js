const PORT = process.env.PORT || 8080;
const app = require("./app");

const init = () => {
  app.listen(PORT, () => console.log(`Ready to hairtoss on port ${PORT}`));
};

init();
