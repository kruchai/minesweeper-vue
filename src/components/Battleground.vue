<template>
  <div
    id="battleground"
    class="battleground"
    :style="{
      'grid-template-columns': 'repeat(' + rows + ', 40px)',
      'grid-template-rows': 'repeat(' + columns + ', 40px)'
    }"
  >
    <div
      class="parent-cell"
      v-for="cell in getCountOfCells()"
      :key="cell"
      :data-bomb="Math.random() <= bombsPercentage / 100 ? 'bomb' : ''"
      :data-cell-id="cell"
      ref="cell"
      @keyup.f1="restart"
    >
      <div
        class="child-cell"
        @contextmenu.prevent="isRightClicked($event)"
        @click="isClicked($event)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Battleground",
  data() {
    return {
      msgLost: "Sorry, you lost =(",
      msgWin: "You are winner 😎🥳👊🤩"
    };
  },
  props: {
    rows: Number,
    columns: Number,
    bombsPercentage: Number
  },
  methods: {
    restart() {
      this.$forceUpdate();
    },
    isClicked(event) {
      for (let x = 1; x < this.getCountOfCells(); x++) {
        let minusValue1 = -1,
          minusValue2 = -this.columns,
          minusValue3 = -this.columns + 1,
          minusValue4 = -this.columns - 1,
          plusValue1 = 1,
          plusValue2 = this.columns,
          plusValue3 = this.columns + 1,
          plusValue4 = this.columns - 1;

        let iteration = [
          minusValue1,
          minusValue2,
          minusValue3,
          minusValue4,
          plusValue1,
          plusValue2,
          plusValue3,
          plusValue4
        ];

        if (this.$refs.cell[x].getAttribute("data-bomb") === "bomb") {
          for (let v = 0; v < iteration.length; v++) {
            if (
              this.$refs.cell[x + iteration[v]] &&
              !this.$refs.cell[x + iteration[v]].getAttribute("data-bomb")
            ) {
              if (x >= this.columns + 1 || x <= x - this.columns + 1) {
                this.$refs.cell[x + iteration[v]].setAttribute(
                  "data-bomb",
                  "near-bomb"
                );
              }
            }
          }
        }

        if (!this.$refs.cell[x].getAttribute("data-bomb")) {
          if (!this.$refs.cell[x].children[0].classList.contains("flagged")) {
            this.$refs.cell[x].children[0].classList.add("clicked");
          }
        }
      }

      if (event.target.parentNode.dataset.bomb === "bomb") {
        alert(this.msgLost);
        event.target.parentNode.parentNode.classList.add("show-all");
      }

      if (!event.target.classList.contains("flagged")) {
        event.target.classList.add("clicked");
      }
    },
    isRightClicked(event) {
      event.target.classList.toggle("flagged");
    },
    getCountOfCells(rows = this.rows, columns = this.columns) {
      return rows * columns;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../styles/battleground";
</style>
