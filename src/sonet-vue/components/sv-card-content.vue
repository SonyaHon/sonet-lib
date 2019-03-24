<template>
    <div class="sv-card-content">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "sv-card-content"
  };
</script>

<style lang="scss" scoped>
    @import "../index";

    .sv-card-content {
        width:            calc(100% - 32px - 16px);
        height:           100%;
        padding:          8px;
        box-shadow:       0 3px 15px -5px $color-default-disabled-border;
        background-color: $color-default;
        display:          flex;
        flex-direction:   column;
        border-radius:    2px;
        margin:           1px;
    }
</style>
