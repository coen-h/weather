export default function Date() {
  return (
    <div className="flex flex-col justify-between bg-white rounded-lg m-4 p-2 px-4 w-1/4">
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Mon</p>
            <img src="thunder.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">24°</p>
                <p className="font-extralight">17°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Tue</p>
            <img src="rain.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">19°</p>
                <p className="font-extralight">15°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Wed</p>
            <img src="cloudy.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">23°</p>
                <p className="font-extralight">19°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Thu</p>
            <img src="clear.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">25°</p>
                <p className="font-extralight">14°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Fri</p>
            <img src="cloudrain.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">18°</p>
                <p className="font-extralight">16°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Sat</p>
            <img src="sunny2.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">22°</p>
                <p className="font-extralight">10°</p>
            </div>
        </div>
        <div className="border-b-2" />
        <div className="flex justify-between items-center h-min">
            <p className="font-semibold text-1xl">Sun</p>
            <img src="cloudy.svg" alt="Sunny" className="w-20 h-20" />
            <div className="flex gap-2">
                <p className="font-medium">16°</p>
                <p className="font-extralight">11°</p>
            </div>
        </div>
    </div>
  )
}