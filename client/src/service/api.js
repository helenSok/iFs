import axios from "axios"

const api = () => {
  return axios.create({
    baseURL: "http://192.168.0.5:5000",
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

export default () => {
  return axios.create({
    baseURL: "http://192.168.0.5:5000",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
}
