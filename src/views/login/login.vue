<template>
  <div class="h-100">
    <div class="h-100 row">
      <div class="h-100 col-4 px-0">
        <div
          :style="{ backgroundImage: `url(${photo})` }"
          class="image-container"
        />
      </div>
      <div class="col-8 px-0">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="login-wrapper mx-2 px-2">
            <h1 class="login-title">
              Добро пожаловать в систему управления продажами
              <strong>БРОНЕВ</strong>
            </h1>
            <form action="#">
              <login-form />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
import loginPhoto from "@/assets/login.jpg";

export default {
  name: "TheLoginComponent",
  components: { LoginForm },
  data() {
    return {
      photo: loginPhoto,
    };
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.login-title {
  font-size: 34px;
  color: #576a77;
  font-weight: normal;
  margin-bottom: 25px;
}
.login-wrapper {
  max-width: 60%;
  text-align: left;
}
.login-wrapper label {
  font-size: 16px;
  font-weight: bold;
  color: #b0adad;
}
</style>
