import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "#CA6BE5",
      borderWidth: "1",
      backgroundColor: "#F8DEFF",
      pointBackgroundColor: "#F8DEFF",
    },
  ],
};

const options = {
  legend: false,
  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       beginAtZero: true,
    //       max: 100,
    //       min: 0,
    //       stepSize: 20,
    //       padding: 10,
    //     },
    //   },
    // ],
    // xAxes: [
    //   {
    //     ticks: {
    //       padding: 5,
    //     },
    //   },
    // ],
  },
};
const BasicArea = (props) => {
  return <Line data={data} options={options} height={props.height} />;
};

export default BasicArea;
