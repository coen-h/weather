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

export default function Chart() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&hourly=temperature_2m"
      );
      const data = await response.json();
      setWeather(data.hourly);
      console.log(data);
    };
    fetchData();
  }, []);

  const renderGraph = () => {
    if (!weather) {
      return <p>Loading...</p>;
    }

    const labels = weather.time.map((time) => new Date(time).toLocaleTimeString());
    const chartData = {
      labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: weather.temperature_2m,
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
            display: true,
            text: "Temperature (°C)",
          },
        },
        x: {
          title: {
            display: true,
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