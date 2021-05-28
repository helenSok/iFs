import axios from "axios"

const api = () => {
  return axios.create({
    baseURL: "http://192.168.0.2:5000",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
}

const get_exercises = async (user_id, exercise_type_id) => {
  let exercises = await api().get(`/v1/api/exercises/settings/users`, {
    params: {
      user_id,
      exercise_type_id,
    },
  })
  return exercises.data
}

const get_exercise_types = async () => {
  let exercise_types = await api().get(`/v1/api/exercise_types`)
  return exercise_types.data
}

export const getAllExerciseTypes = () =>
  api()
    .get(`/v1/api/exercise_types`)
    .then((r) => r.json())

const test = async () =>
  await api()
    .get(`/v1/api/exercise_types`)
    .then((r) => r.data)

export const getAllExercises = async () => {
  //переделано
  return api().get(`/v1/api/exercises/settings/users`)
}

export const getAllParameters = async () => {
  return api().get(`/v1/api/parameters`)
}

export const getRndMaterial = async (setting) => {
  return await api().get("/v1/api/materials/rnd", {
    params: {
      type_id: setting.type_id,
      setting_races: setting.setting_races,
    },
  })
}

export const getMaterialParameters = async (material_id) => {
  return await api().get("/v1/api/material_parameters", {
    params: {
      material_id: material_id,
    },
  })
}

const getExerciseSettings = async () => {
  //todo отправлять actual user_id
  return api().get("/v1/api/exercise_settings")
}

const getParameters = async () => {
  return api().get(`/v1/api/parameters`)
}

const get_parameters = async () => {
  return api().get(`/v1/api/parameters`)
}

export default {
  get_exercises,
  get_exercise_types,
  getAllParameters,
  getAllExercises,
  getExerciseSettings,
  getParameters,
  get_parameters,
  test,
}
// return axios.create({
//   baseURL: "http://192.168.0.2:5000",
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// })
