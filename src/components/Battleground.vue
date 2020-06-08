<template>

  <div
    id="battleground"
    class="battleground"
    v-bind:style = "{'grid-template-columns': 'repeat(' + rows +', 40px)', 'grid-template-rows': 'repeat(' + columns +', 40px)' }"
  >
    <div
      class="parent-cell"
      :data-bomb="Math.random() <= bombsPercentage / 100 ? 'bomb' : 'clear'"
      v-for="cell in getCountOfCells()" :key="cell"
    >
      <div class="child-cell" @contextmenu.prevent="isRightClicked($event)" @click="isClicked($event)"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Battleground",
    data() {
      return {
        msgLost: 'Sorry, you lost 💩💩💩',
        msgWin: 'You are winner 😎🥳👊🤩'
      };
    },
    props: {
      rows: Number,
      columns: Number,
      bombsPercentage: Number
    },
    methods: {
      isClicked(event) {
        if (event.target.parentNode.dataset.bomb === 'bomb') {
          alert(this.msgLost);
          event.target.parentNode.parentNode.classList.add('show-all');
        }

        if (!event.target.classList.contains('flagged')) {
          event.target.classList.add('clicked');
        }
      },
      isRightClicked(event) {
        event.target.classList.toggle('flagged');
      },
      getCountOfCells(rows = this.rows, columns = this.columns) {
        return rows * columns;
      }
    },
  };
</script>
