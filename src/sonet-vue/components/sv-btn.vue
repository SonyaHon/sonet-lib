<template>
    <div @click="onClick" :class="className">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name:     "sv-btn",
    props:    {
      disabled: {
        default: false,
        type:    Boolean,
      },
      to:       {
        default: null,
        type:    String,
      },
      color:    {
        default: "default",
        type:    String,
      }
    },
    computed: {
      className() {
        let base = this.disabled ? "sv-btn sv-btn-disabled" : "sv-btn";
        return base += ` color-${this.color}`;
      }
    },
    methods:  {
      onClick(e) {
        e.stopPropagation();
        if (this.to && !this.disabled && this.$router) {
          this.$router.push(this.to);
        }
        if (!this.disabled) {
          this.$emit("click");
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "../index";

    .sv-btn {
        display:         flex;
        justify-content: center;
        align-items:     center;
        padding:         4px 8px;
        width:           118px;
        height:          36px;
        margin:          8px 16px;
        font-size:       14px;
        font-style:      normal;
        cursor:          pointer;
        border-radius:   2px;
        user-select:     none;

        &:active {
            filter: brightness(80%);
        }

        &.sv-btn-disabled:active {
            filter: brightness(100%) !important;
        }
    }


    .color-default {
        color:            $color-default-text;
        background-color: $color-default;
        border:           1px solid $color-default-border;

        &.sv-btn-disabled {
            color:            $color-default-disabled-text !important;
            background-color: $color-default-disabled !important;
            border:           1px solid $color-default-disabled-border !important;
        }
    }

    .color-error {
        color:            $color-error-text;
        background-color: $color-error;
        border:           1px solid $color-error-border;

        &.sv-btn-disabled {
            color:            $color-error-disabled-text !important;
            background-color: $color-error-disabled !important;
            border:           1px solid $color-error-disabled-border !important;
        }
    }

    .color-primary {
        color:            $color-primary-text;
        background-color: $color-primary;
        border:           1px solid $color-primary-border;

        &.sv-btn-disabled {
            color:            $color-primary-disabled-text !important;
            background-color: $color-primary-disabled !important;
            border:           1px solid $color-primary-disabled-border !important;
        }
    }

    .color-warning {
        color:            $color-warning-text;
        background-color: $color-warning;
        border:           1px solid $color-warning-border;

        &.sv-btn-disabled {
            color:            $color-warning-disabled-text !important;
            background-color: $color-warning-disabled !important;
            border:           1px solid $color-warning-disabled-border !important;
        }
    }

    .color-success {
        color:            $color-success-text;
        background-color: $color-success;
        border:           1px solid $color-success-border;

        &.sv-btn-disabled {
            color:            $color-success-disabled-text !important;
            background-color: $color-success-disabled !important;
            border:           1px solid $color-success-disabled-border !important;
        }
    }

    .color-info {
        color:            $color-info-text;
        background-color: $color-info;
        border:           1px solid $color-info-border;

        &.sv-btn-disabled {
            color:            $color-info-disabled-text !important;
            background-color: $color-info-disabled !important;
            border:           1px solid $color-info-disabled-border !important;
        }
    }
</style>
