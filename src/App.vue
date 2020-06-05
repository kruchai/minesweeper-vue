<template>
  <div id="app">
    <Header
      logoAlt="Minesweeper"
      appTitle="Minesweeper on VueJS 3"
      appUri="https://github.com/OlegScout/minesweeper-vue"
    />
    <Message :msg="message" :status="status" />
<!--    <Battleground />-->
      <div class="settings">
        <label for="setRows">Set number of rows</label>
        <input id="setRows" v-model="setNumberOfRows" type="number" placeholder="Set number of rows">
        <label for="setColumns">Set number of columns</label>
        <input id="setColumns" v-model="setNumberOfColumns" type="number" placeholder="Set number of columns">
        <label for="setBombs">Set bombs possibility percentage, %</label>
        <input id="setBombs" v-model="setNumberOfBombs" type="number" placeholder="Set number of bombs">
      </div>

    <div
      id="battleground"
      class="battleground"
      v-bind:style = "{'grid-template-columns': 'repeat(' + this.setNumberOfRows +', 40px)', 'grid-template-rows': 'repeat(' + this.setNumberOfColumns +', 40px)' }"
      >
      <div
        class="parent-cell"
        :data-bomb="Math.random() <= setNumberOfBombs / 100 ? 'bomb' : ''"
        v-for="cell in getCountOfCells()" :key="cell"
      >
        <div class="child-cell" @click="clicked($event)"></div>
      </div>

    </div>
    <button class="restart" @click="reloadTheGame()">Restart</button>
    <Footer />
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import Message from "./components/Message.vue";
// import Battleground from "./components/Battleground.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Message,
    // Battleground,
    Footer,
  },
  data() {
    return {
      message: 'Welcome to My Vue.js App',
      status: 'Click on each cell you want',
      setNumberOfBombs: 10,
      setNumberOfRows: 10,
      setNumberOfColumns: 10,
    };
  },
  methods: {
    clicked(event) {
      event.target.classList.add('clicked');
      console.log(event);

      if (event.path[1].dataset.bomb === 'bomb') {
        alert('Sorry, you lost =(');
        event.path[2].classList.add('show-all');
      }
    },
    getCountOfCells(rows = this.setNumberOfRows, columns = this.setNumberOfColumns) {
      return rows * columns;
    },
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
