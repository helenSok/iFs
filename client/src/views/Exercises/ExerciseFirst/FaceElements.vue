<template>
<div>
  <v-card>
    <v-card-title class="px-0 py-0">
      <v-toolbar height="45">
        <v-tabs grow>
          <v-tab v-for="(face, i) in face" :key="i" @click = "getId(face)"> <!--Елси делать через метод полоска при перезагрузке пропадает-->
            {{ face.name }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card-title>
  </v-card>
  <face-element :element = "element"/>
</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import FaceElement from './FaceElement.vue'
export default {
  name: 'FaceElements',
  props: {
    source: String,
  },
  data: () => ({
    face_test: [{
          id: 1,
          name: 'Лицо',
          description: '',
          link: '/main/exerciseFirst/element',          
          face_elemet_param: [{
            name: 'Кофигурация лица',
            description: 'Это кф лица',
            desc_param: [{
              name: 'Округлое',
              description: 'Это округлое лицо'
            },
            {
              name: 'Круглое',
              description: 'Это овальное лицо'
            }]
        }]
        },
        {
          id: 2,
          name: 'Лоб',
          description: '',
          link: '/main/exerciseFirst/element',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        }
        ,
        {
          id: 3,
          name: 'Брови',
          description: '',
          link: '',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        },
        {
          id: 4,
          name: 'Глаза',
          description: '',
          link: '',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        },
        {
          id: 5,
          name: 'Нос',
          description: '',
          link: '',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        },
        {
          id: 6,
          name: 'Рот',
          description: '',
          link: '',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        },
        {
          id: 7,
          name: 'Уши',
          description: '',
          link: '',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        },
        {
          id: 8,
          name: 'Подбородок',
          description: '',
          link: '',
          face_elemet_param: [{
            name: 'Контур бровей',
            description: 'Это кф бровь',
            desc_param: [{
              name: 'Прямой',
              description: 'Это округлое лицо'
            },
            {
              name: 'Дугообразный',
              description: 'Это овальное лицо'
            }]
          }]
        }
        ],
        face_id: {}
  }),
  components: {
    FaceElement
  },
  mounted () {
    this.getFace()
    this.getId(this.face_test[0])
  },
  watch: {
    changeId() {

    }
  },
  created() {
    
  },
  computed: {
    ...mapState({
      face: state => state.face_elements.face
    }),
    element() {
      return this.face_id
    }
    /*
    ...mapGetters('face_elements', {
      face: 'getFaceElement'
    })*/
  },
  methods: {
    ...mapActions('face_elements', ['getFace']),
    getId(id) {
      this.face_id = id
    }
  }
}
</script>