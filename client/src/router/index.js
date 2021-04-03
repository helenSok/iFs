import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Exercises from '../views/Exercises/Exercises.vue'
import Users from '../views/Users.vue'
import Settings from '../views/Settings.vue'
import Results from '../views/Results.vue'
import Events from '../views/Events.vue'
import FaceElements from '../views/Exercises/ExerciseFirst/FaceElements.vue'
import FaceElement from '../views/Exercises/ExerciseFirst/FaceElement.vue'
import Navigation from '../components/Exercises/Navigation.vue'
import Materials from '../views/Materials.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [{
      path: 'exercises',
      component: Exercises
    },
    {
      path: 'exercise/one',
      component: Navigation
    },
    {
      path: 'exerciseFirst',
      component: FaceElements,
      children: [{
        path: 'element',
        component: FaceElement
      }]
    },
    {
      path: 'users',
      component: Users
    },
    {
      path: 'settings',
      component: Settings
    },
    {
      path: 'materials',
      component: Materials
    },
    {
      path: 'results',
      component: Results
    },
    {
      path: 'events',
      component: Events
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
