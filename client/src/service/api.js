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

export const getAllExercises = async (user_id) => {
  return api().get(`/v1/api/exercises/settings/users/${user_id}`)
}

export const getAllParameters = async () => {
  return api().get(`/v1/api/parameters`)
}

export const getAllExerciseTypes = async () => {
  const test = api().get(`/v1/api/exercise_types`)
  return test
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

export default { getAllParameters, getAllExercises, getExerciseSettings, getParameters, get_parameters }
// return axios.create({
//   baseURL: "http://192.168.0.2:5000",
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// })
