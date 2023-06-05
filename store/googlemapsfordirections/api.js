import axios from "axios"
const googlemapsfordirections = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function googlemapsfordirections_get_directions_json_list(payload) {
  return googlemapsfordirections.get(`/directions/json`, {
    params: {
      origin: payload.origin,
      destination: payload.destination,
      key: payload.key
    }
  })
}
export const apiService = { googlemapsfordirections_get_directions_json_list }
