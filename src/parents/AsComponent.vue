<template>
  <div>
    <p>
      <DebouncedInputText
        v-model="text"
        :placeholder="'Write a word and wait'"
        @ready="printText"
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
import DebouncedInputText from "../components/DebouncedInputText";

export default {
  mixins: [ParentMixin],
  components: {
    DebouncedInputText,
  },
};
</script>

<style scoped></style>