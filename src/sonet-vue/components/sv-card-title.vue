<template>
    <div class="sv-card-title">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "sv-card-title"
  };
</script>

<style scoped>
    .sv-card-title {
        display:       flex;
        width:         100%;
        height:        1em;
        margin-bottom: 8px;
        padding-left:  8px;
    }
</style>
