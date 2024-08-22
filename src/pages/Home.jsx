import { useEffect, useState } from "react";
import Main from "../components/Main";
import Timeline from "../components/Timeline";
import Date from "../components/Date";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <div className="w-screen h-screen p-6">
      <div className="flex w-full h-full bg-slate-200 drop-shadow-md rounded-lg">
        <Main />
        <div className="flex flex-col">
          <Timeline />
          <Chart />
        </div>
        <Date />
      </div>
    </div>
  );
}
{/* https://open-meteo.com/en/docs */}
{/* https://www.creative-tim.com/twcomponents/cheatsheet */}