<template>
  <div class="comment">
    <div class="comment__line"></div>
    <div class="comment__wrapper">
      <div class="comment__avatar">
        <md-avatar class="md-large">
          <img src="../assets/comment-avatar-1.png" alt="Photo: avatar">
        </md-avatar>
      </div>
      <div class="comment__content">
        <div class="comment__top">
          <span class="comment__name">Михаил Степашин</span>
          <span class="comment__date">17 июля, 18:38</span>
        </div>
        <!-- /.comment__top -->
        <div class="comment__description">
          Хочу заметить, что автор этой статьи не написал, что не все могут получить статус
          самозанятого. Этот режим еще не ввели во всех регионах. Но если в вашем регионе есть, то
          поздравляю.
        </div>
        <div class="comment__bottom">
          <div class="comment__icon comment__icon__thumb-up">
            <md-icon>thumb_up</md-icon>
          </div>
          <span class="comment__number">+10</span>
          <div class="comment__icon comment__icon__thumb-down">
            <md-icon>thumb_down</md-icon>
          </div>
        </div>
        <!-- /.comment__bottom -->
      </div>
      <!-- /.comment__content -->
    </div>

  </div>

</template>

<script>
export default {
  name: "ItemComment",
}
</script>

<style lang="scss">
.comment {
  &__wrapper  {
    display: flex;
    align-items: flex-start;
    margin: 30px 0;
  }
  &__line {
    height: 1px;
    background-color: #D9DADB;
  }

  &__avatar {
    margin-right: 15px;
  }

  &__content {
    max-width: 570px;
  }

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__name {
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #262D33;
    margin-right: 10px;
  }

  &__date {
    font-size: 12px;
    line-height: 15px;
    color: #939699;
  }

  &__description {
    font-size: 18px;
    line-height: 30px;
    color: #4B5157;
    margin-bottom: 15px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    color: #262D33;
  }

  &__icon {
    cursor: pointer;
  }

  &__number {
    margin: 0 10px;
  }

}
</style>