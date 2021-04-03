<template>
  <v-container grid-list-xs>
    <v-card>
    <v-card-title class="px-0 py-0">
      <v-toolbar height="45">
        <v-tabs grow>
          <v-tab> <!--Елси делать через метод полоска при перезагрузке пропадает-->
            Фото
          </v-tab>
          <v-tab> <!--Елси делать через метод полоска при перезагрузке пропадает-->
            3D Фото
          </v-tab>
          <v-tab> <!--Елси делать через метод полоска при перезагрузке пропадает-->
            Видео
          </v-tab>
          <v-tab> <!--Елси делать через метод полоска при перезагрузке пропадает-->
            Описание внешности
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card-title>
  </v-card>
  <v-card>
      <v-data-table
          :headers="headers"
          :items="subjects"
          :search="search"
          sort-by="calories"
          class="elevation-1"
          @click:row="goToTheme"
          :footer-props="footer_props"
        >
          
          <template v-slot:no-data>
            <v-btn color="primary">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'Results',
  components: {

  },
  props: {
  },
  mounted () {

  },
  computed: {

  },
  methods: {

  },
  data: () => ({

  }),
};
</script>