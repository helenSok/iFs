<template>
  <v-navigation-drawer width="210" v-model="get_drawer_icon" app>
    <v-app-bar>
      <app-nav-icon v-if="get_drawer_icon" />
      <v-toolbar-title class="pl-2">Визит-КТ</v-toolbar-title>
    </v-app-bar>
    <v-list>
      <v-list-item link :to="{ path: '/main/exercises' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{ path: '/main/users' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-account-box</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Профиль</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{ path: '/main/results' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-chart-histogram</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Результаты</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item link :to="{ path: '/main/materials' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-image-multiple</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Материалы</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{ path: '/main/settings' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Настройки</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link :to="{ path: '/main/events' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>События</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item link :to="{ path: '/main/events' }">
        <v-list-item-action class="mr-6">
          <v-icon>mdi-school</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Обучение</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import AppNavIcon from "./app-nav-icon.vue"
import { mapGetters } from "vuex"

export default {
  name: "app-navbar",
  components: { AppNavIcon },
  props: {
    source: String,
  },
  mounted() {},
  computed: {
    ...mapGetters("app", ["drawer_icon"]),
    get_drawer_icon: {
      get() {
        return this.drawer_icon
      },
      set(value) {
        return value
      },
    },
  },
  methods: {},
}
</script>
