import Template from "../../Template";
import Pages from "../../Constants/Pages.json";
import axios from "axios";
import './index.css'
import * as React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

//nanti ini buat menampillkan anomaly detection di chart
const datasetsC = [
    {
        sensor_name: "SM_C3R1",
        elementId: "SM_C3R1",
    },
    {
        sensor_name: "SM_C2R1",
        elementId: "SM_C2R1",
    },
    {
        sensor_name: "SM_C1R2",
        elementId: "SM_C1R1",
    },
    {
        sensor_name: "SM_C3R2",
        elementId: "SM_C3R2",
    },
    {
        sensor_name: "SM_C2R2",
        elementId: "SM_C2R2",
    },
    {
        sensor_name: "SM_C1R2",
        elementId: "SM_C1R2",
    },
    {
        sensor_name: "SM_C3R3",
        elementId: "SM_C3R3",
    },
    {
        sensor_name: "SM_C2R3",
        elementId: "SM_C2R3",
    },
    {
        sensor_name: "SM_C1R3",
        elementId: "SM_C1R3",
    },
    {
        sensor_name: "SM_C3R4",
        elementId: "SM_C3R4",
    },
    {
        sensor_name: "SM_C2R4",
        elementId: "SM_C2R4",
    },
    {
        sensor_name: "SM_C1R4",
        elementId: "SM_C1R4",
    },
    {
        sensor_name: "SM_C3R5",
        elementId: "SM_C3R5",
    },
    {
        sensor_name: "SM_C2R5",
        elementId: "SM_C2R5",
    },
    {
        sensor_name: "SM_C1R5",
        elementId: "SM_C1R5",
    },
    {
        sensor_name: "SM_C3R6",
        elementId: "SM_C3R6",
    },
    {
        sensor_name: "SM_C2R6",
        elementId: "SM_C2R6",
    },
    {
        sensor_name: "SM_C1R6",
        elementId: "SM_C1R6",
    },

    //sensor lainnya
    {
        sensor_name: "NPK1",
        elementId: "NPK1",
    },
    {
        sensor_name: "NPK2",
        elementId: "NPK2",
    },
    {
        sensor_name: "PH1",
        elementId: "PH1A",
    },
    {
        sensor_name: "PH2",
        elementId: "PH2A",
    },
    {
        sensor_name: "ST1",
        elementId: "ST1A",
    },
    {
        sensor_name: "ST2",
        elementId: "ST2A",
    },
    {
        sensor_name: "DHT",
        elementId: "DHTA",
    },
];


export default function Anomaly(props) {
 
    //ini nanti buat anomaly
    const [dataC, setDataC] = React.useState({
        SM_C3R1: null,
        SM_C2R1: null,
        SM_C1R1: null,
        SM_C3R2: null,
        SM_C2R2: null,
        SM_C1R2: null,
        SM_C3R3: null,
        SM_C2R3: null,
        SM_C1R3: null,
        SM_C3R4: null,
        SM_C2R4: null,
        SM_C1R4: null,
        SM_C3R5: null,
        SM_C2R5: null,
        SM_C1R5: null,
        SM_C3R6: null,
        SM_C2R6: null,
        SM_C1R6: null,
        //sensor lain
        NPK1: null,
        NPK2: null,
        PH1A: null,
        PH2A: null,
        ST1A: null,
        ST2A: null,
        DHTA: null,
    });

    const [SM_C1R1Chart, setSM_C1R1Chart] = React.useState([]);
    const [SM_C1R2Chart, setSM_C1R2Chart] = React.useState([]);
    const [SM_C1R3Chart, setSM_C1R3Chart] = React.useState([]);
    const [SM_C1R4Chart, setSM_C1R4Chart] = React.useState([]);
    const [SM_C1R5Chart, setSM_C1R5Chart] = React.useState([]);
    const [SM_C1R6Chart, setSM_C1R6Chart] = React.useState([]);

    const [SM_C2R1Chart, setSM_C2R1Chart] = React.useState([]);
    const [SM_C2R2Chart, setSM_C2R2Chart] = React.useState([]);
    const [SM_C2R3Chart, setSM_C2R3Chart] = React.useState([]);
    const [SM_C2R4Chart, setSM_C2R4Chart] = React.useState([]);
    const [SM_C2R5Chart, setSM_C2R5Chart] = React.useState([]);
    const [SM_C2R6Chart, setSM_C2R6Chart] = React.useState([]);

    const [SM_C3R1Chart, setSM_C3R1Chart] = React.useState([]);
    const [SM_C3R2Chart, setSM_C3R2Chart] = React.useState([]);
    const [SM_C3R3Chart, setSM_C3R3Chart] = React.useState([]);
    const [SM_C3R4Chart, setSM_C3R4Chart] = React.useState([]);
    const [SM_C3R5Chart, setSM_C3R5Chart] = React.useState([]);
    const [SM_C3R6Chart, setSM_C3R6Chart] = React.useState([]);

    const [NPK1Chart, setNPK1Chart] = React.useState([]);
    const [NPK2Chart, setNPK2Chart] = React.useState([]);
    const [PH1Chart, setPH1Chart] = React.useState([]);
    const [PH2Chart, setPH2Chart] = React.useState([]);
    const [ST1Chart, setST1Chart] = React.useState([]);
    const [ST2Chart, setST2Chart] = React.useState([]);
    const [DHTChart, setDHTChart] = React.useState([]);

    React.useEffect(() => {

        datasetsC.forEach((datasetC) => {
            console.log("datasetC", datasetC);
            axios
                // .get("https://api.sf2.ctailab.com/anomalyDetection", {
                .get("https://api-sf2.vercel.app/anomalyDetection", {
                    params: {
                        sensor_name: datasetC.sensor_name,
                    },
                })
                .then((res) => {
                    const reversedData = res.data.reverse();
                    setDataC((prevState) => ({
                        ...prevState,
                        [datasetC.elementId]: reversedData || [],
                    }));

                    if (datasetC.elementId === "SM_C1R1") {
                        setSM_C1R1Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C1R2") {
                        setSM_C1R2Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C1R3") {
                        setSM_C1R3Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C1R4") {
                        setSM_C1R4Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C1R5") {
                        setSM_C1R5Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C1R6") {
                        setSM_C1R6Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C2R1") {
                        setSM_C2R1Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C2R2") {
                        setSM_C2R2Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C2R3") {
                        setSM_C2R3Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C2R4") {
                        setSM_C2R4Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C2R5") {
                        setSM_C2R5Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C2R6") {
                        setSM_C2R6Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C3R1") {
                        setSM_C3R1Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C3R2") {
                        setSM_C3R2Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C3R3") {
                        setSM_C3R3Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C3R4") {
                        setSM_C3R4Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C3R5") {
                        setSM_C3R5Chart(reversedData);
                    } else if (datasetC.elementId === "SM_C3R6") {
                        setSM_C3R6Chart(reversedData);
                    } else if (datasetC.elementId === "NPK1") {
                        setNPK1Chart(reversedData);
                    } else if (datasetC.elementId === "NPK2") {
                        setNPK2Chart(reversedData);
                    } else if (datasetC.elementId === "PH1A") {
                        setPH1Chart(reversedData);
                    } else if (datasetC.elementId === "PH2A") {
                        setPH2Chart(reversedData);
                    } else if (datasetC.elementId === "DHTA") {
                        setDHTChart(reversedData);
                    } else if (datasetC.elementId === "ST1A") {
                        setST1Chart(reversedData);
                    } else if (datasetC.elementId === "ST2A") {
                        setST2Chart(reversedData);
                    }
                })
                .catch((err) => {
                    console.log("error => ", err);
                });
        });
    }, []);


    const chartSM_C1R1 = {
        labels: SM_C1R1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C1R1",
                data: SM_C1R1Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };
    const chartSM_C1R2 = {
        labels: SM_C1R2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C1R2",
                data: SM_C1R2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C1R3 = {
        labels: SM_C1R3Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C1R3",
                data: SM_C1R3Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C1R4 = {
        labels: SM_C1R4Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C1R4",
                data: SM_C1R4Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C1R5 = {
        labels: SM_C1R5Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C1R5",
                data: SM_C1R5Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C1R6 = {
        labels: SM_C1R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C1R6",
                data: SM_C1R6Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };


    //bedeng Kolom B
    const chartSM_C2R1 = {
        labels: SM_C2R1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C2R1",
                data: SM_C2R1Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };
    const chartSM_C2R2 = {
        labels: SM_C2R2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C2R2",
                data: SM_C2R2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C2R3 = {
        labels: SM_C2R3Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C2R3",
                data: SM_C2R3Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C2R4 = {
        labels: SM_C2R4Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C2R4",
                data: SM_C2R4Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C2R5 = {
        labels: SM_C2R5Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C2R5",
                data: SM_C2R5Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C2R6 = {
        labels: SM_C2R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C2R6",
                data: SM_C2R6Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartPH1 = {
        labels: PH1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "PH2",
                data: PH1Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartST1 = {
        labels: ST1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "ST2",
                data: ST1Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartNPK1 = {
        labels: NPK1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "NPK2",
                data: NPK1Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartDHT = {
        labels: DHTChart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "DHT",
                data: DHTChart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };



    //bedeng Kolom C
    const chartSM_C3R1 = {
        labels: SM_C3R1Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R1",
                data: SM_C3R1Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };
    const chartSM_C3R2 = {
        labels: SM_C3R2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R2",
                data: SM_C3R2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C3R3 = {
        labels: SM_C3R3Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R3",
                data: SM_C3R3Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C3R4 = {
        labels: SM_C3R4Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R4",
                data: SM_C3R4Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C3R5 = {
        labels: SM_C3R5Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R5",
                data: SM_C3R5Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartSM_C3R6 = {
        labels: SM_C3R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R6",
                data: SM_C3R6Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartPH2 = {
        labels: PH2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "PH3",
                data: PH2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartST2 = {
        labels: ST2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "ST3",
                data: ST2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    const chartNPK2 = {
        labels: NPK2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "NPK Kolom C",
                data: NPK2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };

    //beda section

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Value",
                },
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 1,
                    // min: 0,
                    // max: 1,
                },
            },
        },
    };



    return (
        <Template userName="Fikri Rida P" title="Anomaly" page={Pages.Anomaly}>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-auto">


                        <section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
                            <div className="flex flex-col w-full p-5">
                                <div className="flex gap-5 text-sm tracking-normal w-full">
                                    <div className="flex flex-col gap-3 w-full">
                                        <h2 className="text-2xl font-semibold tracking-tight text-black">
                                            Anomali Sensor
                                        </h2>
                                        <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>

                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C1R1} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C1R2} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C1R3} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C1R4} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C1R5} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C1R6} options={options} />
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C2R1} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C2R2} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C2R3} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C2R4} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C2R5} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C2R6} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartST1} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartPH1} options={options} />
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C3R1} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C3R2} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C3R3} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C3R4} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C3R5} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartSM_C3R6} options={options} />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 px-2 py-5 justify-between items-center w-full font-medium border-b border-solid border-zinc-100">
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartST2} options={options} />
                                            </div>
                                            <div className="font-medium text-gray-400 w-full text-center justify-center items-center">
                                                <Line data={chartPH2} options={options} />
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="grid grid-cols-1 gap-4 mt-12">
							<div className="flex flex-col p-9 gap-4 bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)]">
								<div className="flex flex-row justify-between gap-4">
									<div className="flex flex-col gap-4 mt-3 items-center justify-center w-full">
										<span style={{ color: '#FFFFFF' }} className="text-center">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</span>
									</div>
								</div>
							</div>
						</section>
						

                    </div>
                </div>
            </div>
        </Template>
    );
}
