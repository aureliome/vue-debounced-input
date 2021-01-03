import debounce from "lodash.debounce";

const _debounced = debounce(function (el, binding, vnode) {
  const typedText = el.value;
  // emit only if typedText is not void and different to last time
  if (typedText !== "") {
    // call parent "ready" method with typedText
    binding.value.bind(vnode.context)(typedText);
  }
}, 1000);

export default {
  update: _debounced
};
