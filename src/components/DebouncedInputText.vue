<template>
  <input :value="text" v-bind="$attrs" type="text" v-on="inputListeners" />
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "DebouncedInputText",
  model: {
    prop: "text",
    event: "change-text",
  },
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      lastTypedText: "",
    };
  },
  computed: {
    inputListeners() {
      const vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input(event) {
            vm.$emit("change-text", event.target.value);
          },
        }
      );
    },
  },
  watch: {
    text: debounce(function (typedText) {
      // emit only if typedText is not void and different to last time
      if (typedText !== "" && typedText !== this.lastTypedText) {
        // save lastTypedText to avoid to repeat same call
        this.lastTypedText = typedText;
        // call parent "ready" method with typedText
        this.$emit("ready", typedText);
      }
    }, 1000),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
