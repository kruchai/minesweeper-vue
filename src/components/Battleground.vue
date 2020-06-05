<template>

  <div
    id="battleground"
    class="battleground"
    v-bind:style = "{'grid-template-columns': 'repeat(' + rows +', 40px)', 'grid-template-rows': 'repeat(' + columns +', 40px)' }"
  >
    <div
      class="parent-cell"
      :data-bomb="Math.random() <= bombsPercentage / 100 ? 'bomb' : ''"
      v-for="cell in getCountOfCells()" :key="cell"
    >
      <div class="child-cell" @click="clicked($event)"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Battleground",
    data() {
      return {
        msgLost: 'Sorry, you lost'
      };
    },
    props: {
      rows: Number,
      columns: Number,
      bombsPercentage: Number
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
      getCountOfCells(rows = this.rows, columns = this.columns) {
        return rows * columns;
      }
    },
  };
</script>
