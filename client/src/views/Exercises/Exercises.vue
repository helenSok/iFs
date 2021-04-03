<template>
  <v-row>
    <v-col cols="12" sm="8" md="12">
        <exercise-card/>
    </v-col>
  </v-row>
</template>

<script>
import ExerciseCard from '@/components/Exercises/ExerciseCard'

export default {
  name: 'Exercises',
  components: {
    ExerciseCard
  },
  props: {
  },
  mounted () {

  },
  computed: {
    getName() {
      return 'Yes'
    }
  },
  methods: {

  },
  data: () => ({

  }),
};
</script>