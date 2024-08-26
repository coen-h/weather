export default function Week(props) {
    if (!props.weather) {
        return <p>Loading...</p>;
    }

  return (
    <div className="flex flex-col justify-evenly bg-white rounded-lg m-4 p-2 px-4 w-1/4">
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date().toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="thunder.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(0, 25))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(0, 25))}°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="rain.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(25, 49))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(25, 49))}°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="cloudy.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(49, 73))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(49, 73))}°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="clear.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(73, 97))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(73, 97))}°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="cloudrain.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(97, 121))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(97, 121))}°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="sunny2.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(121, 145))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(121, 145))}°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">{new Date(new Date().setDate(new Date().getDate() + 6)).toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}</p>
            <img src="cloudy.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">{Math.max(...props.weather.temperature_2m.slice(145, 169))}°</p>
                <p className="font-extralight">{Math.min(...props.weather.temperature_2m.slice(145, 169))}°</p>
            </div>
        </div>
    </div>
  )
}