/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this

function LineChart({ chartData, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
        },
    };

    return <Line data={chartData} options={options} />;
}

export default LineChart;
