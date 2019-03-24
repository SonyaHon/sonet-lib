const Sonet = require("sonetts");
const SocketIOClient = require("socket.io-client");
const bundler = require("./weback-configs/bundler");
const path = require("path");

class RModule {
  constructor(config) {
    this.config = config;
    this.server = new Sonet.WebapiServer(this.config.server);
    this.hub = null;
    this.socket = null;
    this.app = this.server.getApp();
    this.connectedToHub = false;
  }

  async initiateHubConnection() {
    this.socket = SocketIOClient(this.config.hub.address);
    this.hub = new Sonet.WebapiClient(this.socket);
    let initStatus = await this.hub.fire("module-init", this.config.hub.initInfo);
    if (initStatus) {
      this.connectedToHub = true;
    } else {
      throw new Error("Could not connect to hub");
    }
  }

  // TODO: add production version
  async setupApp() {
    if (this.config.web && this.config.web.mode && this.config.web.htmlFile && this.config.web.bundle) {
      if (this.config.web.mode === "development") {
        this.app.get("/", (req, res) => {
          res.sendFile(this.config.web.htmlFile);
        });
        this.app.get(`/${this.config.web.bundle.filename}`, async (req, res) => {
          let contents = await bundler(this.config.web.bundle.entry, this.config.web.defines);
          res.setHeader("Content-Type", "text/javascript");
          res.send(contents);
        });
      }
    } else {
      this.app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./sonet-vue/404-entry/index.html"));
      });
      this.app.get(`/bundle.js`, async (req, res) => {
        let contents = await bundler(path.join(__dirname, "./sonet-vue/404-entry/entry.js"), {});
        res.setHeader("Content-Type", "text/javascript");
        res.send(contents);
      });
    }
  }

  async start() {
    await this.setupApp();
    await this.server.listen();
    await this.initiateHubConnection();
    console.log("Connected to hub");
  }
}

module.exports = RModule;
