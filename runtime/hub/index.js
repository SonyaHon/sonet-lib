const HUB = require("../../src/hub");
const config = require("./config.json");

const hub = new HUB(config);
(async () => {
  await hub.start();
})();
