<template>
  <div>
    <v-img contain max-height="320" max-width="240" :src="pathPhoto"></v-img>
    <div v-for="(felement, i) in element.relationships.face_elements.data" :key="i">
      <h2 class="mt-2 pb-2">{{ getFaceElement(felement.id).attributes.param_name }}</h2>
      <div v-for="(fparam, id) in getFaceElement(felement.id).relationships.face_params.data" :key="id">
        <v-checkbox v-model="fparam.check" :label="`${getFaceParam(fparam.id).attributes.value_name}`" @click="setAnswer(felement, fparam)" class="mt-0 pt-0"> </v-checkbox>
      </div>
    </div>
    <form @submit.prevent="submitFile" enctype="multipart/form-data">
      <input type="file" ref="file" @change="handlerFileUpload" />
      <input type="submit" />
    </form>
    {{ currentBall }}
    {{ answer }}
    <v-btn @click="setResult"></v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import api from "../../service/api"
export default {
  name: "Element",
  data: () => ({
    answer: [],
    currentBall: 0,
    selectedFile: null,
  }),
  props: ["element"],
  mounted() {
    this.getMaterials("exercise_one")
  },
  computed: {
    ...mapState({
      face_param: (state) => state.face_elements.face_param,
      face_element: (state) => state.face_elements.face_element,
      photo: (state) => state.material.photos,
    }),
    pathPhoto() {
      return this.photo.map((t) => t.attributes.value)[0]
    },
  },
  watch: {},
  methods: {
    handlerFileUpload(event) {
      this.selectedFile = event.target.files[0]
    },
    submitFile() {
      let formData = new FormData()
      formData.append("avatar", this.selectedFile, this.selectedFile.name)
      api()
        .post("/material/materials", formData)
        .then((res) => {
          console.log(res)
        })
        .catch(function() {
          console.log("Failure")
        })
    },
    ...mapActions("material", ["getMaterials"]),
    setResult() {
      this.currentBall = 0
      this.answer.forEach((element) => {
        if (this.photo.map((i) => i.relationships.photo_params.data)[0].find((e) => e.id == element.id)) {
          this.currentBall++
        }
      })
    },
    getFaceParam(id) {
      let face_param = this.face_param.find((t) => t.id == id)
      return face_param
    },
    getFaceElement(id) {
      let elements = this.face_element.find((t) => t.id == id)
      return elements
    },
    setAnswer(element, param) {
      let setElement = this.getFaceElement(element.id)

      if (this.answer[0] == null) {
        this.answer.push(param)
        return
      }
      if (this.answer.find((t) => t.id == param.id)) {
        this.answer.splice(
          this.answer.findIndex((t) => t.id == param.id),
          1
        )
        return
      }
      if (this.answer[0] != null) {
        this.answer.forEach((ans) => {
          if (setElement.relationships.face_params.data.find((t) => t.id == ans.id)) {
            this.answer.splice(
              this.answer.findIndex((t) => t.id == ans.id),
              1
            )
            this.getFaceElement(element.id).relationships.face_params.data.forEach((e) => (e.check = false))
          }
        })
        this.getFaceElement(element.id).relationships.face_params.data.find((t) => t.id == param.id).check = true
        this.answer.push(param)
      }
    },
  },
}
</script>
