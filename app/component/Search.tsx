"use client";
import React, { useEffect, useState } from "react";
import { countries } from "../../public/countries";
import { useDispatch } from "react-redux";
import {
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
} from "../../store/features/weatherslice";
import { AppDispatch } from "@/store/store";
import { useAppSelector } from "@/store/store";
import Loader from "./Loader";
import axios from "../api/httpsagent";

const CountryDropdown: React.FC = () => {
  const [countrycode, setcountrycode] = useState<string>("AF");
  const [citieslist, setcitieslist] = useState<string[]>([]);
  const loading = useAppSelector((state) => state.weather.value.loader);
  const dispatch = useDispatch<AppDispatch>();
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = e.target.value;
    setcountrycode(selectedCountryCode);
    console.log(selectedCountryCode);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target.value;
    getWeatherByCity(selectedCity);
  };

  const getWeatherByCity = async (cityname: string): Promise<string[]> => {
    dispatch(setDataLoader(true));
    try {
      const response = await axios.get(
        `https://secure.geonames.org/searchJSON?q=${cityname}&maxRows=1&username=mamoro`
      );
      const citydata: string[] =
        response.data?.geonames?.map((city: any) => [city.lat, city.lng]) ?? [];
      const lat = citydata[0][0];
      const lon = citydata[0][1];
      try {
        const r = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=GMT&past_days=1&forecast_days=3`
        );
        console.log(r);
        dispatch(setMaxTempState(r?.data.daily.temperature_2m_max));
        dispatch(setMinTempState(r?.data.daily.temperature_2m_min));
        dispatch(setCloudCoverageState(r?.data.daily.temperature_2m_max));
        dispatch(setSunRise(r?.data.daily.sunrise));
        dispatch(setSunSet(r?.data.daily.sunset));
        dispatch(setTime(r?.data.daily.time));
        dispatch(setWindSpeed(r?.data.daily.windspeed_10m_max));
        dispatch(setWeatherCode(r?.data.daily.weathercode));
        dispatch(setDataLoader(false));
        return citydata;
      } catch (error: any) {
        console.error("Error:", error.message);
        dispatch(setDataLoader(false));
        throw error;
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      dispatch(setDataLoader(false));
      throw error;
    }
  };

  const getCityListByCountryCode = async (
    countryCode: string
  ): Promise<string[]> => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get(
        `https://secure.geonames.org/searchJSON?country=${countryCode}&username=mamoro`
      );
      const cityList: string[] =
        response.data?.geonames?.map((city: any) => city.name) ?? [];
      setcitieslist(cityList);
      dispatch(setLoading(false));

      return cityList;
    } catch (error: any) {
      console.error("Error:", error.message);
      dispatch(setLoading(false));
      throw error;
    }
  };

  useEffect(() => {
    getCityListByCountryCode(countrycode);

    return () => {};
  }, [countrycode]);

  return (
    <div className="flex flex-col mt-0 items-center w-[100%] sm:w-full sm:flex-row justify-between">
      <select
        className="border rounded py-2 px-3 text-black"
        onChange={handleCountryChange}
      >
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.code}
            className="text-black"
          >
            {country.name}
          </option>
        ))}
      </select>
      {loading ? (
        <Loader classname="inline w-12 h-12 mr-28 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      ) : (
        <select
          className="border rounded py-2 px-3 text-black mt-6 sm:mt-0"
          onChange={handleCityChange}
        >
          {citieslist.map((city, index) => (
            <option key={index} value={city} className="text-black">
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountryDropdown;
