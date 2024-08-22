import { useEffect, useState } from "react";

export default function Timeline(props) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&hourly=temperature_2m"
        );
        const data = await response.json();
        setWeather(data.hourly);
        console.log(data.hourly);
      };
      fetchData();
    }, []);

    if (!weather) {
        return <p>Loading...</p>; // Handle the case where weather data is not yet available
    }

    return (
    <div className="flex bg-white rounded-lg m-4 p-2 h-min gap-2">
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>Now</p>
            <img src="night1.svg" alt="Sunny" className="w-24 h-24" />
            <p>{weather.temperature_2m[2]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{weather.time[3].slice(11, 13)}<span className="font-light text-sm">AM</span></p>
            <img src="sunny1.svg" alt="Sunny" className="w-24 h-24" />
            <p>{weather.temperature_2m[3]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{weather.time[4].slice(11, 13)}<span className="font-light text-sm">AM</span></p>
            <img src="sunny2.svg" alt="Sunny" className="w-24 h-24" />
            <p>{weather.temperature_2m[4]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{weather.time[5].slice(11, 13)}<span className="font-light text-sm">AM</span></p>
            <img src="rain.svg" alt="Sunny" className="w-24 h-24" />
            <p>{weather.temperature_2m[5]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{weather.time[6].slice(11, 13)}<span className="font-light text-sm">PM</span></p>
            <img src="heavyrainstorm.svg" alt="Sunny" className="w-24 h-24" />
            <p>{weather.temperature_2m[6]}°C</p>
        </div>
    </div>
  )
}