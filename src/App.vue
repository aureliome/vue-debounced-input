<template>
  <div>
    <h1>Vue - Debounced Input Text</h1>
    <div>
      <h2>As Component</h2>
      <AsComponent />
    </div>
    <div>
      <h2>As Directive</h2>
      <AsDirective />
    </div>
  </div>
</template>

<script>
import AsComponent from "./parents/AsComponent";
import AsDirective from "./parents/AsDirective";

export default {
  name: "App",
  components: {
    AsComponent,
    AsDirective,
  },
};
</script>

<style></style>
