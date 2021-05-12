import Vue from "vue"
import VueRouter from "vue-router"

import AuthPage from "../pages/auth-page.vue"
// import AppPage from "../pages/app-page.vue"
import ExercisePage from "../pages/exercise-page.vue"
import ExerciseFirst from "../pages/exercise-first.vue"

// // import Main from "../views/Main.vue"
// // import Exercises from "../views/Exercises/Exercises.vue"
// import Users from "../views/Users.vue"
// import Settings from "../views/Settings.vue"
// import Results from "../views/Results.vue"
// import Events from "../views/Events.vue"
// import FaceElements from "../views/Exercises/ExerciseFirst/FaceElements.vue"
// import FaceElement from "../views/Exercises/ExerciseFirst/FaceElement.vue"
// // import Navigation from "../components/Exercises/Navigation.vue"
// import Materials from "../views/Materials.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "auth-page",
    component: AuthPage,
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/main/exercises",
    name: "exercise-page",
    component: ExercisePage,
  },
  {
    path: "/exercise/1",
    name: "exercise-first",
    component: ExerciseFirst,
  },
]

// const routes = [
//   {
//     path: "/",
//     name: "AuthPage",
//     component: AuthPage,
//     meta: {
//       layout: "auth-layout",
//     },
//   },
//   {
//     path: "/main",
//     name: "AppPage",
//     component: AppPage,
//     children: [
//       {
//         path: "exercises",
//         component: ExercisePage,
//       },
//       {
//         path: "exercise/one",
//         component: ExerciseFirst,
//       },
//       {
//         path: "exerciseFirst",
//         component: FaceElements,
//         children: [
//           {
//             path: "element",
//             component: FaceElement,
//           },
//         ],
//       },
//       {
//         path: "users",
//         component: Users,
//       },
//       {
//         path: "settings",
//         component: Settings,
//       },
//       {
//         path: "materials",
//         component: Materials,
//       },
//       {
//         path: "results",
//         component: Results,
//       },
//       {
//         path: "events",
//         component: Events,
//       },
//     ],
//   },
// ]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
