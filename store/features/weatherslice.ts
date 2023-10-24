import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type for our state

type WeatherState = {
  maxTemp: Array<number>;
  minTemp: Array<number>;
  cloudCoverage: Array<number>;
  windSpeed: Array<number>;
  sunRise: Array<string>;
  sunSet: Array<string>;
  time: Array<string>;
  weathercode: Array<number>;
  loader: boolean;
  dataloader: boolean;
};

type initialState = {
  value: WeatherState;
};

// Initial state
const initialState = {
  value: {
    maxTemp: [],
    minTemp: [],
    cloudCoverage: [],
    windSpeed: [],
    sunRise: [],
    sunSet: [],
    time: [],
    weathercode: [],
    loader: false,
    dataloader: false,
  } as WeatherState,
} as initialState;

// Actual Slice
export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setMaxTempState(state, action: PayloadAction<Array<number>>) {
      state.value.maxTemp = action.payload;
    },
    setMinTempState(state, action: PayloadAction<Array<number>>) {
      state.value.minTemp = action.payload;
    },
    setCloudCoverageState(state, action: PayloadAction<Array<number>>) {
      state.value.cloudCoverage = action.payload;
    },
    setWindSpeed(state, action: PayloadAction<Array<number>>) {
      state.value.windSpeed = action.payload;
    },
    setSunRise(state, action: PayloadAction<Array<string>>) {
      state.value.sunRise = action.payload;
    },
    setSunSet(state, action: PayloadAction<Array<string>>) {
      state.value.sunSet = action.payload;
    },
    setTime(state, action: PayloadAction<Array<string>>) {
      state.value.time = action.payload;
    },
    setWeatherCode(state, action: PayloadAction<Array<number>>) {
      state.value.weathercode = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.value.loader = action.payload;
    },
    setDataLoader(state, action: PayloadAction<boolean>) {
      state.value.dataloader = action.payload;
    },
  },
});

export const {
  setCloudCoverageState,
  setMaxTempState,
  setMinTempState,
  setSunRise,
  setSunSet,
  setTime,
  setWindSpeed,
  setWeatherCode,
  setLoading,
  setDataLoader,
} = weatherSlice.actions;
export default weatherSlice.reducer;
