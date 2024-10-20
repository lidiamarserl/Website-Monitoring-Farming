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
        sensor_name: "SM_C3R6",
        elementId: "SM_C3R6",
    },
];


export default function SMC1R1(props) {
 
    //ini nanti buat anomaly
    const [dataC, setDataC] = React.useState({
        SM_C3R6: null,
    });

    const [SM_C3R6Chart, setSM_C3R6Chart] = React.useState([]);
    const [SM_C3R6Chart_val, setSM_C3R6Chart_val] = React.useState([]);

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

                    if (datasetC.elementId === "SM_C3R6") {
                        setSM_C3R6Chart(reversedData);
                        setSM_C3R6Chart_val(reversedData);
                    } 
                })
                .catch((err) => {
                    console.log("error => ", err);
                });
        });
    }, []);


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
    
    const chartSM_C3R6_val = {
        labels: SM_C3R6Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "SM_C3R6",
                data: SM_C3R6Chart.map((item) => item.value),
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
            },
        },
    };



    return (
        <Template userName="Fikri Rida P" title="Anomaly" page={Pages.Dashboard}>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-auto">


                       <section className="flex flex-col mt-10 bg-white overflow-y-hidden rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-full">
                            <div className="flex flex-col w-full p-5">
                                <div className="flex gap-5 text-sm tracking-normal w-full">
                                    <div className="flex flex-col gap-3 w-full">
                                        {/* Kontainer untuk dua kolom */}
                                        <div className="flex flex-wrap">
                                            {/* Kolom pertama */}
                                            <div className="w-1/2 p-3">
                                                <h2 className="text-2xl font-semibold tracking-tight text-black">
                                                    Anomali Sensor SM_C3R6
                                                </h2>
                                                <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>
                                                <div className="font-medium text-gray-400 text-center justify-center items-center">
                                                    <Line data={chartSM_C3R6} options={options} />
                                                </div>
                                            </div>
                                            {/* Kolom kedua */}
                                            <div className="w-1/2 p-3">
                                                <h2 className="text-2xl font-semibold tracking-tight text-black">
                                                    Bacaan Sensor SM_C1R2
                                                </h2>
                                                <div className="text-teal-500">Nilai bacaan sensor yang terekam oleh database</div>
                                                <div className="font-medium text-gray-400 text-center justify-center items-center">
                                                    <Line data={chartSM_C3R6_val} options={options} />
                                                </div>
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
