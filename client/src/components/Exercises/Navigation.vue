<template>
  <div>
    <v-card>
      <v-card-title class="px-0 py-0">
        <v-toolbar height="45">
          <v-tabs grow>
            <v-tab v-for="(face, i) in face" :key="i" @click="getElement(face)">
              <!--Елси делать через метод полоска при перезагрузке пропадает-->
              {{ face.attributes.element_name }}
            </v-tab>
          </v-tabs>
        </v-toolbar>
      </v-card-title>
    </v-card>
    <Element :element="element" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Element from "./Element.vue"
export default {
  name: "Navigation",
  props: {
    source: String,
  },
  data: () => ({
    face_element: {
      relationships: {
        face_elements: {
          data: [],
        },
      },
    },
  }),
  components: {
    Element,
  },
  mounted() {
    this.getFace()
  },
  watch: {
    face() {
      this.face_element = this.face[0]
    },
  },
  created() {},
  computed: {
    ...mapState({
      face: (state) => state.face_elements.face,
    }),
    element() {
      return this.face_element
    },
    /*
    ...mapGetters('face_elements', {
      face: 'getFaceElement'
    })*/
  },
  methods: {
    ...mapActions("face_elements", ["getFace"]),
    getElement(element) {
      this.face_element = element
    },
  },
}
</script>
