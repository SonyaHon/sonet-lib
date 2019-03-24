<template>
    <div class="sv-app-toolbar">
        <div class="sv-app-toolbar__title">
            <slot name="icon"></slot>
            <slot></slot>
        </div>
        <sv-spacer v-if="!withSearch"></sv-spacer>
        <div class="sv-app-toolbar__controls">
            <slot name="controls"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name:  "sv-app-toolbar",
    props: ["withSearch"]
  };
</script>

<style lang="scss" scoped>
    @import "../index.scss";

    .sv-app-toolbar {
        width:       100%;
        height:      59px;
        display:     flex;
        align-items: center;
        box-shadow:  0 3px 15px -5px $color-default-disabled-border;
        z-index:     999;
    }

    .sv-app-toolbar__title {
        font-style:  normal;
        font-size:   24px;
        font-weight: normal;
        margin-left: 16px;
        display:     flex;
        align-items: center;

        & i {
            margin-right: 8px;
        }
    }

    .sv-app-toolbar__controls {
        margin-right: 16px;
    }
</style>
