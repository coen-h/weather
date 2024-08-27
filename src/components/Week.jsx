import weathercodes from "../weathercodes.json";

export default function Week(props) {
    if (!props.weather) {
        return <p>Loading...</p>;
    }

    function getWeatherImage(hour, code) {
        const period = hour >= 6 && hour < 18 ? "day" : "night";
        return weathercodes[code]?.[period]?.image || "/default.svg";
    }

    function getTemperatureRange(dayIndex) {
        const start = dayIndex * 24;
        const end = start + 24;
        return {
            max: Math.max(...props.weather.temperature_2m.slice(start, end)),
            min: Math.min(...props.weather.temperature_2m.slice(start, end)),
        };
    }

    function getMostFrequentWeatherCode(dayIndex) {
        const start = dayIndex * 24;
        const end = start + 24;
        const codes = props.weather.weather_code.slice(start, end);
        const codeFrequency = codes.reduce((acc, code) => {
            acc[code] = (acc[code] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(codeFrequency).reduce((a, b) => codeFrequency[a] > codeFrequency[b] ? a : b);
    }

    const today = new Date();
    const days = [...Array(7)].map((_, i) => {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        return {
            name: day.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3),
            weatherCode: getMostFrequentWeatherCode(i),
            temperatureRange: getTemperatureRange(i),
            hour: day.getHours(),
        };
    });

    return (
        <div className="flex flex-col justify-evenly bg-white rounded-lg m-4 p-2 px-4 w-1/4">
            {days.map((day, index) => (
                <>
                    <div key={index} className="flex justify-between items-center h-min">
                        <p className="font-semibold text-1xl">{day.name}</p>
                        <img src={getWeatherImage(day.hour, day.weatherCode)} alt="Weather" className="w-20 h-20" />
                        <div className="flex gap-2">
                            <p className="font-medium">{day.temperatureRange.max}°</p>
                            <p className="font-extralight">{day.temperatureRange.min}°</p>
                        </div>
                    </div>
                    <div className="border-b-2" />
                </>
            ))}
        </div>
    );
}