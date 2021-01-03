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
import DebouncedInputText from "./components/DebouncedInputText";

export default {
  data() {
    return {
      text: "",
      textToPrint: "",
      focused: false,
    };
  },
  components: {
    DebouncedInputText,
  },
  methods: {
    printText(readyText) {
      this.textToPrint = readyText;
    },
    focusText() {
      this.focused = true;
    },
    blurText() {
      this.focused = false;
    },
  },
};
</script>

<style scoped></style>