<template>
    <div class="sv-app-content">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "sv-app-content"
  };
</script>

<style lang="scss" scoped>
    @import "../index";

    .sv-app-content {
        width:            calc(100vw - 32px);
        height:           100%;
        display:          flex;
        flex-direction:   column;
        padding:          16px;
        background-color: $color-default-disabled;
        position:         relative;
    }
</style>
