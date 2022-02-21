<template>
  <div id="app" class="app">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Система комментариев</h3>
    </md-toolbar>
    <div class="app__container">
      <CommentItem/>
    </div>
  </div>
</template>

<script>

import CommentItem from "./components/CommentItem";

export default {
  name: 'App',
  components: {CommentItem},
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  font-weight: 400;
  color: #000;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &__container {
    max-width: 750px;
    margin: auto;
  }
}

</style>
