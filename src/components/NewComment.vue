<template>
  <div id="comment-new" class="comment-new">
    <div class="comment-new__title">Что вы думаете на этот счет?</div>
    <div class="comment-new__wrapper">
      <md-field :class="messageError">
        <label>Выберите фото для автара</label>
        <md-file v-model="avatar" accept="image/*"/>
      </md-field>
      <md-field :class="messageError">
        <label>Введите Email</label>
        <md-input v-model="email" required></md-input>
        <span class="md-error">Введите корректный email</span>
      </md-field>
      <md-field :class="messageError">
        <label>Введите Ваше Имя</label>
        <md-input v-model="name" required></md-input>
        <span class="md-error">Имя обязательно для заполнения</span>
      </md-field>
      <md-field :class="messageError">
        <label>Ваш комментарий</label>
        <md-textarea v-model="textarea" required></md-textarea>
        <span class="md-error">Комментарий обязателен для заполнения</span>
      </md-field>
    </div>
    <md-button @click="onSubmitClick" class="md-raised md-primary">Отправить</md-button>
  </div>
</template>

<script>
export default {
  name: "NewComment",
  data() {
    return {
      avatar: null,
      email: '',
      name: '',
      textarea: '',
      valid: false
    }
  },
  computed: {
    // messageError() {
    //   return {'md-invalid': this.valid}
    // }
  },
  methods: {
    onSubmitClick() {
      // this.valid = true
    }
  }
}
</script>

<style lang="scss">
.comment-new {
  background-color: #F5F5F5;
  border-radius: 10px;
  padding: 40px 60px;

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
  }

  &__wrapper {
    background-color: #ffffff;
    padding: 20px;
  }
}
</style>