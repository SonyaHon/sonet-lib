<template>
    <div class="sv-card">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "sv-card"
  };
</script>

<style lang="scss" scoped>
    @import "../index";

    .sv-card {
        width:          100%;
        height:         100%;
        padding:        16px;
        display:        flex;
        flex-direction: column;
    }
</style>
