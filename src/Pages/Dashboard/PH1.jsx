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
        sensor_name: "PH2",
        elementId: "PH2",
    },
];


export default function PH1(props) {
 
    //ini nanti buat anomaly
    const [dataC, setDataC] = React.useState({
        PH2: null,
    });

    const [PH2Chart, setPH2Chart] = React.useState([]);
    const [PH2Chart_val, setPH2Chart_val] = React.useState([]);

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

                    if (datasetC.elementId === "PH2") {
                        setPH2Chart(reversedData);
                        setPH2Chart_val(reversedData);
                    } 
                })
                .catch((err) => {
                    console.log("error => ", err);
                });
        });
    }, []);


    const chartPH2 = {
        labels: PH2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "PH2",
                data: PH2Chart.map((item) => item.anomaly),
                fill: false,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(75,192,192,1)",

            },
        ],
    };
    
    const chartPH2_val = {
        labels: PH2Chart.map((item) => new Date(item.createdAt).toLocaleString()),
        datasets: [
            {
                label: "PH2",
                data: PH2Chart.map((item) => item.value),
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
                                                    Anomali Sensor PH2
                                                </h2>
                                                <div className="text-teal-500">Nilai 0 berarti normal dan nilai 1 berarti anomali</div>
                                                <div className="font-medium text-gray-400 text-center justify-center items-center">
                                                    <Line data={chartPH2} options={options} />
                                                </div>
                                            </div>
                                            {/* Kolom kedua */}
                                            <div className="w-1/2 p-3">
                                                <h2 className="text-2xl font-semibold tracking-tight text-black">
                                                    Bacaan Sensor SM_C1R2
                                                </h2>
                                                <div className="text-teal-500">Nilai bacaan sensor yang terekam oleh database</div>
                                                <div className="font-medium text-gray-400 text-center justify-center items-center">
                                                    <Line data={chartPH2_val} options={options} />
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
