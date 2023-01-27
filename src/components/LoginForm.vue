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
      window.name = "parent";
      const loginWin = window.open(
        process.env.VUE_APP_LOGIN_API,
        "loginForm",
        "width=650,height=450"
      );
      loginWin.moveBy(0, 275);
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
