<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="5">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Авторизация</v-toolbar-title>
              <v-spacer />
              <v-card-actions class="pr-0">
                <v-btn @click="login" type="submit" class="elevation-2" outlined>Войти</v-btn>
              </v-card-actions>
            </v-toolbar>
            <v-card-text class="px-5">
              <v-form v-on:submit.prevent="login">
                <v-text-field v-model="email" label="Логин" name="login" prepend-icon="mdi-account" type="text"></v-text-field>
                <v-text-field v-model="password" id="password" label="Пароль" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import router from "../router"

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
      router.push({ path: "/main/exercises" })
    },
  },
}
</script>
