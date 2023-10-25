"use client";
import React from "react";
import Card from "./Card";
import { useAppSelector } from "@/store/store";
import Loader from "./Loader";
const MainPart = () => {
  const maxTemp = useAppSelector((state) => state.weather.value.maxTemp);
  const minTemp = useAppSelector((state) => state.weather.value.minTemp);
  const sunrise = useAppSelector((state) => state.weather.value.sunRise);
  const sunset = useAppSelector((state) => state.weather.value.sunSet);
  const time = useAppSelector((state) => state.weather.value.time);
  const cloudcoverage = useAppSelector(
    (state) => state.weather.value.cloudCoverage
  );
  const windspeed = useAppSelector((state) => state.weather.value.windSpeed);
  const weathercode = useAppSelector(
    (state) => state.weather.value.weathercode
  );
  const dataloader = useAppSelector((state) => state.weather.value.dataloader);

  const datas = [
    {
      maxTemp: maxTemp,
      minTemp: minTemp,
      sunrise: sunrise,
      sunset: sunset,
      time: time,
      cloudcoverage: cloudcoverage,
      windspeed: windspeed,
      weathercode: weathercode,
    },
  ];

  return (
    <>
      {maxTemp.length == 0 ? (
        <div
          className="
        flex
        justify-center
        items-center
        h-[40%]
        font-semibold
        text-white
        text-2xl
        tracking-widest
        mt-[2em]
        text-center
        
        
        "
        >
          Please select City and Country
        </div>
      ) : dataloader ? (
        <Loader classname="inline w-16 h-16 mr-2 mt-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
      ) : (
        <div className=" flex flex-col  sm:flex-row w-full justify-evenly items-center mt-[5em] h-[92vh] sm:h-full">
          <Card
            title="Yesterday"
            maxTemp={datas[0].maxTemp[0]}
            minTemp={datas[0].minTemp[0]}
            sunrise={datas[0].sunrise[0]}
            sunset={datas[0].sunset[0]}
            time={datas[0].time[0]}
            cloudcoverage={datas[0].cloudcoverage[0]}
            windspeed={datas[0].windspeed[0]}
            weathercode={datas[0].weathercode[0]?.toString()}
          />
          <Card
            title="Today"
            maxTemp={datas[0].maxTemp[1]}
            minTemp={datas[0].minTemp[1]}
            sunrise={datas[0].sunrise[1]}
            sunset={datas[0].sunset[1]}
            time={datas[0].time[1]}
            cloudcoverage={datas[0].cloudcoverage[1]}
            windspeed={datas[0].windspeed[1]}
            weathercode={datas[0].weathercode[1]?.toString()}
          />
          <Card
            title="Tomorrow"
            maxTemp={datas[0].maxTemp[2]}
            minTemp={datas[0].minTemp[2]}
            sunrise={datas[0].sunrise[2]}
            sunset={datas[0].sunset[2]}
            time={datas[0].time[2]}
            cloudcoverage={datas[0].cloudcoverage[2]}
            windspeed={datas[0].windspeed[2]}
            weathercode={datas[0].weathercode[2]?.toString()}
          />
        </div>
      )}
    </>
  );
};

export default MainPart;
