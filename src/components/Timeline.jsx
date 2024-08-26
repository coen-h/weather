export default function Timeline(props) {
    const d = new Date();

    if (!props.weather) {
        return <p>Loading...</p>;
    }

    function formatHour(hour) {
        const adjustedHour = hour % 24;
        const period = adjustedHour >= 12 ? "PM" : "AM";
        return `${period}`;
    }

    return (
    <div className="flex bg-white rounded-lg m-4 p-2 h-min gap-2">
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>Now</p>
            <img src="night1.svg" alt="Sunny" className="w-24 h-24" />
            <p>{props.weather.temperature_2m[d.getHours()]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{props.weather.time[d.getHours() + 1].slice(11, 13)}<span className="font-light text-sm">{formatHour(d.getHours() + 1)}</span></p>
            <img src="sunny1.svg" alt="Sunny" className="w-24 h-24" />
            <p>{props.weather.temperature_2m[d.getHours() + 1]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{props.weather.time[d.getHours() + 2].slice(11, 13)}<span className="font-light text-sm">{formatHour(d.getHours() + 2)}</span></p>
            <img src="sunny2.svg" alt="Sunny" className="w-24 h-24" />
            <p>{props.weather.temperature_2m[d.getHours() + 2]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{props.weather.time[d.getHours() + 3].slice(11, 13)}<span className="font-light text-sm">{formatHour(d.getHours() + 3)}</span></p>
            <img src="rain.svg" alt="Sunny" className="w-24 h-24" />
            <p>{props.weather.temperature_2m[d.getHours() + 3]}°C</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
            <p>{props.weather.time[d.getHours() + 4].slice(11, 13)}<span className="font-light text-sm">{formatHour(d.getHours() + 4)}</span></p>
            <img src="heavyrainstorm.svg" alt="Sunny" className="w-24 h-24" />
            <p>{props.weather.temperature_2m[d.getHours() + 4]}°C</p>
        </div>
    </div>
  )
}