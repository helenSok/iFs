<template>
<div>
  <h1>This is {{element.name }}</h1>
  <h2> {{ element }} </h2>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FaceElement',
  data: () => ({
    
  }),
  props: ['element'],
  mounted () {
    this.getFaceParam()
  },
  computed: {
    ...mapState({
      face_param: state => state.face_elements.face_param
    })
  },
  methods: {
    ...mapActions('face_elements', ['getFaceParam'])
  }
}
</script>