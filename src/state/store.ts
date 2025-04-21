import {createSlice, configureStore} from "@reduxjs/toolkit";


const slice = createSlice({
  name: 'app',
  initialState: {
    connected: false,
    currentTab: 'home', // 'home', 'location', 'video', 'devices', 'sensors'
    serverData: {
      location: {latitude: 51.184, longitude: 4.42},
      sensors: [],
    },

  },
  reducers: {
    setConnected: (state, action) => {state.connected = action.payload},
    setCurrentTab: (state, action) => {state.currentTab = action.payload},
    setLocation: (state, action) => {
      state.serverData.location = {
        longitude: action.payload.longitude,
        latitude: action.payload.latitude
      }
    },
    setNewState: (state, action) => {state.serverData = action.payload},
  },
});


const store = configureStore({
  reducer: slice.reducer,
})

export default store;

export const {setConnected, setCurrentTab, setLocation, setNewState} = slice.actions;