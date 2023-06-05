import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const googlemapsfordirections_get_directions_json_list = createAsyncThunk(
  "googlemapsfordirections_response_get_Gettingdirections/googlemapsfordirections_get_directions_json_list",
  async payload => {
    const response = await apiService.googlemapsfordirections_get_directions_json_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const googlemapsfordirections_response_get_GettingdirectionsSlice = createSlice(
  {
    name: "googlemapsfordirections_response_get_Gettingdirections",
    initialState,
    reducers: {},
    extraReducers: {
      [googlemapsfordirections_get_directions_json_list.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [googlemapsfordirections_get_directions_json_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [googlemapsfordirections_get_directions_json_list.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  googlemapsfordirections_get_directions_json_list,
  slice: googlemapsfordirections_response_get_GettingdirectionsSlice
}
