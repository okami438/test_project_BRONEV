<template>
  <div class="login">
    <div class="login-text">
      <p>Для продолжения работы необходимо пройти авторизацию</p>
    </div>
    <span class="line mb-3"></span>
    <div class="w-100">
      <b-button
        block
        variant="outline-primary"
        @click="openLoginForm"
        class="w-75"
      >
        Войти
      </b-button>
    </div>
    <span class="line mt-3"></span>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  methods: {
    openLoginForm() {
      localStorage.token = 'kjhgkj4rhbj4hrjbh45j7g54g745hgjh45fj45gf5g7j4g5f7h4g5j745hg7h45f';
      this.$router.push({name: 'main'})

    },
  },
};
</script>

<style scoped>
.login-text p {
  color: #576a77;
  font-weight: normal;
}

.line {
  background-color: rgba(174, 184, 192, 0.5);
  height: 1px;
  display: block;
}
</style>
