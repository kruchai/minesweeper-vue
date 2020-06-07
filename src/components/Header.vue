<template>
  <div class="header">
    <img class="logo" src="../assets/logo.png" :alt="logoAlt" />
    <a class="title" :href="appUri" target="_blank">
      {{ appTitle }}
    </a>
    <img class="img" src="../assets/settings.svg" alt="Settings" @click.prevent="showPanel" />
    <a class="rules" href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)" target="_blank">
      <img class="img" src="../assets/info.svg" alt="Info" />
    </a>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    logoPath: String,
    logoAlt: String,
    appTitle: String,
    appUri: String
  },
  methods: {
    showPanel() {
      let settings = document.querySelector('.settings');
      settings.classList.toggle('show-settings');
    }
  }
};
</script>
