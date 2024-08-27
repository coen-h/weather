import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart(props) {
  const renderGraph = () => {
    if (!props.weather) {
      return <p>Loading...</p>;
    }

    const labels = props.weather.time
      .filter((_, index) => index % 24 === 0)
      .map((time) => new Date(time).toLocaleDateString('en-US', { weekday: 'long' }));

    const chartData = {
      labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: props.weather.temperature_2m.filter((_, index) => index % 24 === 0),
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: false,
            text: "Temperature (°C)",
          },
        },
        x: {
          title: {
            display: false,
            text: "Time",
          },
        },
      },
    };

    return <Line data={chartData} options={options} />;
  };
  
  return (
    <div className="flex flex-col justify-center items-center p-2 m-4 bg-white rounded-lg h-min">
      <p>Weather Forecast</p>
      {renderGraph()}
    </div>
  );
}