<template>
  <div id="app" class="app">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Система комментариев</h3>
    </md-toolbar>
    <div class="app__container">
      <div class="app__top">
        <h1 class="app__title">Комментарии</h1>
        <md-button href="#comment-new" class="md-primary">Добавить комментарий</md-button>
      </div>
      <CommentItem v-for="(comment, index) in GET_COMMENTS" :key="index" :comment="comment"/>
      <NewComment/>
    </div>
  </div>
</template>

<script>

import CommentItem from "./components/ItemComment";
import NewComment from "@/components/NewComment";
import {mapGetters} from "vuex";

export default {
  name: 'App',
  components: {NewComment, CommentItem},
  computed: {
    ...mapGetters(['GET_COMMENTS'])
  }
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
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
  }
  &__title {
    font-weight: 700;
    font-size: 35px;
    line-height: 50px;
    color: #262D33;
  }
}

</style>
