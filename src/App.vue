<template>
  <div id="app">
    <Header
      logoAlt="Minesweeper"
      appTitle="Minesweeper on VueJS 3"
      appUri="https://github.com/OlegScout/minesweeper-vue"
    />
    <Message msg="Welcome to My Vue.js App" status="Work In Progress ...." />
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
import Header from "./components/Header.vue";
import Message from "./components/Message.vue";

export default {
  name: "App",
  components: {
    Header,
    Message
  }
};
</script>

<style lang="scss">
  @import "./styles/styles";
</style>
