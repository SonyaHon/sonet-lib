<template>
    <div class="sv-app">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "sv-app"
  };
</script>

<style lang="scss">
    @import "../index";

    body, html {
        width:       100vw;
        height:      100vh;
        padding:     0;
        margin:      0;
        overflow-x:  hidden;

        font-family: "Roboto", serif;
        font-weight: 300;
    }

    .sv-app {
        width:            100%;
        height:           100%;
        display:          flex;
        flex-direction:   column;
        justify-content:  center;
        align-items:      center;
        background-color: $color-default;
    }

</style>
