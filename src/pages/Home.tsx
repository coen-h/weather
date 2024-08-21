export default function Home() {
  return (
    <div className="w-screen h-screen p-6">
      <div className="flex w-full h-full bg-slate-300 drop-shadow-md rounded-lg">
        <div className="flex flex-col relative p-4 pr-32 m-4 bg-white rounded-lg h-min">
          <img src="thunder.svg" alt="Sunny" className="absolute w-48 h-48 -top-8 -right-6" />
          <h1 className="text-3xl font-bold">Auckland</h1>
          <p className="text-lg font-light">Tue, Aug 21</p>
          <p className="text-8xl font-light">21°C</p>
        </div>
      </div>
    </div>
  );
}
{/* https://open-meteo.com/en/docs */}
{/* https://www.creative-tim.com/twcomponents/cheatsheet */}