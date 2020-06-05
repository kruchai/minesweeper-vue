<template>
  <div id="column" :class="column">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    value: String
  },
  methods: {
    createBattleground: function (rows, cols) {

    }
  }
};
</script>
