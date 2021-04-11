<template>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "app-navbar",
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
