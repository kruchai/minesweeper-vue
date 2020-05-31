<template>
  <div class="message">
    <h1>{{ msg }}</h1>
    <h4>{{ status }}</h4>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: String,
    status: String
  }
};
</script>
