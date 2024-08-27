import weatherCodes from "../weathercodes.json";

export default function Timeline(props) {
    const d = new Date();

    if (!props.weather) {
        return <p>Loading...</p>;
    }

    function formatHour(hour) {
        const adjustedHour = hour % 12 || 12;
        const period = hour >= 12 ? "PM" : "AM";
        return (
            <>
                {adjustedHour}
                <span className="font-light text-sm">{period}</span>
            </>
        );
    }

    function getWeatherImage(hour) {
        const weatherCode = props.weather.weather_code[hour % 24];
        const weatherEntry = weatherCodes[weatherCode];
        return weatherEntry ? weatherEntry.day.image : 'default_image.svg';
    }

    return (
    <div className="flex bg-white rounded-lg m-4 p-2 h-min gap-2">
        {[0, 1, 2, 3, 4].map(offset => (
            <div className="flex flex-col justify-center items-center p-2 bg-slate-100 rounded-lg h-min">
                <p>{offset === 0 ? 'Now' : (
                    <>
                        {formatHour(d.getHours() + offset)}
                    </>
                )}</p>
                <img src={getWeatherImage(d.getHours() + offset)} alt="Weather" className="w-24 h-24" />
                <p>{props.weather.temperature_2m[d.getHours() + offset]}°C</p>
            </div>
        ))}
    </div>
  )
}