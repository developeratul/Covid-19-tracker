import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../api/index";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  const fetchApi = async () => {
    const dailyData = await fetchDailyData();
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "rgb(0, 217, 255)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgb(255, 0, 0)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infetced", "Deaths", "Recoverd"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(0, 217, 255)",
              "rgb(255, 0, 0)",
              "rgb(0, 255, 21)",
            ],
            data: [confirmed.value, deaths.value, recovered.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State is ${country}` },
      }}
    />
  ) : null;

  return (
    <>
      <div className="linechart_container">
        {country ? barChart : lineChart}
      </div>
    </>
  );
};

export default Chart;
