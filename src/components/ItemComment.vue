<template>
  <div class="comment">
    <div class="comment__line"></div>
    <div v-if="!commentHidden || expand" class="comment__item">
      <div class="comment__avatar">
        <md-avatar class="md-large">
          <img :src="comment.avatar" alt="Photo: avatar">
        </md-avatar>
      </div>
      <div class="comment__content">
        <div class="comment__top">
          <span class="comment__name">{{ comment.name }}</span>
          <span class="comment__date">{{ formattedDate }}</span>
        </div>
        <!-- /.comment__top -->
        <div class="comment__description">{{ comment.text }}</div>
        <div class="comment__bottom">
          <div @click="onDislikeClick" class="comment__icon comment__icon__thumb-down">
            <md-icon>thumb_down</md-icon>
          </div>
          <span class="comment__number" :class="commentNumberClass">{{ comment.likeNumber }}</span>
          <div @click="onLikeClick" class="comment__icon comment__icon__thumb-up">
            <md-icon>thumb_up</md-icon>
          </div>
        </div>
        <!-- /.comment__bottom -->
      </div>
      <!-- /.comment__content -->
    </div>

    <div @click="onVisibleClick" class="comment__hidden" :class="commentHidden">
      <md-button class="md-primary">Открыть комментарий</md-button>
    </div>

  </div>

</template>

<script>

function formatDate(date) {
  let diff = Date.now() - date; // разница в миллисекундах

  if (diff < 60000) {
    return 'только что';
  }

  let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
  if (min < 60) {
    return min + ' минут назад';
  }

  let house = Math.floor(min / 60); // преобразовать разницу в часы
  if (house > 1 && house < 24) {
    return house + ' часов назад';
  }

  let day = Math.floor(house / 24); // преобразовать разницу в дни
  return day + ' дней назад';
}

export default {
  name: "ItemComment",
  data() {
    return {
      expand: false,
      formattedDate: '',
    }
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    commentNumberClass() {
      if (this.comment.likeNumber > 0) {
        return 'comment__number__green'
      }
      if (this.comment.likeNumber < 0) {
        return 'comment__number__red'
      }
      return ''
    },
    commentHidden() {
      if (this.comment.likeNumber < -10 && !this.expand) {
        return 'comment__hidden__active'
      }
      return ''
    }
  },
  methods: {
    onLikeClick() {
      return this.comment.likeNumber += 1
    },
    onDislikeClick() {
      return this.comment.likeNumber -= 1
    },
    onVisibleClick() {
      this.expand = true
    },
  },
  created() {
    let date = this.comment.date
    this.formattedDate = formatDate(date)
    setInterval(() => {
      this.formattedDate = formatDate(date)
    }, 5000)
  }
}
</script>

<style lang="scss">
.comment {
  &__item {
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
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    color: #262D33;
  }

  &__icon {
    cursor: pointer;
  }

  &__number {
    margin: 0 10px;
    color: #939699;

    &__green {
      color: #3DC47E
    }

    &__red {
      color: #FF4F52
    }
  }

  &__hidden {
    margin: 30px 0;
    border: 1px solid #D9DADB;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;

    &__active {
      display: flex;
    }
  }


}
</style>