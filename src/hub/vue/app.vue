<template>
    <sv-app>
        <sv-app-toolbar>
            <slot name="icon">
                <i class="icofont-cube"></i>
            </slot>
            HUB
        </sv-app-toolbar>
        <sv-app-content>
            <sv-card>
                <sv-card-title>Connected modules</sv-card-title>
                <sv-card-content></sv-card-content>
            </sv-card>
        </sv-app-content>
    </sv-app>
</template>

<script>

  import {WebapiClient} from "sonetts/dist-lib/index.web";
  import SoketIOClient from "socket.io-client";


  export default {
    name: "app",
    data() {
      return {
        connectedServices: {},
      };
    },
    async mounted() {
      this.hubClient = new WebapiClient(SoketIOClient());
      this.connectedServices = await this.hubClient.fire("initial-update");
      console.log(this.connectedServices);
      this.hubClient.on("service-update", (e) => {
        this.connectedServices = e;
        console.log(this.connectedServices);
      });

    }
  };
</script>

<style lang="scss">
</style>
