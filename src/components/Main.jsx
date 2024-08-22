export default function Main() {
  return (
        <div className="flex flex-col relative p-4 m-4 bg-white rounded-lg h-min">
          <img src="thunder.svg" alt="Sunny" className="absolute w-48 h-48 -top-4 -right-8" />
          <h1 className="text-3xl font-semibold">Auckland</h1>
          <p className="text-lg font-light">Tue, Aug 21</p>
          <p className="text-8xl font-light pr-32 pb-4">21°C</p>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-tint text-xl"></i>
              <p className="text-md font-light">99%</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="pressure.svg" alt="Pressure" className="w-7" />
              <p className="text-md font-light">1030hPa</p>  
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-cloud-sun text-xl"></i>
              <p className="text-md font-light">8km</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-wind text-xl"></i>
              <p className="text-md font-light">2km/h</p>
            </div>
          </div>
        </div>
  )
}