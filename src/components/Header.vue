<template>
  <div class="header">
    <img src="../assets/logo.png" :alt="logoAlt">
    <div>
      <a :href="appUri" target="_blank">
        {{ appTitle }}
      </a>
    </div>
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
    }
  };
</script>



