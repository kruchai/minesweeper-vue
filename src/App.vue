<template>
  <div id="app">
    <Header
      logoAlt="Minesweeper"
      appTitle="Minesweeper on VueJS 3 (ßeta)"
      appUri="https://github.com/OlegScout/minesweeper-vue"
    />
    <div class="settings">
      <label for="setRows">Set number of rows</label>
      <input id="setRows" v-model="setNumberOfRows" type="number" placeholder="Set number of rows">
      <label for="setColumns">Set number of columns</label>
      <input id="setColumns" v-model="setNumberOfColumns" type="number" placeholder="Set number of columns">
      <label for="setBombs">Set bombs possibility percentage, %</label>
      <input id="setBombs" v-model="setNumberOfBombs" type="number" placeholder="Set number of bombs">
    </div>

    <Battleground :rows="this.setNumberOfRows" :columns="this.setNumberOfColumns" :bombsPercentage="this.setNumberOfBombs" />

    <!--  Start the game CTA  -->
    <!--    <button class="btn btn-gradient start" @click="loadTheGame()">Start the game</button>-->
    <!--  Restart CTA  -->
    <button class="btn btn-gradient restart" @click="reloadTheGame()">Restart</button>
    <Footer />
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import Battleground from "./components/Battleground.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Battleground,
    Footer
  },
  data() {
    return {
      message: 'Welcome to My Vue.js App',
      status: 'Click on each cell you want',
      setNumberOfBombs: 10,
      setNumberOfRows: 10,
      setNumberOfColumns: 10
    };
  },
  methods: {
    // loadTheGame() {
    //   console.log('Start the game')
    // },
    reloadTheGame() {
      location.reload();
      return false;
    },
  },
};
</script>

<style lang="scss">
  @import "./styles/styles";
</style>
