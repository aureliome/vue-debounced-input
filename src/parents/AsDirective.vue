<template>
  <div>
    <p>
      <input
        type="text"
        v-model="text"
        :placeholder="'Write a word and wait'"
        v-debounced="printText"
        @focus="focusText"
        @blur="blurText"
      />
    </p>
    <p><b>Ready text:</b> {{ textToPrint }}</p>
    <p><b>Input:</b> {{ focused ? "focus" : "blur" }}</p>
  </div>
</template>

<script>
import ParentMixin from "./ParentMixin";
import debounced from "../directives/Debounced";

export default {
  mixins: [ParentMixin],
  directives: {
    debounced,
  },
};
</script>

<style scoped></style>