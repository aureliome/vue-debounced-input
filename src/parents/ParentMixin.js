export default {
  data() {
    return {
      text: "",
      textToPrint: "",
      focused: false
    };
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
    }
  }
};
