import Image from "next/image";
import React from "react";
import cloudy from "../../public/cloudy.png";
import rainy from "../../public/rainy.png";
import sunny from "../../public/sunny.png";

interface CardProps {
  title: string;
  maxTemp: number;
  minTemp: number;
  sunrise: string;
  sunset: string;
  time: string;
  cloudcoverage: number;
  windspeed: number;
  weathercode: string;
}

const weatherCodes: { [key: string]: string } = {
  "0": "Clear sky",
  "1": "Mainly clear",
  "2": "partly cloudy",
  "3": "overcast",
  "45": "Fog and depositing rime fog",
  "48": "Fog and depositing rime fog",
  "51": "Drizzle Light",
  "53": "Drizzle moderate",
  "55": "Drizzle dense intensity",
  "56": "Freezing Drizzle Light and dense intensity",
  "57": "Freezing Drizzle Light and dense intensity",
  "61": "Slight Rain",
  "63": "Moderate Rain",
  "65": "heavy intensity Rain",
  "66": "Light Freezing Rain",
  "67": "heavy intensity Freezing Rain",
  "71": "Slight Snow Fall",
  "73": "Moderate Snow Fall",
  "75": "heavy intensity Snow Fall",
  "77": "Snow grains",
  "80": "Slight Rain showers",
  "81": "Moderate Rain showers",
  "82": "violent Rain showers",
  "85": "Slight Snow showers",
  "86": "Heavy Snow Shower",
  "95": "Thunderstorm Slight or moderate",
  "96": "Thunderstorm with slight hail",
  "99": "Thunderstorm with heavy hail",
};

const Card: React.FC<CardProps> = ({
  title,
  maxTemp,
  minTemp,
  sunrise,
  sunset,
  time,
  cloudcoverage,
  windspeed,
  weathercode,
}) => {
  let weatherCategory;
  if (["0", "1", "2"].includes(weathercode)) {
    weatherCategory = "sunny";
  } else if (
    [
      "3",
      "45",
      "48",
      "51",
      "53",
      "55",
      "56",
      "57",
      "61",
      "63",
      "65",
      "66",
      "67",
    ].includes(weathercode)
  ) {
    weatherCategory = "cloudy";
  } else if (
    [
      "71",
      "73",
      "75",
      "77",
      "80",
      "81",
      "82",
      "85",
      "86",
      "95",
      "96",
      "99",
    ].includes(weathercode)
  ) {
    weatherCategory = "rainy";
  } else {
    weatherCategory = "unknown";
  }

  const src =
    weatherCategory == "sunny"
      ? sunny
      : weatherCategory == "cloudy"
      ? cloudy
      : rainy;

  const iconStyle =
    weatherCategory == "rainy"
      ? "absolute top-[3em] right-[4em] w-[6em] "
      : "absolute top-[2em] right-[3em] text-black w-[8.125em]";
  return (
    <div className="flex flex-col relative w-[20em] h-[20rem]">
      <Image
        className={iconStyle}
        src={src}
        alt="image"
        width={100}
        height={100}
      />

      <div className="w-[15em] h-[15rem] bg-[#24353E] rounded-lg flex flex-col justify-end pl-10 pb-10  place-content-between mt-[4em]">
        <span className="text-xl text-white text-left">{title}</span>
        <span className="text-xl text-white text-left mt-2">{time}</span>
        <span className="text-sm text-white text-left mt-4">
          Wind Speed : {windspeed}
        </span>
        <span className="text-sm text-white text-left mt-4">
          Temp: {maxTemp} &deg;C - {minTemp} &deg;C
        </span>
        <span className="text-sm text-white text-left w-28 mt-2">
          {weatherCategory}
        </span>

        {/* {maxTemp}
        <br />
        {minTemp}
        <br />

        {sunrise}
        <br />

        {sunset}
        <br />

        {time}
        <br />

        {cloudcoverage}
        <br />

        {windspeed}
        <br />

        {weatherCodes[`${weathercode}`]} */}
      </div>
    </div>
  );
};

export default Card;
