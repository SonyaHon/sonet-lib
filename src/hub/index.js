const Sonet = require("sonetts");
const SocketIOClient = require("socket.io-client");
const bundler = require("../weback-configs/bundler");
const path = require("path");

class RModule {
  constructor(config) {
    this.config = config;
    this.server = new Sonet.WebapiServer(this.config.server);
    this.socket = null;
    this.app = this.server.getApp();
    this.modules = {};
  }

  async setupApp() {
    this.app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "./vue/index.html"));
    });
    this.app.get(`/bundle.js`, async (req, res) => {
      let contents = await bundler(path.join(__dirname, "./vue/entry.js"), {});
      res.setHeader("Content-Type", "text/javascript");
      res.send(contents);
    });
    this.app.get("/sonet-vue/icofont/icofont.min.css", (req, res) => {
      res.setHeader("Content-Type", "text/css");
      res.sendFile(path.join(__dirname, "../sonet-vue/icofont/icofont.css"));
    });
    this.app.get("/sonet-vue/icofont/fonts/icofont.woff", (req, res) => {
      res.sendFile(path.join(__dirname, "../sonet-vue/icofont/fonts/icofont.woff"));
    });
    this.app.get("/sonet-vue/icofont/fonts/icofont.woff2", (req, res) => {
      res.sendFile(path.join(__dirname, "../sonet-vue/icofont/fonts/icofont.woff2"));
    });
  }

  mapModules() {
    let res = [];
    for (const key in this.modules) {
      res.push({
        ...this.modules[key].initInfo
      });
    }
    return res;
  }

  async setupServer() {
    this.server.on("module-init", (initInfo) => {
      try {
        if (!initInfo.selfHost || !initInfo.name || !initInfo.description) {
          console.error("Connection broke, on info");
          return false;
        }
        this.modules[initInfo.name] = {
          initInfo,
          api: new Sonet.WebapiClient(SocketIOClient(initInfo.selfHost)),
        };
        this.server.broadcast("service-update", () => {
          return this.mapModules();
        });
        this.server.on("initial-update", () => {
          return this.mapModules();
        });
        console.log("Connection success:", initInfo.name);
        return true;
      } catch (e) {
        console.error("Connection broke:", e.message);
        return false;
      }
    });
  }

  async start() {
    await this.setupApp();
    await this.setupServer();
    await this.server.listen();
    console.log("Hub started");
  }
}

module.exports = RModule;
