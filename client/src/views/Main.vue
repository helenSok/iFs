<template>
  <v-app>
    <v-navigation-drawer width="210" v-model="drawer" app>
      <v-app-bar>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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

    <v-app-bar app>
      <v-app-bar-nav-icon v-if="!drawer" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="pl-2">Тренажер по идентификации личности</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #00b09b !important;
}
.v-toolbar__title {
  color: white;
}
::v-deep .v-btn > .v-btn__content .v-icon {
  color: white !important;
}
</style>

<script>
export default {
  name: "Main",
  components: {},
  props: {
    source: String,
  },
  mounted() {},
  computed: {},
  methods: {},
  data: () => ({
    drawer: null,
  }),
}
</script>
