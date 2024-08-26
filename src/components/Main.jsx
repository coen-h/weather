export default function Main(props) {
  const d = new Date();

  if (!props.weather) {
    return <p>Loading...</p>;
  }
  
  return (
        <div className="flex flex-col relative p-4 m-4 bg-white rounded-lg h-min">
          <img src="thunder.svg" alt="Sunny" className="absolute w-48 h-48 -top-4 -right-8" />
          <h1 className="text-3xl font-semibold">Auckland</h1>
          <p className="text-lg font-light">Tue, Aug 21</p>
          <p className="text-8xl font-light pr-32 pb-4">21°C</p>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-tint text-xl"></i>
              <p className="text-md font-light">{props.weather.relative_humidity_2m[d.getHours()]}%</p>
            </div>
            <div className="flex flex-col items-center">
            <i className="fa-solid fa-gauge text-xl"></i>
              <p className="text-md font-light">{props.weather.pressure_msl[d.getHours()].toString().slice(0, 4)}hPa</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-cloud-sun text-xl"></i>
              <p className="text-md font-light">4km</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-wind text-xl"></i>
              <p className="text-md font-light">{props.weather.windspeed_10m[d.getHours()]}km/h</p>
            </div>
          </div>
        </div>
  )
}