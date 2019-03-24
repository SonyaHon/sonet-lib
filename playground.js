const RModule = require("./src/r-module");
const Hub = require("./src/hub");
const Sonet = require("sonetts");
const fs = require("fs-extra");
const path = require("path");

const cfg = {
  server:   {
    port:         8889,
    socketIOPath: "/socket.io"
  },
  hub:      {
    address:  "http://127.0.0.1:8888",
    initInfo: {
      name:        "test",
      description: "Some description of module",
      status:      "ok",
      selfHost:    "http://localhost:8889"
    }
  },
  web:      {
    mode:     "development",
    defines:  {},
    bundle:   {
      entry:    path.join(__dirname, "./vue-lib-entry/entry.js"),
      filename: "bundle.js"
    },
    htmlFile: path.join(__dirname, "./src/weback-configs/index.html"),
  },
  security: {},
};

(async () => {
  const hub = new Hub({
    server: {
      port:         8888,
      socketIOPath: "/socket.io"
    }
  });
  await hub.start();
  let md = new RModule(cfg);
  await md.start();
})();

