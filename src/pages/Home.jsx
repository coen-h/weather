import { useEffect, useState } from "react";
import Main from "../components/Main";
import Timeline from "../components/Timeline";
import Week from "../components/Week";
import Chart from "../components/Chart";

export default function Home() {
  const [weather, setWeather] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&hourly=temperature_2m,relative_humidity_2m,weather_code,windspeed_10m,pressure_msl"
        );
        const data = await response.json();
        setWeather(data.hourly);
        console.log(data);
      };
      fetchData();
    }, []);

  return (
    <div className="w-screen h-screen p-6">
      <div className="flex w-full h-full bg-slate-200 drop-shadow-md rounded-lg">
        <Main weather={weather} />
        <div className="flex flex-col">
          <Timeline weather={weather} />
          <Chart weather={weather} />
        </div>
        <Week weather={weather} />
      </div>
    </div>
  );
}
{/* https://open-meteo.com/en/docs */}
{/* https://www.creative-tim.com/twcomponents/cheatsheet */}