<template>
  <div id="comment-new" class="comment-new">
    <div class="comment-new__title">Что вы думаете на этот счет?</div>
    <div class="comment-new__wrapper">
      <md-field>
        <label>Выберите фото для автара</label>
        <md-file @change="handleAvatarUpload" v-model="comment.avatarPath" accept="image/*"></md-file>
      </md-field>
      <md-field :class="emailInvalidClass">
        <label>Введите Email</label>
        <md-input v-model="comment.email" @input="onInputEmail" required></md-input>
        <span class="md-error">Введите корректный email</span>
      </md-field>
      <md-field :class="nameInvalidClass">
        <label>Введите Ваше Имя</label>
        <md-input v-model="comment.name" @input="onInputName" required></md-input>
        <span class="md-error">Имя обязательно для заполнения</span>
      </md-field>
      <md-field :class="textInvalidClass">
        <label>Ваш комментарий</label>
        <md-textarea v-model="comment.text" @input="onInputText" required></md-textarea>
        <span class="md-error">Комментарий обязателен для заполнения</span>
      </md-field>
    </div>
    <md-button @click="onSubmitClick" class="md-raised md-primary">Отправить</md-button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function getDefaultComment() {
  return {
    avatar: null,
    avatarPath: '',
    email: '',
    name: '',
    date: '',
    text: '',
    likeNumber: 0
  }
}

export default {
  name: "NewComment",
  data() {
    return {
      comment: getDefaultComment(),
      isEmailValid: true,
      isNameValid: true,
      isTextValid: true,
    }
  },
  computed: {
    emailInvalidClass() {
      if (!this.isEmailValid) {
        return 'md-invalid'
      }
      return ''
    },
    nameInvalidClass() {
      if (!this.isNameValid) {
        return 'md-invalid'
      }
      return ''
    },
    textInvalidClass() {
      if (!this.isTextValid) {
        return 'md-invalid'
      }
      return ''
    }
  },
  methods: {
    ...mapActions(['ADD_COMMENT']),
    isFormValid() {
      let valid = true
      if (!this.comment.email.match(validEmailRegex)) {
        this.isEmailValid = false
        valid = false
      }
      if (this.comment.name === '') {
        this.isNameValid = false
        valid = false
      }
      if (this.comment.text === '') {
        this.isTextValid = false
        valid = false
      }

      return valid
    },
    onInputEmail() {
      this.isEmailValid = true
    },
    onInputName() {
      this.isNameValid = true
    },
    onInputText() {
      this.isTextValid = true
    },
    onSubmitClick() {
      if (!this.isFormValid()) return
      this.comment.date = Date.now()
      this.ADD_COMMENT(this.comment)
      this.comment = getDefaultComment()
    },
    handleAvatarUpload(e) {
      e.preventDefault()
      const file = e.target.files[0]
      if (file == null) return
      this.comment.avatar = URL.createObjectURL(file)
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